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
            if (data[0]) {
                $('#weidenglu').hide();
                $('#yidenglu').show();
                $.each(data, function(index, json) {
                    $('#yidenglu h3').html(json['user_code'] + "，登录成功~");
                })
            }else{
            	
            	$("header a[href='pmessage.html']").attr('href', 'login.jsp');
            }
        },
        error: function(xhr, type) {
            alert('Ajax error!')
        }
    });
});