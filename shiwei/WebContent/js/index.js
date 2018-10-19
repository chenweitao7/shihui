/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-05 14:33:42
 * @version $Id$
 */

$(function() {
    // 前面的图片滑动
    $("#headerImg div.lunbo ul li").eq(0).show().siblings("#headerImg div.lunbo ul li").hide();
    $("#headerImg div.lunbo div span").eq(0).addClass("active").siblings("#headerImg div.lunbo div span").removeClass("active");

    $('#headerImg div.lunbo ul li').swipeLeft(function() {
        var index = $(this).index() + 1;
        if (index < 3) {
            $('#headerImg div.lunbo ul li').eq(index).show().siblings('#headerImg div.lunbo ul li').hide();
            $('#headerImg div.lunbo div span').eq(index).addClass('active').siblings('#headerImg div.lunbo div span').removeClass('active');
        }
    });
    $('#headerImg div.lunbo ul li').swipeRight(function() {
        var index = $(this).index() - 1;
        if (index >= 0) {
            $('#headerImg div.lunbo ul li').eq(index).show().siblings('#headerImg div.lunbo ul li').hide();
            $('#headerImg div.lunbo div span').eq(index).addClass('active').siblings('#headerImg div.lunbo div span').removeClass('active');
        }
    });

    var imgs = $('#headerImg div.lunbo ul li img');
    // $('#shabi').click(function() {
    $.ajax({
        type: 'GET',
        url: 'http://193.112.8.16/shihui/BaseDictAction',
        dataType: 'json',
        success: function(data) {
            // console.log(data)
            $.each(data, function(index, json) {
                imgs.eq(index).attr('src', json['dict_image']);
            })
        },
        error: function(xhr, type) {
            alert('Ajax error!')
        }
    });

    $.ajax({
        type: 'GET',
        url: 'http://193.112.8.16/shihui/GetNameAction',
        dataType: 'json',
        data: {
            'window_id': '001'
        },
        success: function(data) {
             console.log(data);
            $.each(data, function(index, json) {
                $('#specialBox_1 div.img img').eq(index).attr('src',json['window_image']);
                $('#specialBox_1 div.img span').eq(index).html(json['window_name']);
                var shabi = $('#specialBox_1 a').eq(index).attr('href');
                $('#specialBox_1 a').eq(index).attr('href', shabi+'?window_id='+json['id']);
            })
        },
        error: function(xhr, type) {
            alert('Ajax error_0!')
        }
    });

    $.ajax({
        type: 'GET',
        url: 'http://193.112.8.16/shihui/GetNameAction',
        dataType: 'json',
        data: {
            'window_id': '004'
        },
        success: function(data) {
            // console.log(data);
            $.each(data, function(index, json) {
                $('#specialBox_2 div.img img').eq(index).attr('src',json['window_image']);
                $('#specialBox_2 div.img span').eq(index).html(json['window_name']);
                var shabi = $('#specialBox_2 a').eq(index).attr('href');
                $('#specialBox_2 a').eq(index).attr('href', shabi+'?window_id='+json['id']);
            })
        },
        error: function(xhr, type) {
            alert('Ajax error!_1')
        }
    });

    // 档口
    // $('#specialBox_1 div.img').tap(function() {
        // var index = $(this).index() + 1;
        // $.ajax({
        //     type: 'GET',
        //     url: 'http://193.112.8.16/shihui/FindProductByIdAction',
        //     dataType: 'josn',
        //     data: {
        //         'id': index
        //     },
        //     success: function(data) {
        //     // console.log(data);
        //     $.each(data, function(i, json) {
        //         window.location.href("../../档口/档口.html"+"?"+data[]);
        //     })               
        //     },
        //     error: function(xhr, type) {
        //         alert('Ajax error_2!')
        //     }
        // });
    // });


    // // 档口图片和文字链接
    // $('#specialBox_1 div.img img')
    // var imgs = $('#headerImg div.lunbo ul li img');
    // $.post('http://193.112.8.16/shihui/BaseDictAction', function(data) {
    //     $.each(data, function(i, json) {
    //         imgs.eq(i).attr('src', json['dict_image']);
    //     });
    // });
});