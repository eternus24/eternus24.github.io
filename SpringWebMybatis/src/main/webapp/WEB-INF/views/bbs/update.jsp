<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	request.setCharacterEncoding("UTF-8");
	
	String cp = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

<link rel="stylesheet" type="text/css" href="/springwebmybatis/resources/css/style.css"/>
<link rel="stylesheet" type="text/css" href="/springwebmybatis/resources/css/created.css"/>

<script type="text/javascript" src="/springwebmybatis/resources/js/util.js"></script>

<style type="text/css">

	input:focus {
		
		outline: none;
	
	}

</style>

<script type="text/javascript">

	function sendIt() {
		
		f = document.myForm;
		
		str = f.subject.value;
		
		str = str.trim();
		
		if(!str) {
			
			alert("\n제목을 입력하세요.");
			f.subject.focus();
			return;
			
		}
		
		f.subject.value=str;
		
		if(f.email.value) {
			
			if (!isValidEmail(f.email.value)) {
				
				alert("\n정상적인 E-Mail을 입력하세요.")
				f.email.focus();
				return;
				
			}
			
		}
		
		str = f.content.value;
		
		str = str.trim();
		
		if(!str) {
			
			alert("\n내용을 입력하세요.");
			f.content.focus();
			return;
			
		}
		
		f.content.value=str;
		
		
		str = f.pwd.value;
		
		str = str.trim();
		
		if(!str) {
			
			alert("\n패스워드를 입력하세요.");
			f.pwd.focus();
			return;
			
		}
		
		if (str!="${dto.pwd}") {
			
			alert("\n패스워드가 틀립니다.")
			f.pwd.focus();
			return;
			
		}
		
		f.pwd.value=str;
		
		f.action = "<%=cp%>/updated_ok.action";
		
		f.submit();
	
	}
	
	function pwdChk() {
		
		var f = document.myForm;
		
		if (f.pwd.value!="${dto.pwd}") {
			
			f.pwd.style.borderColor="red";
			f.pwChk.type = "text";
			f.pwChk.style.color = "red";
			
		} else {
			
			f.pwd.style.borderColor="black";
			f.pwChk.type = "hidden";
			
		}
		
	}
	
</script>

</head>
<body>

<div id="bbs">

	<div id="bbs_title">
	
		게 시 글 작 성
		
	</div>
	
	<form action="" name="myForm" method="post">
	
		<div id="bbsCreated">
			
			<div class="bbsCreated_bottomLine">
				
				<dl>
				
					<dt>제&nbsp;&nbsp;&nbsp;&nbsp;목</dt>
					
						<dd>
						
							<input type="text" name="subject" value="${dto.subject}"
							size="60" maxlength="100" class="boxTF"/>
						
						</dd>
				
				</dl>
			
			</div>
			
			<div class="bbsCreated_bottomLine">
		
				<dl>
				
					<dt>작 성 자</dt>
					
						<dd>
						
							<input type="text" name="name" value="${dto.name}"
							size="35" maxlength="100" class="boxTF" readonly="readonly"
							style="border-color: transparent"/>
						
						</dd>
				
				</dl>
		
			</div>
			
			<div class="bbsCreated_bottomLine">
		
				<dl>
				
					<dt>E-Mail</dt>
					
						<dd>
						
							<c:if test="${dto.email==null}">
							
								<input type="text" name="email" value="${dto.email}"
								size="35" maxlength="50" class="boxTF"/>
							
							</c:if>
							
							<c:if test="${dto.email!=null}">
							
								<input type="text" name="email" value=""
								size="35" maxlength="50" class="boxTF"/>
							
							</c:if>
							
						</dd>
				
				</dl>
		
			</div>
			
			<div id="bbsCreated_content">
		
				<dl>
				
					<dt>내&nbsp;&nbsp;&nbsp;&nbsp;용</dt>
					
						<dd>
						
							<textarea rows="12" cols="63" name="content"
							class="boxTA" style="resize: none; background-color: #ffffff;">${dto.content}</textarea>
						
						</dd>
				
				</dl>
		
			</div>
			
			<div class="bbsCreated_noLine">
		
				<dl>
				
					<dt>패스워드</dt>
					
						<dd>
						
							<input type="password" name="pwd"
							size="35" maxlength="7" class="boxTF" onkeypress="pwdChk();"
							onblur="pwdChk();"/>
							
							<input type="hidden" name="pwChk" 
							value="* 비밀번호가 틀립니다." disabled="disabled"
							style="border-color: transparent;background-color: transparent;">
							
						</dd>
				
				</dl>
		
			</div>
		
		</div>
		
		<div id="bbsCreated_footer">
			
			<input type="hidden" name="num" value="${dto.num}">
			<input type="hidden" name="pageNum" value="${pageNum}">
			<input type="hidden" name="searchKey" value="${param.searchKey}">
			<input type="hidden" name="searchValue" value="${param.searchValue}">
			<input type="button" value=" 수정하기 " class="btn2"
			 onclick="sendIt();"/>
			 
			<input type="button" value=" 수정취소 " class="btn2"
			onclick="javascript:location.href='<%=cp%>/article.action?num=${dto.num}&pageNum=${pageNum}${params}';"/>
			
		</div>
	
	</form>

</div>

</body>
</html>