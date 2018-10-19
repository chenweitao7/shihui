<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="s" uri="/struts-tags" %>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
<link rel="stylesheet" href="http://i.gtimg.cn/vipstyle/frozenui/2.0.0/css/frozen.css">
<link rel="stylesheet" type="text/css" href="frozenui-2.0.0/src/css/frozen.css">
<title>食汇 | 登录</title>
 <link rel="stylesheet" href="styles/login-main.css">
 <style type="text/css">
    body {
        background-color: white;
    }
    </style>
</head>
<body>
   <header class="center">
        <img src="img/logo.png" width="200">
    </header>
    <content class="center">
        <form action="http://193.112.8.16/shihui/UserAction_login" method="post">
            <div id="userName" class="ui-border-radius input">
                <label>
                    <img src="img/user.png" width="30" style="position: relative;top: 2px;"><img src="img/竖.jpg" style="margin: 0 8px 0 4px; position: relative; bottom: 1px;">
                    <input type="text" name="user_code" placeholder="请输入用户名">
                </label>
                <div class="input ui-border-radius input-bc">
                    <img src="img/user.png" width="30" style="opacity: 0;">
                </div>
            </div>
            <div id="password" class="ui-border-radius input" style="margin-top: 15px;">
                <label>
                    <img src="img/password.png" width="29" style="position: relative;top: 3px;"><img src="img/竖.jpg" style="margin: 0 8px 0 4px; position: relative; bottom: 1px;">
                    <input type="password" name="user_password" placeholder="请输入密码">
                </label>
                <div class="input ui-border-radius input-bc">
                    <img src="img/user.png" width="30" style="opacity: 0;">
                </div>
            </div>
            <div id="login-box">
                <input id="login" type="submit" class="ui-border-radius" value="登录">
                <div>
                    <a id="enroll" class="left" href="regist.jsp">立即注册</a>
                    <a id="forgetPassword" class="right" href="javascript:;">忘记密码?</a>
                </div>
                <div><font color="red" ><s:property value="exception.message" /></font></div>
            </div>
        </form>
    </content>
    <footer class="center">
    </footer>
</body>
</html>