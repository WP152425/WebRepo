<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="org.dimigo.vo.UserVO" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Info</title>
</head>
<body>
<h1>User Info</h1>
<% UserVO user = (UserVO)session.getAttribute("user"); %>

<h2><%= user.getId() %></h2>
<h2><%= user.getName() %></h2>
<h2><%= user.getNickname() %></h2>
</body>
</html>