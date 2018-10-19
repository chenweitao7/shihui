/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-09 19:11:08
 * @version $Id$
 */

$(function() {
    $('header div a.header_2').hide();

    $.ajax({
        type: 'GET',
        url: 'http://193.112.8.16/shihui/FindProductByIdAction',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            $.each(data, function(index, json) {

            	$('content ul').prepend("<li><div><img src='"+json['window_image']+"'></div><div class='ui-list-info ui-border-b'><h4 class='ui-nowrap'>"+json['window_name']+"<sub>"+json['window_address']+"</sub></h4></div></li>");
            	
            })
        },
        error: function(xhr, type) {
            alert('Ajax error!')
        }
    });


    // 点击右上角三个点
    $('#more').tap(function() {
        if ($('content ul li').has('div.chose').length == 0) {
            $('header a.header_1').hide();
            $('header a.header_2').show();
            $('content ul.ui-list li').css('margin-left', '0px');
            $('content ul li').prepend("<div class='chose'><div></div></div>");

            // 选择
            var oChose = $('content ul li div.chose div');
            for (var i = 0; i < oChose.length; i++) {
                oChose.eq(i).tap(function() {
                    if (!$(this).hasClass('bc-img')) {
                        $(this).addClass('bc-img');
                    } else {
                        $(this).removeClass('bc-img');
                    }
                });
            }

            // 全选
            $('header a.left').tap(function() {
                // if ($(this).text() == '全选') {
                //     for (var i = 0; i < oChose.length; i++) {
                //         oChose.eq(i).addClass('bc-img');
                //     }
                //     $(this).text('全不选');
                // } else {
                //     for (var i = 0; i < oChose.length; i++) {
                //         oChose.eq(i).removeClass('bc-img');
                //     }
                //     $(this).text('全选');
                // }
                console.log("2");
                for (var i = 0; i < oChose.length; i++) {
                    if (!oChose.eq(i).hasClass('bc-img')) {
                        oChose.eq(i).addClass('bc-img');
                    }
                }
            });

            // 取消
            $('header a.right').tap(function() {
                $('header a.header_1').show();
                $('header a.header_2').hide();
                $('content ul.ui-list li').css('margin-left', '25px');
                $('content ul li div.chose').remove();
            });

            // 删除
            $('#delete-btn').tap(function() {
                for (var i = 0; i < oChose.length; i++) {
                    if (oChose.eq(i).hasClass('bc-img')) {
                        oChose.eq(i).parent().parent().remove();
                    }
                }
            });
        }
    });


});