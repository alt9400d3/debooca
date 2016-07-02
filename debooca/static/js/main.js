$(function(){$('[data-toggle="popover"]').popover()});
$(document).ready(function () {
    $('#context_dancer_name').focus(

        function () {

               $.ajax({
                    type: "POST",
                    url: "/context/search/",
                    data: {
                        'search_text' : $('#context_dancer_name').val(),
                        'search_text2' :$('#dancer1').val(),
                        'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: searchSuccess,
                    dataType: 'html'
               });

    });

    $('#context_dancer_name2').focus(
        function () {

               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                        'del_name1' : $('#context_dancer_name').val(),
                        'search_text' : $('#context_dancer_name2').val(),
                        'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: searchSuccess6,
                    dataType: 'html'
               });

    });
    $('#context_dance_program').focus(
        function () {
            $.ajax({
                type: "POST",
                url: "/context/search_dance_program/",
                data: {
                    'search_text' : $('#lalala').val(),
                    'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                },
                success: searchSuccess1,
                dataType: 'html'
            });

        }
    );
    $('#context_age_category').focus(
        function () {
            $.ajax({
                type: "POST",
                url: "/context/search_age_category/",
                data: {
                    'search_text' : $('#lalala').val(),
                    'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                },
                success: searchSuccess2,
                dataType: 'html'
            });

        }
    );
    $('#context_dance_league').focus(
        function () {
            $.ajax({
                type: "POST",
                url: "/context/search_dance_league/",
                data: {
                    'search_text' : $('#lalala').val(),
                    'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                },
                success: searchSuccess3,
                dataType: 'html'
            });

        }
    );


    $('#context_dancer_name_duet').focus(

        function () {

               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                        'del_name1' : $('#context_dancer_name').val(),
                        'del_name2' : $('#context_dancer_name2_duet').val(),
                        'del_name3' : $('#context_dancer_name3_duet').val(),
                        'del_name4' : $('#context_dancer_name4_duet').val(),
                        'del_name5' : $('#context_dancer_name5_duet').val(),
                        'del_name6' : $('#context_dancer_name6_duet').val(),
                        'del_name7' : $('#context_dancer_name7_duet').val(),
                        'search_text' : $('#context_dancer_name_duet').val(),
                        'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: context_dancer_name_duet,
                    dataType: 'html'
               });

    });

    $('#context_dancer_name2_duet').focus(
        function () {
               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                       'del_name1' : $('#context_dancer_name').val(),
                       'del_name2' : $('#context_dancer_name2_duet').val(),
                       'del_name3' : $('#context_dancer_name3_duet').val(),
                       'del_name4' : $('#context_dancer_name4_duet').val(),
                       'del_name5' : $('#context_dancer_name5_duet').val(),
                       'del_name6' : $('#context_dancer_name6_duet').val(),
                       'del_name7' : $('#context_dancer_name7_duet').val(),
                       'search_text' : $('#context_dancer_name2_duet').val(),
                       'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: context_dancer_name2_duet,
                    dataType: 'html'
               });

    });
    $('#context_dancer_name3_duet').focus(
        function () {
               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                       'del_name1' : $('#context_dancer_name').val(),
                       'del_name2' : $('#context_dancer_name2_duet').val(),
                       'del_name3' : $('#context_dancer_name3_duet').val(),
                       'del_name4' : $('#context_dancer_name4_duet').val(),
                       'del_name5' : $('#context_dancer_name5_duet').val(),
                       'del_name6' : $('#context_dancer_name6_duet').val(),
                       'del_name7' : $('#context_dancer_name7_duet').val(),
                       'search_text' : $('#context_dancer_name3_duet').val(),
                       'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: context_dancer_name3_duet,
                    dataType: 'html'
               });

    });
    $('#context_dancer_name4_duet').focus(
        function () {
               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                       'del_name1' : $('#context_dancer_name').val(),
                       'del_name2' : $('#context_dancer_name2_duet').val(),
                       'del_name3' : $('#context_dancer_name3_duet').val(),
                       'del_name4' : $('#context_dancer_name4_duet').val(),
                       'del_name5' : $('#context_dancer_name5_duet').val(),
                       'del_name6' : $('#context_dancer_name6_duet').val(),
                       'del_name7' : $('#context_dancer_name7_duet').val(),
                       'search_text' : $('#context_dancer_name4_duet').val(),
                       'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: context_dancer_name4_duet,
                    dataType: 'html'
               });

    });
    $('#context_dancer_name5_duet').focus(
        function () {
               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                       'del_name1' : $('#context_dancer_name').val(),
                       'del_name2' : $('#context_dancer_name2_duet').val(),
                       'del_name3' : $('#context_dancer_name3_duet').val(),
                       'del_name4' : $('#context_dancer_name4_duet').val(),
                       'del_name5' : $('#context_dancer_name5_duet').val(),
                       'del_name6' : $('#context_dancer_name6_duet').val(),
                       'del_name7' : $('#context_dancer_name7_duet').val(),
                       'search_text' : $('#context_dancer_name5_duet').val(),
                       'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: context_dancer_name5_duet,
                    dataType: 'html'
               });

    });
    $('#context_dancer_name6_duet').focus(
        function () {
               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                       'del_name1' : $('#context_dancer_name').val(),
                       'del_name2' : $('#context_dancer_name2_duet').val(),
                       'del_name3' : $('#context_dancer_name3_duet').val(),
                       'del_name4' : $('#context_dancer_name4_duet').val(),
                       'del_name5' : $('#context_dancer_name5_duet').val(),
                       'del_name6' : $('#context_dancer_name6_duet').val(),
                       'del_name7' : $('#context_dancer_name7_duet').val(),
                       'search_text' : $('#context_dancer_name6_duet').val(),
                       'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: context_dancer_name6_duet,
                    dataType: 'html'
               });

    });
    $('#context_dancer_name7_duet').focus(
        function () {
               $.ajax({
                    type: "POST",
                    url: "/context/search2/",
                    data: {
                       'del_name1' : $('#context_dancer_name').val(),
                       'del_name2' : $('#context_dancer_name2_duet').val(),
                       'del_name3' : $('#context_dancer_name3_duet').val(),
                       'del_name4' : $('#context_dancer_name4_duet').val(),
                       'del_name5' : $('#context_dancer_name5_duet').val(),
                       'del_name6' : $('#context_dancer_name6_duet').val(),
                       'del_name7' : $('#context_dancer_name7_duet').val(),
                       'search_text' : $('#context_dancer_name7_duet').val(),
                       'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                    },
                    success: context_dancer_name7_duet,
                    dataType: 'html'
               });

    });
    $('#context_dance_program_duet').focus(
        function () {
            $.ajax({
                type: "POST",
                url: "/context/search_dance_program/",
                data: {
                    'search_text' : $('#lalala').val(),
                    'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                },
                success: context_dance_program_duet,
                dataType: 'html'
            });

        }
    );
    $('#context_age_category_duet').focus(
        function () {
            $.ajax({
                type: "POST",
                url: "/context/search_age_category/",
                data: {
                    'search_text' : $('#lalala').val(),
                    'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                },
                success: context_age_category_duet,
                dataType: 'html'
            });

        }
    );
    $('#context_dance_league_duet').focus(
        function () {
            $.ajax({
                type: "POST",
                url: "/context/search_dance_league/",
                data: {
                    'search_text' : $('#lalala').val(),
                    'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
                },
                success: context_dance_league_duet,
                dataType: 'html'
            });

        }
    );



    });

function searchSuccess(data, textStatus, jqXHR)
{
    $('#search-results').html(data);
}
function searchSuccess1(data, textStatus, jqXHR)
{
    $('#search-results1').html(data);
}
function searchSuccess2(data, textStatus, jqXHR)
{
    $('#search-results2').html(data);
}
function searchSuccess3(data, textStatus, jqXHR)
{
    $('#search-results3').html(data);
}
function searchSuccess4(data, textStatus, jqXHR)
{
    $('#search-results4').html(data);
}
function searchSuccess5(data, textStatus, jqXHR)
{
    $('#search-results5').html(data);
}
function searchSuccess6(data, textStatus, jqXHR)
{
    $('#search-results6').html(data);
}


function context_dancer_name_duet(data, textStatus, jqXHR)
{
    $('#search-results_duet').html(data);
}
function context_dancer_name2_duet(data, textStatus, jqXHR)
{
    $('#search-results2_duet').html(data);
}

function context_dancer_name3_duet(data, textStatus, jqXHR)
{
    $('#search-results3_duet').html(data);
}

function context_dancer_name4_duet(data, textStatus, jqXHR)
{
    $('#search-results4_duet').html(data);
}

function context_dancer_name5_duet(data, textStatus, jqXHR)
{
    $('#search-results5_duet').html(data);
}

function context_dancer_name6_duet(data, textStatus, jqXHR)
{
    $('#search-results6_duet').html(data);
}

function context_dancer_name7_duet(data, textStatus, jqXHR)
{
    $('#search-results7_duet').html(data);
}
function context_dance_program_duet(data, textStatus, jqXHR)
{
    $('#context_dance_program_duet-results').html(data);
}
function context_age_category_duet(data, textStatus, jqXHR)
{
    $('#context_age_category_duet-results').html(data);
}
function context_dance_league_duet(data, textStatus, jqXHR)
{
    $('#context_dance_league_duet-results').html(data);
}
