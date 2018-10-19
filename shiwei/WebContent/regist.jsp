<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
<link rel="stylesheet" type="text/css" href="frozenui-2.0.0/src/css/frozen.css">
<link rel="stylesheet" href="styles/regist-main.css">
<style type="text/css">
    body {
        background-color: white;
    }
    </style>
    <script type="text/javascript"></script>

<title>食汇 | 注册</title>
</head>
<body>
  <header class="center">
        <img src="img/logo-食.png">
    </header>
    <content>
        <div class="bc-2 center">
            <form action="http://193.112.8.16/shihui/UserAction_regist" method="post">
                <div>
                    <label>
                        <img src="img/user.png" width="30">
                        <div class="underline-img">
                            <img src="img/underline.png">
                            <input id="userName" type="text" name="user_code" placeholder="请输入用户名">
                        </div>
                    </label>
                </div>
                <div class="margin-top">
                    <label>
                        <img src="img/password.png" width="30">
                        <div class="underline-img">
                            <img src="img/underline.png">
                            <input id="password" type="password" name="user_password" placeholder="密码为6-18位数字或英文">
                        </div>
                    </label>
                </div>
                <div class="margin-top">
                    <label>
                        <img src="img/identify.png" width="30">
                        <div class="underline-img">
                            <img src="img/underline.png">
                            <input id="identify" type="text" name="identify" placeholder="请输入验证码">
                        </div>
                    </label>
                </div>
                <input id="submit-btn" type="submit" name="submit" value="注册">
            </form>
            <div id="div-a" class="right"><a href="login.jsp">已有账号?返回登录</a></div>
            <div><font color="red" ><s:property value="#error" /> </font></div>
        </div>
    </content>
</body>
</html>