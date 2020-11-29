// Cookie Compliancy BEGIN
function GetCookie(name) {
  let arg=name+"=";
  let alen=arg.length;
  let clen=document.cookie.length;
  let i=0;
  while (i<clen) {
	let j=i+alen;
	 if (document.cookie.substring(i,j)==arg)
	  return "here";
	i=document.cookie.indexOf(" ",i)+1;
	 if (i==0) break;
  }
  return null;
}
function testFirstCookie(){
	let offset = new Date().getTimezoneOffset();
	if ((offset >= -180) && (offset <= 0)) { // European time zones
		let visit=GetCookie("cookieCompliancyAccepted");
		if (visit==null){
		   $("#cookieConsent").fadeIn(400);	// Show warning
	   } else {
			// Already accepted
	   }
	}
}
$(document).ready(function(){
    $(".cookieConsentOK").click(function(){
		console.log('Understood');
		let expire=new Date();
		expire=new Date(expire.getTime()+7776000000);
		document.cookie="cookieCompliancyAccepted=here; expires="+expire+";path=/";
        $("#cookieConsent").hide(400);
    });
	testFirstCookie();
});
// Cookie Compliancy END
