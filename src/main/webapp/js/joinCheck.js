/**
 * 
 */
function joinCheck() {
	var frm = document.joinForm;
	
	/*아이디가 입력되었는지 유효성 검사*/
	if( frm.memberId.value.length == 0 ){
		alert("Please! Input the Memeber ID. ");
		frm.memberId.focus();		
		return false;
	}
	
	// 아이디가 4자이상 15자 이하만 가능하도록 유효성 검사 
	if( frm.memberId.value.length < 4 || frm.memberId.value.length > 15 ){
		alert("Please! Memeber ID is 4~15 charactor.  ");
		frm.memberId.focus();		
		return false;
	}	
			
	if( frm.memberPw.value.length == 0 ){
		alert("Please! Input the Memeber PW. ");
		frm.memberPw.focus();		
		return false;
	}
	
	if( frm.memberPw.value.length < 4 || frm.memberPw.value.length > 15 ){
		alert("Please! Memeber PW is 4~15 charactor.  ");
		frm.memberPw.focus();		
		return false;
	}		

	if( frm.memberName.value.length == 0 ){
		alert("Please! Input the Memeber Name. ");
		frm.memberName.focus();		
		return false;
	}
	
	// 이름은 한글로만 입력하도록 유효성 검사
	var hangul =/^[ㄱㅏ-힇]*$/;
	var english = /^[a-z][A-Z]*$/;
	var number = /^[0-9]*$/;
	
	if( ! hangul.test(frm.memberName.value) ){
		alert("Please! Memeber Name is only Korean.  ");
		frm.memberName.focus();		
		return false;
	}			
	
	if( frm.memberPhone.value.length == 0 ){
		alert("Please! Input the Memeber Phone. ");
		frm.memberPhone.focus();		
		return false;
	}
			
	// 전화번호는  숫자만 가능하도록 유효성 검사
	if( ! number.test(frm.memberPhone.value) ){
		alert("Please! Memeber Phone is only number.  ");
		frm.memberPhone.focus();		
		return false;
	}			
		
	return true;
}