// 解析網址
// 若網址中沒有Html5=Y則判斷有無開啟flash
function isFlash(sClient, sGetLang)
{
    if (sClient == 1) {
        isFlashEnabled(sGetLang);
    }
}

// 若確認沒啟用flash則出現提示訊息
function isFlashEnabled(sGetLang)
{
    var bHasFlash = false;
    try
    {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if(fo) bHasFlash = true;
    }
    catch(e)
    {
        if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) bHasFlash = true;
    }
    if(navigator.userAgent.match("Chrome")) {
        if(!bHasFlash) {
            var sLangTitle = '';
            var sLangUrl = '';
            var sLangDescription1 = '';
            var sLangDescription2 = '';
            var sLangDescription3 = '';
            var sDescription1TopLength = '';
            var sDescription2TopLength = '';
            var sDescription3TopLength = '';
            switch(sGetLang) {
                case 'tw':
                case 'zh-tw':
                    sLangUrl = 'tw';
                    sLangTitle = '谷歌瀏覽器 阻擋Flash問題排除';
                    sLangDescription1 = '網址列輸入 <span style="color:red">chrome://settings/content</span>';
                    sLangDescription2 = '選擇 <span style="color:red">允許網站執行Flash</span>';
                    sLangDescription3 = '點擊 <span style="color:red">完成</span>';
                    sDescription1TopLength = '325px';
                    sDescription2TopLength = '422px';
                    sDescription3TopLength = '682px';

                break;
                case 'cn':
                case 'zh-cn':
                    sLangUrl = 'cn';
                    sLangTitle = '谷歌浏览器 阻挡Flash问题排除';
                    sLangDescription1 = '网址列输入 <span style="color:red">chrome://settings/content</span>';
                    sLangDescription2 = '选择 <span style="color:red">允许网站执行Flash</span>';
                    sLangDescription3 = '点击 <span style="color:red">完成</span>';
                    sDescription1TopLength = '321px';
                    sDescription2TopLength = '405px';
                    sDescription3TopLength = '680px';
                break;
                default:
                    sLangUrl = 'us';
                    sLangTitle = 'Solve Google Chrome block Flash';
                    sLangDescription1 = 'Enter <span style="color:red">chrome://settings/content</span>';
                    sLangDescription2 = 'Select <span style="color:red">Allow sites to run Flash</span>';
                    sLangDescription3 = 'Click <span style="color:red">Done</span>';
                    sDescription1TopLength = '346px';
                    sDescription2TopLength = '430px';
                    sDescription3TopLength = '707px';
                break;
            }
            // 移除遊戲畫面
            var oForFlashDiv = document.getElementById("forFlashDiv");
            document.getElementsByTagName("BODY")[0].removeChild(oForFlashDiv);
            // 標題綠帽子
            var oGreenBarDiv = document.createElement("div");
            oGreenBarDiv.id = "DivGreenBar";
            oGreenBarDiv.style.height = "80px";
            oGreenBarDiv.style.width = "100%";
            oGreenBarDiv.style.backgroundColor  = "#5CD996";
            document.getElementsByTagName("BODY")[0].appendChild(oGreenBarDiv);
            // Google Logo
            var oGoogleLogoDiv = document.createElement("div");
            oGoogleLogoDiv.id = "DivGoogleLogo";
            oGoogleLogoDiv.style.height = "50px";
            oGoogleLogoDiv.style.width = "50px";
            oGoogleLogoDiv.style.position = "absolute";
            oGoogleLogoDiv.style.left = "50%";
            oGoogleLogoDiv.style.top = "40px";
            oGoogleLogoDiv.style.margin = "-25px 0 0 -340px"; //-30-310 = -280
            oGoogleLogoDiv.innerHTML   = "<img src='/ipl/images/flashEnabled/ChromeLogo.png' width='100%'>";
            oGreenBarDiv.appendChild(oGoogleLogoDiv);
            // Title
            var oGoogleTitleDiv = document.createElement("div");
            oGoogleTitleDiv.id = "DivGoogleTitle";
            oGoogleTitleDiv.style.height = "30px";
            oGoogleTitleDiv.style.position = "absolute";
            oGoogleTitleDiv.style.left = "50%";
            oGoogleTitleDiv.style.top = "40px";
            oGoogleTitleDiv.style.margin = "-14px 0 0 -280px"; //-30-310+50+10 = -280
            oGoogleTitleDiv.style.fontSize = "26px";
            oGoogleTitleDiv.style.whiteSpace  = "nowrap";
            oGoogleTitleDiv.innerText   = sLangTitle;
            oGreenBarDiv.appendChild(oGoogleTitleDiv);
            // 教學圖片
            var oPicDiv = document.createElement("div");
            oPicDiv.id = "DivPic";
            oPicDiv.style.width = "550px";
            oPicDiv.style.position = "absolute";
            oPicDiv.style.left = "50%";
            oPicDiv.style.top = "40px";
            oPicDiv.style.margin = "46px 0 0 -400px";
            oPicDiv.innerHTML   = "<img src='/ipl/images/flashEnabled/" + sLangUrl + "/web_gl_solve.png' width='100%'>";
            document.getElementsByTagName("BODY")[0].appendChild(oPicDiv);
            // 教學文字
            var oDescriptionDiv1 = document.createElement("div");
            var oDescriptionDiv2 = document.createElement("div");
            var oDescriptionDiv3 = document.createElement("div");
            oDescriptionDiv1.id = "DivDescription1";
            oDescriptionDiv2.id = "DivDescription2";
            oDescriptionDiv3.id = "DivDescription3";
            oDescriptionDiv1.className = "DivDescription";
            oDescriptionDiv2.className = "DivDescription";
            oDescriptionDiv3.className = "DivDescription";
            oDescriptionDiv1.style.top = sDescription1TopLength;
            oDescriptionDiv2.style.top = sDescription2TopLength;
            oDescriptionDiv3.style.top = sDescription3TopLength;
            oDescriptionDiv1.innerHTML   = sLangDescription1;
            oDescriptionDiv2.innerHTML   = sLangDescription2;
            oDescriptionDiv3.innerHTML   = sLangDescription3;
            document.getElementsByTagName("BODY")[0].appendChild(oDescriptionDiv1);
            document.getElementsByTagName("BODY")[0].appendChild(oDescriptionDiv2);
            document.getElementsByTagName("BODY")[0].appendChild(oDescriptionDiv3);
        }
    }
}