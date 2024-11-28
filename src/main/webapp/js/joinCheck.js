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

	if( frm.memberPw.value.length == 0 ){
		alert("Please! Input the Memeber PW. ");
		frm.memberPw.focus();		
		return false;
	}

	if( frm.memberName.value.length == 0 ){
		alert("Please! Input the Memeber Name. ");
		frm.memberName.focus();		
		return false;
	}
	if( frm.memberPhone.value.length == 0 ){
		alert("Please! Input the Memeber Phone. ");
		frm.memberPhone.focus();		
		return false;
	}
		
	return true;
}