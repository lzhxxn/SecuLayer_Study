"use strict";_SL.nmspc("login").form=function(){var a={form:"[name=formLogin]",userId:"[name=userId]",userPswd:"[name=userPswd]",checkSave:"[name=checkSave]",btnLogin:".btn-login",cookieUserId:"saveUserId",urlLogin:gCONTEXT_PATH+"login/login.do",urlGetKey:gCONTEXT_PATH+"login/get_key.json",urlOtp:gCONTEXT_PATH+"login/login_otp_html"},b={form:$(a.form),userId:$(a.userId),userPswd:$(a.userPswd),checkSave:$(a.checkSave),btnLogin:$(a.btnLogin)},c=function(a){13==a.keyCode&&d()},d=function(c){_SL.validate()&&(b.checkSave.prop("checked")?$.cookie(a.cookieUserId,b.userId.val(),{expires:30}):$.cookie(a.cookieUserId,""),e(!1))},e=function(c){$("body").requestData(a.urlGetKey,{},{callback:function(a){var d=new RSAKey;d.setPublic(a.publicKeyModulus,a.publicKeyExponent);var e=d.encrypt(b.userId.val()),g=d.encrypt(b.userPswd.val());f(c,e,g)}})},f=function(c,d,f){var g={userId:d,userPswd:f,forceLogin:c?"Y":"N",slKey:gSlKey};$("body").requestData(a.urlLogin,g,{callback:function(c,d,f){var g;switch(d){case"SUC.LI.0001":g=$.cookie(a.cookieUserId),g=c.loginUrl&&""!=c.loginUrl?c.loginUrl:gCONTEXT_PATH,c.popupNotice&&(g+=(-1==g.indexOf("?")?"?":"&")+"popupNotice=Y"),location.href=g;break;case"SUC.LI.0002":var h={user_id:b.userId.val()};new ModalPopup(gCONTEXT_PATH+"login/login_otp.html",{height:130,width:400,data:h});break;case"SUC.LI.0003":_alert("OTP ID를 등록해주세요.</br>관리자에게 문의 바랍니다.",{onAgree:function(){onClose()}});break;case"CNF.LI.0001":_confirm(f,{onAgree:function(){e(!0)}});break;default:_alert(f)}}})};!function(){var e;if(slui.notices.licence(),b.userId.on("keyup",c),b.userPswd.on("keyup",c),b.btnLogin.on("click",d).on("keyup",c),""==b.userId.val()){if(!(e=$.cookie(a.cookieUserId)))return void b.userId.focus();b.userId.val(e),b.checkSave.prop("checked",!0)}b.userPswd.focus()}()}();