# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.shortcuts import render_to_response, redirect
from django.contrib import auth
from django.template.context_processors import csrf
from django.template import RequestContext
from extuser.forms import UserCreationForm, UserCreationForm2, UserCreationForm1
from extuser.models import ExtUser
from django.http import HttpResponseRedirect

def login(request):
    args = {}
    args.update(csrf(request))
    if request.POST:
        username = request.POST.get('email'.encode('ascii','ignore'), '')
        password = request.POST.get('password'.encode('ascii','ignore'), '')
        user = auth.authenticate(email=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('/auth/profile/')
        else:
            args['login_error'] = "Пользователь не найден"
            return render_to_response('login.html', args)
    else:
        return render_to_response('login.html', args)

def profile(request):
    args = {}
    args.update(csrf(request))
    args['form'] = UserCreationForm1(request.POST or None, instance=auth.get_user(request))
    args['user'] = auth.get_user(request)
    user_profile = auth.get_user(request)
    # Save new/edited student
    if request.method == 'POST':
        form = UserCreationForm2(request.POST, instance=user_profile)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/auth/profile/')
    return render_to_response('profile.html', args)


    #
    # args = {}
    # args.update(csrf(request))
    # user_profile = ExtUser.objects.get(email=auth.get_user(request).email)
    # if request.method == 'POST':
    #     form = UserCreationForm(request.POST, instance=user_profile)
    #     if form.is_valid():
    #         form.save()
    #         return HttpResponseRedirect('/auth/register/')
    # else:
    #     args['form'] = UserEditForm(instance=user_profile)
    #     return render_to_response("profile.html", args, context_instance=RequestContext(request))
    #
    #
    # args = {}
    # args.update(csrf(request))
    # user_profile = ExtUser.objects.get(email=auth.get_user(request))
    # args['form'] = UserCreationForm(instance = user_login)
    # args['user'] = auth.get_user(request)
    # return render_to_response('profile.html', args)





def logout(request):
    auth.logout(request)
    return redirect('/')

def register(request):
    args = {}
    args.update(csrf(request))
    args['form'] = UserCreationForm()
    if request.POST:
        newuser_form = UserCreationForm1(request.POST)
        if newuser_form.is_valid():
            newuser_form.save()
            newuser = auth.authenticate(email=newuser_form.cleaned_data['email'], password=newuser_form.cleaned_data['password2'])
            auth.login(request, newuser)
            return redirect('/')
        else:
            args['form'] = newuser_form
    return render_to_response('register.html', args)
