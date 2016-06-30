# -*- coding: utf-8 -*-
from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.contrib.auth import get_user_model



class UserCreationForm(forms.ModelForm):
    login = forms.CharField(
        label='Логин',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    email = forms.CharField(
        label='Электронная почта',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    name = forms.CharField(
        label='Ф.И.О.',
        widget=forms.TextInput(attrs={'class':'form-control'}),
    )
    password1 = forms.CharField(
        label='Пароль',
        widget=forms.PasswordInput(attrs={'class':'form-control'})
    )
    password2 = forms.CharField(
        label='Подтверждение',
        widget=forms.PasswordInput(attrs={'class':'form-control'})
    )

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError('Пароль и подтверждение не совпадают')
        return password2

    def save(self, commit=True):
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        user.login=self.cleaned_data['login']
        user.name=self.cleaned_data['name']
        user.city=self.cleaned_data['city']
        if commit:
            user.save()
        return user

    class Meta:
        model = get_user_model()
        fields = ('email',)

class UserCreationForm1(forms.ModelForm):
    login = forms.CharField(
        label='Логин',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    email = forms.CharField(
        label='Электронная почта',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    name = forms.CharField(
        label='Ф.И.О.',
        widget=forms.TextInput(attrs={'class':'form-control'}),
    )
    country = forms.CharField(
        label='Страна',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    city = forms.CharField(
        label='Город',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    user_information = forms.CharField(
        label='Информация о пользователе',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )

    def save(self, commit=True):
        user = super(UserCreationForm1, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        user.login=self.cleaned_data['login']
        user.name=self.cleaned_data['name']
        user.city=self.cleaned_data['city']
        if commit:
            user.save()
        return user

    class Meta:
        model = get_user_model()
        fields = ('email','name','city','country','user_information', 'login', )


class UserCreationForm2(forms.ModelForm):
    login = forms.CharField(
        label='Логин',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    email = forms.CharField(
        label='Электронная почта',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    name = forms.CharField(
        label='Ф.И.О.',
        widget=forms.TextInput(attrs={'class':'form-control'}),
    )
    country = forms.CharField(
        label='Страна',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    city = forms.CharField(
        label='Город',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    user_information = forms.CharField(
        label='Информация о пользователе',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )

    def save(self, commit=True):
        user = super(UserCreationForm2, self).save(commit=False)
        user.login=self.cleaned_data['login']
        user.name=self.cleaned_data['name']
        user.city=self.cleaned_data['city']
        if commit:
            user.save()
        return user

    class Meta:
        model = get_user_model()
        fields = ('email','name','city','country','user_information', )



class UserEditForm(forms.ModelForm):
    # login = forms.CharField(
    #     label='Логин',
    #     widget=forms.TextInput(attrs={'class':'form-control'})
    # )
    email = forms.CharField(
        label='Электронная почта',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    name = forms.CharField(
        label='Ф.И.О.',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    country = forms.CharField(
        label='Страна',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    city = forms.CharField(
        label='Город',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )
    user_information = forms.CharField(
        label='Информация о пользователе',
        widget=forms.TextInput(attrs={'class':'form-control'})
    )

    def save(self, commit=True):
        user = super(UserEditForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        user.login=self.cleaned_data['login']
        user.name=self.cleaned_data['name']
        if commit:
            user.save()
        return user

    class Meta:
        model = get_user_model()
        fields = ('email','name','city','country','user_information',)


class UserChangeForm(forms.ModelForm):

    '''
    Форма для обновления данных пользователей. Нужна только для того, чтобы не
    видеть постоянных ошибок "Не заполнено поле password" при обновлении данных
    пользователя.
    '''
    password = ReadOnlyPasswordHashField(
        widget=forms.PasswordInput,
        required=False
    )

    # def clean_password(self):
    #     return self.initial['password']

    def save(self, commit=True):
        user = super(UserChangeForm, self).save(commit=False)
        password = self.cleaned_data['password']
        if password:
            user.set_password(password)
        if commit:
            user.save()
        return user

    class Meta:
        model = get_user_model()
        fields = ['email', ]


class LoginForm(forms.Form):

    """Форма для входа в систему
    """
    username = forms.CharField()
    password = forms.CharField()