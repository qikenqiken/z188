//視訊類會員下注記錄
function bet_record(inObj){
	glook = '/app/user_betrecord.php?GameType=' +inObj.gameType+'&GameCode='+inObj.gameCode+'&sid='+SessionID+'&lang='+lang;
	popup = window.open(glook , 'popupnav', 'width=800,height=400,resizable=1,scrollbars=yes');
	popup.focus();
}

//機率類會員下注記錄
function bet_record5(inObj){
	glook = '/app/user_betrecord_probability.php?GameType=' +inObj.gameType+'&GameCode='+inObj.gameCode+'&sid='+SessionID+'&lang='+lang;
	popup = window.open(glook , 'popupnav', 'width=800,height=400,resizable=1,scrollbars=yes');
	popup.focus();
}

//對戰類會員下注記錄
function bet_record6(inObj){
	glook = '/app/user_betrecord_fight.php?GameType=' +inObj.gameType+'&GameCode='+inObj.gameCode+'&sid='+SessionID+'&lang='+lang;
	popup = window.open(glook , 'popupnav', 'width=800,height=400,resizable=1,scrollbars=yes');
	popup.focus();
}

//會員下注記錄
function bet_history(inObj){
	glook = '/app/user_betrecord_probability.php?sid='+SessionID+'&lang='+lang;
	popup = window.open(glook , 'popupnav', 'width=1020,height=700,resizable=1,scrollbars=yes');
	popup.focus();
}

//彩金記錄
function jackpot_record(inObj){
	glook = '/app/jackpot.php?sid='+SessionID+'&lang='+lang;
	popup = window.open(glook , 'popupnav', 'width=800,height=600,resizable=1,scrollbars=yes');
	popup.focus();
}

//回選遊戲頁
function game_select(){
	//glook = '/app/game_select.php';
	//document.all["ifram"].src = glook;
	document.location.replace('/app/GameSelectFlash.php?sid='+SessionID+'&lang='+lang+'&type=3');
}

//遊戲關閉 W3C 規定JS不能關閉另外複製出來開的分頁
function game_close(){
    top.close();
    document.write('');
}

//規則說明
function show_rule(inObj){
	glook = '/app/help.php?GameType=' +inObj.gameType+'&GameCode='+inObj.gameCod+'&sid='+SessionID+'&lang='+lang;
	popup3 = window.open(glook , 'popupnav3', 'width=1024,height=768,resizable=no,scrollbars=yes');
	popup3.focus();
}

//試玩連結
function show_04vip_play(inObj){
	glook = 'http://randomguest.vir888.com?lang='+lang;
	popup3 = window.open(glook , 'popupnav3', 'width=1024,height=768,resizable=no,scrollbars=yes');
	popup3.focus();
}

//歷史公告
function show_msg(inObj){
	glook = '/app/bulletin.php?GameType='+inObj.gameType+'&GameCode='+inObj.gameCode+'&sid='+SessionID+'&lang='+lang;
	popup2 = window.open(glook , 'popupnav4', 'width=660,height=600,resizable=no,scrollbars=yes');
	popup2.focus();
}

// 會員來往紀錄
function user_account(){
	glook = '/app/user_account.php?sid='+SessionID+'&lang='+lang;
	popup2 = window.open(glook , 'popupnav2', 'width=820,height=600,resizable=no,scrollbars=yes');
	popup2.focus();
}

// 修改密碼
function chg_pwd(){
	//glook = 'http://app/member/account/chg_passwd.php?uid='+SessionID;
	glook = '/app/chg_pwd.php?sid='+SessionID+'&lang='+lang;

	popup = window.open(glook , 'popupnav5', 'width=260,height=200,resizable=no,scrollbars=no');
	popup.focus();
}

//關閉子視窗
function close_sub() {
	if (popup != null && popup.open) popup.close();
	if (popup2 != null && popup2.open) popup2.close();
	if (popup3 != null && popup3.open) popup3.close();
}

// 娛樂城遊戲彈跳
function gasian_start(){
	glook = '/app/gasian.php?sid='+SessionID+'&lang='+lang;

	popup = window.open(glook , 'gasian', 'width=800,height=650,resizable=no,scrollbars=no');
	popup.focus();
}

//在線客服彈跳
function js_onlinelink(){
    //glook = 'http://www.'+window.location.hostname.split(".").slice(1,2)+'.'+window.location.hostname.split(".").pop()+'/api/service.jsp?lang='+lang;
	popup = window.open(customerUrl , 'gasian');
	popup.focus();
}

//存款彈跳
function js_deposit_in(){
    //glook = 'http://www.'+window.location.hostname.split(".").slice(1,2)+'.'+window.location.hostname.split(".").pop()+'/api/pay.jsp?lang='+lang+'&username='+LoginName+'&key='+PayKey;
	popup = window.open(depositUrl , 'gasian');
	popup.focus();
}

//取款彈跳
function js_withdraw_out(){
       // glook = 'http://www.'+window.location.hostname.split(".").slice(1,2)+'.'+window.location.hostname.split(".").pop()+'/api/try.jsp?lang='+lang+'&username='+LoginName+'&key='+TryKey;
	popup = window.open(glook , 'gasian');
	popup.focus();
}

//軟體下載
function dm2_download(){
	glook = '/'+dm2_file;
	popup = window.open(glook , 'popupnav5', 'width=0,height=0,resizable=no,scrollbars=no');
}

//登出
function logout(){
	document.location.replace(url+'?sid='+SessionID+'&lang='+lang+'&username='+LoginName);
}

//轉到大熊的頁面goback
function BigBall() {
	ToBig.submit();
}

//jp
function show_JP(obj){
	glook = '/app/showjp.php?sid='+obj.sid+'&lang='+obj.lang;
	popup2 = window.open(glook , 'popupnav2', 'width=830,height=610,resizable=no,scrollbars=no');
	popup2.focus();
}

function gobacklobby(obj){
	if(obj.gamekind == 3){
        window.open("/m/new/#/live","_self");
	}else{
        window.open("/m/new/#/game","_self");
	}
}

function DepositUrl(obj){
    window.open("/infe/macenter/common/basicinfocontroller/redirect.json?SESSION_ID=" + obj.sid + "&langx=" + obj.lang + "&other=deposit" + "&rnd" + obj.vnd);
    popup2.focus();
}