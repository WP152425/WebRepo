/**
 * 
 */
$(document).ready(function(){
  		$('#loginform').submit(function(event) {
  			// 
  			event.preventDefault();
  			
  			//id, pwd 가져오기
  			var id = $('#id').val();
  			var pwd = $('#password').val();
  			console.log(id, pwd);
  			
  			// 서버로 post 방식 전송
  			$.post("http://httpbin.org/post", {id : id, pwd: pwd}, function(data){
  				//서버로부터의 응답
  				//alert(data.form.id + "님 로그인되었습니다.");
  				var myModal = $('#myModal');
  				myModal.modal();
  				myModal.find('.modal-body').text(data.form.id + "님 로그인되었습니다.");
  			});
  		});
  	});