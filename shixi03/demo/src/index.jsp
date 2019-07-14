<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>教师评价系统</title>
 </script>
</head>
<body>

	<br/><div style="text-align:right;">
		<a href="#">注销</a>
	</div>
	<br/>
	<center>教师评价系统</center>
	<br/><br/>
	<!-- 教师表格 -->
                <table style="padding:0px" align="center">
                    <tr>
                        <li>老师姓名&nbsp老师成绩</li>
                    </tr>

                    
                </table>
                <tbody>
                
                        <c:forEach items="${tealist}" var="t">
                          <form action="getgrade.do" method="post"><!--  -->
                            <tr>
                                <td id  = table1>${t.name}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>
                                <td id = tabel2>${t.grade}</td>               
                            </tr>
                                                                                               老师评价:
                              <input type="radio" name="laoshi" value = "A"/>A
                              <input type="radio" name="laoshi" value = "B"/>B
                              <input type="radio" name="laoshi" value = "C"/>C
                              <input type="radio" name="laoshi" value = "D"/>D
                              <input type="radio" name="laoshi" value = "E"/>E
                              <input type="submit" value="提交">
                          </form>
                        </c:forEach>
                    </tbody>
                    <script>
                      //获取所有的form
                      var formArr =  document.querySelectorAll('form')
                      for(var i=0;i<formArr.length;i++) {
                        var tabel1 = document.getElementById('table1').innerHTML
                        var tabel2 = document.getElementById('table2').innerHTML
                        var input = formArr[i].querySelectorAll('input')
                        for(var i=0;i<input.length;i++) {
                          if(input[i].checked) {
                            var content = input[i].value
                          }
                        }
                      }          
                      var s = tabel1+';'+tabel2+';'+content
                    </script>
</body>
</html>