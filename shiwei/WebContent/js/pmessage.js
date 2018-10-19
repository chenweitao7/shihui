/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-08 21:24:53
 * @version $Id$
 */

$(function() {
    $.ajax({
        type: 'GET',
        url: 'http://193.112.8.16/shihui/LoginNameAction',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if (data[0]) {
                $.each(data, function(index, json) {
                    $('input[name=user_name]').val(json['user_name']);
                    if ( $('input[name=user_sex]')=='girl' ) {
                        $('input[name=user_sex][value=boy]').attr('checked','');
                        $('input[name=user_sex][value=girl]').attr('checked','checked');
                    }
                    else {
                        $('input[name=user_sex][value=girl]').attr('checked','');
                        $('input[name=user_sex][value=boy]').attr('checked','checked');
                    }
                    $('input[name=user_phone]').val(json['user_phone']);
                    $('input[name=user_address]').val(json['user_address']);
                })
            }
        },
        error: function(xhr, type) {
            alert('Ajax error!')
        }
    });
});