/**
 * 
 */
$(document).ready(function(){
  		$('#joinform').submit(function(event) {
  			// 
  			event.preventDefault();
  			
  			//name 가져오기
  			var name = $('#name').val();
  			console.log(name);
  			
  			// 서버로 post 방식 전송
  			$.post("http://httpbin.org/post", {name:name}, function(data){
  				//서버로부터의 응답
  				//alert(data.form.id + "님 로그인되었습니다.");
  				var myModal = $('#myModal2');
  				myModal.modal();
  				myModal.find('.modal-body').text(data.form.name + "님 회원가입되었습니다.");
  			});
  		});
  	});