/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-22 14:33:42
 * @version $Id$
 */

$(function() {

    $.ajax({
        type: 'GET',
        url: 'http://193.112.8.16/shihui/GetProductMessageAction_getMessage',
        dataType: 'josn',
        data: {
            'window_id': window.location.search.slice(11, window.location.search.length)
        },
        success: function(data) {
            console.log(data);
            var inum = 1;
            $.each($.parseJSON(data), function(i, json) {
                if (inum == 1) {
                    $('#window_name').text(json['window_name']);
                    $('#message').text(json['message']);
                    inum++;
                }
                $('content ul').append("<li><div class='wrap'><img src=" + json['pimage'] + "><div><h1>" + json['pname'] + "</h1><h1>价格：" + json['shop_price'] + "元</h1></div></div></li>");
            })
        },
        error: function(xhr, type) {
            alert('Ajax error!' + type)
        }
    });
    // $.ajax({
    //     type: 'GET',
    //     url: 'http://193.112.8.16/shihui/GetProductMessageAction_getMessage',
    //     dataType: 'josn',
    //     data: {
    //         'window_id': window.location.search.slice(11, window.location.search.length)
    //     },
    //     success: function(data) {
    //         console.log(data);
    //         $.each($.parseJSON(data), function(i, json) {
    //             $('content ul').append("<li><div class='wrap'><img src=" + json['pimage'] + "><div><h1>" + json['pname'] + "</h1><h1>价格：" + json['shop_price'] + "元</h1></div></div></li>");
    //         })
    //     },
    //     error: function(xhr, type) {
    //         alert('Ajax error!' + type)
    //     }
    // });

    $('header a.right').tap(function() {
        $.ajax({
            type: 'GET',
            url: 'http://193.112.8.16/shihui/CollectionAction',
            dataType: 'josn',
            data: {
                'id': window.location.search.slice(11, window.location.search.length)
            },
            success: function(data) {
                alert("收藏成功~");
            },
            error: function(xhr, type) {
            }
        });
    });
});