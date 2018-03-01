var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DeviceAndEnvironment;
(function (DeviceAndEnvironment) {
    var Device = (function () {
        function Device() {
        }
        Device.isMobile = function () {
            if (DeviceAndEnvironment.Device.iOS() || DeviceAndEnvironment.Device.Android() || DeviceAndEnvironment.Device.BlackBerry() || DeviceAndEnvironment.Device.WindowsPhone() || DeviceAndEnvironment.Device.WindowsTablet() || DeviceAndEnvironment.Device.webOS())
                return true;
            return false;
        };
        Device.DeviceType = function () {
            if (DeviceAndEnvironment.Device.iOS())
                return "IOS";
            else if (DeviceAndEnvironment.Device.Android())
                return "Android";
            else if (DeviceAndEnvironment.Device.BlackBerry())
                return "BlackBerry";
            else if (DeviceAndEnvironment.Device.WindowsPhone())
                return "WindowsPhone";
            else if (DeviceAndEnvironment.Device.WindowsTablet())
                return "WindowsTablet";
            else if (DeviceAndEnvironment.Device.webOS())
                return "webOS";
            else
                return "Desktop";
        };
        Device.searchIndex = function (a, s) {
            var index;
            for (var i = 0; i < a.length; i++) {
                if (a[i].match(s)) {
                    index = i;
                    break;
                }
            }
            return index;
        };
        Device.getDesktopOS = function () {
            var osName = "";
            var target = window.navigator.userAgent;
            if (target.indexOf("Windows NT 10.0") != -1)
                osName = "Windows 10";
            if (target.indexOf("Windows NT 6.2") != -1)
                osName = "Windows 8";
            if (target.indexOf("Windows NT 6.1") != -1)
                osName = "Windows 7";
            if (target.indexOf("Windows NT 6.0") != -1)
                osName = "Windows Vista";
            if (target.indexOf("Windows NT 5.1") != -1)
                osName = "Windows XP";
            if (target.indexOf("Windows NT 5.0") != -1)
                osName = "Windows 2000";
            if (target.indexOf("Mac") != -1)
                osName = "Mac/iOS";
            if (target.indexOf("X11") != -1)
                osName = "UNIX";
            if (target.indexOf("Linux") != -1)
                osName = "Linux";
            return osName;
        };
        Device.iOS = function () {
            if (navigator.userAgent.match(/iPhone|iPad|iPod/i))
                return true;
            return false;
        };
        Device.iPhone4Inch = function () {
            if (navigator.userAgent.match(/iPhone/i) && screen.width < 375)
                return true;
            return false;
        };
        Device.isTablet = function () {
            if (DeviceAndEnvironment.Device.isMobile()) {
                if (DeviceAndEnvironment.Device.iOS()) {
                    if (navigator.userAgent.match(/iPad/i))
                        return true;
                    else
                        return false;
                }
                else if (DeviceAndEnvironment.Device.Android()) {
                    if (navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i)) {
                        return false;
                    }
                    else
                        return true;
                }
                else if (DeviceAndEnvironment.Device.WindowsTablet()) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        Device.iOSWebView = function () {
            var userAgent = window.navigator.userAgent.toLowerCase(), safari = /safari/.test(userAgent);
            if (Device.iOS() && !safari)
                return true;
            else
                return false;
        };
        Device.AndroidWebView = function () {
            var userAgent = window.navigator.userAgent.toLowerCase(), webview = /wv/.test(userAgent);
            if (Device.Android() && webview)
                return true;
            else
                return false;
        };
        Device.isAIO = function () {
            if (this.getParameterByName('platform') == 'AIO')
                return true;
            else
                return false;
        };
        Device.getParameterByName = function (name) {
            var url = parent.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };
        Device.Android = function () {
            if (navigator.userAgent.match(/Android/i))
                return true;
            return false;
        };
        Device.BlackBerry = function () {
            if (navigator.userAgent.match(/BlackBerry/i))
                return true;
            return false;
        };
        Device.WindowsPhone = function () {
            if (navigator.userAgent.match(/Windows Phone/i))
                return true;
            return false;
        };
        Device.WindowsTablet = function () {
            if (navigator.userAgent.match(/Windows/i) && navigator.userAgent.match(/ARM/i))
                return true;
            return false;
        };
        Device.webOS = function () {
            if (navigator.userAgent.match(/webOS/i))
                return true;
            return false;
        };
        Device.getflashPlayerVersion = function () {
            var f = false;
            var version = swfobject.getFlashPlayerVersion();
            if (version != null && version != undefined) {
                if (version["major"] > 0) {
                    f = true;
                }
            }
            return f;
        };
        Device.getBrowser = function () {
            var aryStrBrowser = ["isUB", "isOpera", "isFirefox", "isSafari", "isIE", "isEdge", "isChrome"];
            var aryBoolean = [];
            var len = aryStrBrowser.length;
            var index = 0;
            var browser;
            aryBoolean.push(DeviceAndEnvironment.Device.isUB());
            aryBoolean.push(DeviceAndEnvironment.Device.isOpera());
            aryBoolean.push(DeviceAndEnvironment.Device.isFirefox());
            aryBoolean.push(DeviceAndEnvironment.Device.isSafari());
            aryBoolean.push(DeviceAndEnvironment.Device.isIE());
            aryBoolean.push(DeviceAndEnvironment.Device.isEdge());
            aryBoolean.push(DeviceAndEnvironment.Device.isChrome());
            for (var i = 0; i < len; i++) {
                if (aryBoolean[i]) {
                    index = i;
                    break;
                }
                else {
                    index = aryBoolean.length;
                }
            }
            if (index != aryBoolean.length)
                browser = aryStrBrowser[index];
            var spaceSp = navigator.userAgent.split(' ');
            switch (browser) {
                case 'isUB':
                case 'isOpera':
                case 'isSafari':
                case 'isFirefox':
                case 'isEdge':
                case 'isIE':
                    browser = spaceSp[spaceSp.length - 1].replace(/\//g, ' ');
                    break;
                case 'isChrome':
                    browser = spaceSp[spaceSp.length - 2].replace(/\//g, ' ');
                    break;
            }
            if (navigator.userAgent.match(/Mobile Safari/i)) {
                browser = spaceSp[spaceSp.length - 1].replace(/\//g, ' ');
                if (browser.match("Safari"))
                    browser = spaceSp[spaceSp.length - 4].replace(/\//g, ' ');
                if (browser.match("Gecko"))
                    browser = spaceSp[spaceSp.length - 3].replace(/\//g, ' ');
            }
            else if (DeviceAndEnvironment.Device.Android() && index == aryBoolean.length) {
                browser = spaceSp[spaceSp.length - 2].replace(/\//g, ' ');
            }
            if (navigator.userAgent.match(/iOS/i)) {
                browser = spaceSp[spaceSp.length - 3].replace(/\//g, ' ');
            }
            return browser;
        };
        Device.getOSAndVersion = function () {
            var index;
            var info = navigator.userAgent.split('(')[1].split(')')[0].split(';');
            if (DeviceAndEnvironment.Device.Android()) {
                index = Device.searchIndex(info, 'Android');
                return info[index];
            }
            else if (DeviceAndEnvironment.Device.iOS()) {
                var os = info[0];
                var version;
                if (os == 'iPad')
                    version = info[1].split(' ')[3].replace(/_/g, '.');
                else
                    version = info[1].split(' ')[4].replace(/_/g, '.');
                return os + ' ' + version;
            }
            else {
                var os;
                if (DeviceAndEnvironment.Device.getDesktopOS() == 'Mac/iOS') {
                    os = info[1].replace(/_/g, '.');
                }
                else {
                    os = DeviceAndEnvironment.Device.getDesktopOS();
                }
                return os;
            }
        };
        Device.isUB = function () {
            return navigator.userAgent.indexOf(' UB/') >= 0;
        };
        Device.isOpera = function () {
            return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        };
        Device.isFirefox = function () {
            if (navigator.userAgent.indexOf("Firefox") != -1) {
                return true;
            }
            else {
                return false;
            }
        };
        Device.isSafari = function () {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') != -1) {
                if (ua.indexOf('chrome') > -1) {
                    return false;
                }
                else {
                    return true;
                }
            }
        };
        Device.isIE = function () {
            return !!document.documentMode;
        };
        Device.isEdge = function () {
            return (navigator.userAgent.indexOf("Trident") > -1) ? true : false;
        };
        Device.isChrome = function () {
            if (window.chrome == undefined) {
                return false;
            }
            else if (window.chrome.webstore == undefined) {
                return false;
            }
            else {
                return !!window.chrome || !!window.chrome.webstore;
            }
        };
        Device.getResolution = function () {
            return { w: window.innerWidth, h: window.innerHeight };
        };
        Device.getScreenResolution = function () {
            return { w: screen.width, h: screen.height };
        };
        Device.getGraphicCardInfo = function (c) {
            var gl = c.getContext("webgl") || c.getContext("experimental-webgl");
            var debugInfo = null;
            try {
                debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
            }
            catch (e) {
                console.log(e);
            }
            var showGPU = "undefined";
            if (debugInfo != null) {
                var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                showGPU = renderer;
            }
            return showGPU;
        };
        Device.getDeviceInfo = function (c) {
            var os = DeviceAndEnvironment.Device.getOSAndVersion();
            var aio = false;
            var programmingLanguage = "H5";
            var resolution = DeviceAndEnvironment.Device.getScreenResolution();
            var browser = DeviceAndEnvironment.Device.getBrowser();
            var isTablet = false;
            var webView = "false";
            var graphicCard = "";
            var screenResolution;
            var windowResolution;
            var timestamps = Date.now();
            var mua = "";
            var dtp = "";
            if (DeviceAndEnvironment.Device.isMobile()) {
                screenResolution = (resolution.w * devicePixelRatio).toString() + 'x' + (resolution.h * devicePixelRatio).toString();
                aio = DeviceAndEnvironment.Device.isAIO();
                isTablet = DeviceAndEnvironment.Device.isTablet();
                if (DeviceAndEnvironment.Device.iOS()) {
                    webView = (DeviceAndEnvironment.Device.iOSWebView()) ? "is_iOSWebView" : "isnot_iOSWebView";
                }
                else if (DeviceAndEnvironment.Device.Android()) {
                    webView = (DeviceAndEnvironment.Device.AndroidWebView()) ? "is_AndroidWebView" : "isnot_AndroidWebView";
                }
            }
            else {
                screenResolution = (resolution.w).toString() + 'x' + (resolution.h).toString();
            }
            windowResolution = window.innerWidth.toString() + 'x' + window.innerHeight.toString();
            if (c != undefined) {
                graphicCard = DeviceAndEnvironment.Device.getGraphicCardInfo(c);
            }
            if (window.location.search.split("?").length > 1) {
                var urlGet = [];
                var getValue;
                var urlSerch = window.location.search.split("?")[1].split("&");
                for (var i = 0; i < urlSerch.length; i++) {
                    getValue = urlSerch[i].split("=");
                    urlGet[getValue[0]] = getValue[1];
                }
                if (urlGet["mua"])
                    mua = urlGet["mua"];
                if (urlGet["dtp"])
                    dtp = urlGet["dtp"];
            }
            var returnObj = {
                rd: "fx",
                ua: navigator.userAgent,
                os: os,
                srs: screenResolution,
                wrs: windowResolution,
                dpr: devicePixelRatio,
                pl: programmingLanguage,
                pf: browser,
                wv: webView,
                aio: aio,
                vga: graphicCard,
                tablet: isTablet,
                cts: timestamps,
                mua: mua,
                dtp: dtp
            };
            return returnObj;
        };
        return Device;
    }());
    DeviceAndEnvironment.Device = Device;
})(DeviceAndEnvironment || (DeviceAndEnvironment = {}));
var H5EventdispatcherCore;
(function (H5EventdispatcherCore) {
    var EventDispatcher = (function () {
        function EventDispatcher() {
            this._objEvent = {};
            this._aryBubbles = [];
        }
        EventDispatcher.prototype.addEventListener = function (evtType, listener) {
            if (this._objEvent[evtType] === undefined) {
                this._objEvent[evtType] = [];
            }
            if (this.getIndex(evtType, listener) === -1) {
                this._objEvent[evtType].push(listener);
            }
        };
        EventDispatcher.prototype.removeEventListener = function (evtType, listener) {
            var handlers = this._objEvent[evtType];
            if (handlers) {
                var l = handlers.length;
                for (var i = 0; i < l; i++) {
                    if (handlers[i] === listener) {
                        handlers.splice(i, 1);
                        if (handlers.length == 0) {
                            delete this._objEvent[evtType];
                        }
                        break;
                    }
                }
            }
        };
        EventDispatcher.prototype.removeEventListeners = function (s) {
            if (s === void 0) { s = ""; }
            if (this._objEvent[s] !== undefined) {
                delete this._objEvent[s];
            }
            else if (s == "") {
                this._objEvent = null;
            }
        };
        EventDispatcher.prototype.hasEventListener = function (evtType) {
            var handlers = this._objEvent[evtType];
            var b = (handlers) ? true : false;
            return b;
        };
        EventDispatcher.prototype.dispatchEvent = function (evt) {
            var previousTarget = evt.target;
            evt.target = this;
            if (evt.bubbles) {
                this.bubbleEvt(evt);
            }
            else {
                this.invokeEvt(evt);
            }
            if (previousTarget != null)
                evt.target = previousTarget;
        };
        EventDispatcher.prototype.invokeEvt = function (evt) {
            var handlers = this._objEvent[evt.type];
            var handlersLen = (handlers !== undefined) ? handlers.length : 0;
            if (handlersLen > 0) {
                var l = handlers.length;
                evt.currentTarget = this;
                for (var i = 0; i < l; i++) {
                    handlers[i](evt);
                    if (evt.stopCommunication)
                        return true;
                }
                return evt.stopOtherListener;
            }
            else {
                return false;
            }
        };
        EventDispatcher.prototype.bubbleEvt = function (evt) {
            var count = 1;
            var bubbleElement = this;
            var aryEvtdispatcher;
            aryEvtdispatcher = (this._aryBubbles.length > 0) ? this._aryBubbles.pop() : [];
            aryEvtdispatcher.push(bubbleElement);
            while ((bubbleElement = bubbleElement.parent) != null) {
                aryEvtdispatcher[count++] = bubbleElement;
            }
            for (var i = 0; i < count; i++) {
                var flag = aryEvtdispatcher[i].invokeEvt(evt);
                if (flag)
                    break;
            }
            aryEvtdispatcher.length = 0;
            this._aryBubbles.push(aryEvtdispatcher);
        };
        EventDispatcher.prototype.getIndex = function (type, listen) {
            var index = -1;
            if (this._objEvent[type] !== undefined) {
                var ary = this._objEvent[type];
                var len = ary.length;
                for (var i = 0; i < len; i++) {
                    if (ary[i] === listen) {
                        index = i;
                        break;
                    }
                }
            }
            return index;
        };
        return EventDispatcher;
    }());
    H5EventdispatcherCore.EventDispatcher = EventDispatcher;
})(H5EventdispatcherCore || (H5EventdispatcherCore = {}));
var H5Event;
(function (H5Event) {
    var H5BaseEvent = (function () {
        function H5BaseEvent(type, bubbles, obj) {
            if (bubbles === void 0) { bubbles = false; }
            if (obj === void 0) { obj = null; }
            this._stopOtherListener = false;
            this._stopCommunication = false;
            this._type = type;
            this._bubbles = bubbles;
            this._currentTarget = null;
            this._target = null;
            this._sendObject = obj;
        }
        Object.defineProperty(H5BaseEvent.prototype, "type", {
            get: function () { return this._type; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(H5BaseEvent.prototype, "target", {
            get: function () { return this._target; },
            set: function (value) { this._target = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(H5BaseEvent.prototype, "currentTarget", {
            get: function () { return this._currentTarget; },
            set: function (value) { this._currentTarget = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(H5BaseEvent.prototype, "sendObject", {
            get: function () { return this._sendObject; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(H5BaseEvent.prototype, "bubbles", {
            get: function () { return this._bubbles; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(H5BaseEvent.prototype, "stopOtherListener", {
            get: function () { return this._stopOtherListener; },
            set: function (value) { this._stopOtherListener = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(H5BaseEvent.prototype, "stopCommunication", {
            get: function () { return this._stopCommunication; },
            set: function (value) { this._stopCommunication = value; },
            enumerable: true,
            configurable: true
        });
        H5BaseEvent.prototype.clone = function () {
            return new H5Event.H5BaseEvent(this._type, this._bubbles, this._sendObject);
        };
        H5BaseEvent.COMPLETE = "H5Event_complete";
        H5BaseEvent.CHANGE = "H5Event_change";
        H5BaseEvent.REMOVED = "H5Event_removed";
        H5BaseEvent.IO_ERROR = "H5Event_ioError";
        return H5BaseEvent;
    }());
    H5Event.H5BaseEvent = H5BaseEvent;
})(H5Event || (H5Event = {}));
var GameLib;
(function (GameLib) {
    var IPLEvent = (function (_super) {
        __extends(IPLEvent, _super);
        function IPLEvent(type, data) {
            return _super.call(this, type, false, data) || this;
        }
        IPLEvent.prototype.clone = function () {
            var evt = new IPLEvent(this.type, this.sendObject);
            return evt;
        };
        IPLEvent.ON_PARAMETER = "on_parameter";
        IPLEvent.ON_HTTP_REQUEST_DATA = "on_http_request_data";
        IPLEvent.ON_PATH_READY = "on_http_path_ready";
        return IPLEvent;
    }(H5Event.H5BaseEvent));
    GameLib.IPLEvent = IPLEvent;
    var LinkInfo = (function (_super) {
        __extends(LinkInfo, _super);
        function LinkInfo(strDomain) {
            if (strDomain === void 0) { strDomain = ""; }
            var _this = _super.call(this) || this;
            _this._xmlRequest = new XMLHttpRequest();
            _this._xmlRequest.onloadend = function () {
                _this.onResponse();
            };
            _this._objLinkandGameType = null;
            _this._strDomain = strDomain;
            _this._strFileAddress = "/ipl/app/flash/pig/common/scj.json";
            _this._objGetValue = null;
            return _this;
        }
        Object.defineProperty(LinkInfo.prototype, "strFileAddress", {
            set: function (value) {
                this._strFileAddress = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LinkInfo.prototype, "strDomain", {
            set: function (value) {
                this._strDomain = value;
            },
            enumerable: true,
            configurable: true
        });
        LinkInfo.prototype.load = function () {
            this._xmlRequest.open("GET", this._strDomain + this._strFileAddress);
            this._xmlRequest.send();
        };
        LinkInfo.prototype.onResponse = function () {
            var obj = JSON.parse(this._xmlRequest.responseText);
            this._objLinkandGameType = obj["lang"];
            this.dispatchEvent(new H5Event.H5BaseEvent("DICT_LOADED"));
        };
        LinkInfo.prototype.getLink = function (strGameType, strWillUseLink) {
            var obj = this.getObject(strGameType);
            var str = (strWillUseLink == "0") ? obj["gameLink"] : obj["gameLink1"];
            return str;
        };
        LinkInfo.prototype.getDefaultLinkValue = function (gt) {
            var obj = this.getObject(gt);
            var str = obj["defaultLink"];
            return str;
        };
        LinkInfo.prototype.checkLinkValue = function (gt, mode) {
            var obj = this.getObject(gt);
            var str = (mode == "0") ? "gameLink" : "gameLink" + mode;
            var flag = (obj[str] != "") ? true : false;
            return flag;
        };
        LinkInfo.prototype.getObject = function (gt) {
            if (this._objGetValue == null) {
                var aryAll = this._objLinkandGameType["cn"];
                var ary;
                var len = aryAll.length;
                var lenList = 0;
                for (var i = 0; i < len; i++) {
                    ary = aryAll[i];
                    lenList = ary.length;
                    for (var j = 0; j < lenList; j++) {
                        if (ary[j]["gameType"] === gt) {
                            this._objGetValue = ary[j];
                            break;
                        }
                    }
                    if (this._objGetValue != null)
                        break;
                }
            }
            return this._objGetValue;
        };
        return LinkInfo;
    }(H5EventdispatcherCore.EventDispatcher));
    GameLib.LinkInfo = LinkInfo;
    var UrlParameter = (function (_super) {
        __extends(UrlParameter, _super);
        function UrlParameter() {
            var _this = _super.call(this) || this;
            _this._isLocal = false;
            _this._strDomain = "";
            _this._strPathFile = "";
            _this._strServerIP = "";
            _this._strLocalPath = "";
            _this._objGetParameter = null;
            _this._strGameType = "";
            return _this;
        }
        Object.defineProperty(UrlParameter.prototype, "strPathFile", {
            set: function (value) {
                this._strPathFile = "common/" + value;
            },
            enumerable: true,
            configurable: true
        });
        UrlParameter.prototype.getSplitURL = function () {
            this._strGetDomain = window.location.href;
            var ary = this._strGetDomain.split("/");
            this._strDomain = ary[0] + "//" + ary[2];
            if (ary[0] == "https:") {
                this._strServerIP = ary[2];
            }
            else {
                if (ary[2].indexOf("localhost") != -1 || ary[2].indexOf("192.168") != -1) {
                    this._isLocal = true;
                    this._strLocalPath = this._strDomain + "/" + ary[3] + "/";
                }
            }
            var aryGetParameter = this._strGetDomain.split("?");
            if (aryGetParameter.length > 1) {
                var aryAnd = aryGetParameter[1].split("&");
                var len = aryAnd.length;
                this._objGetParameter = {};
                for (var i = 0; i < len; i++) {
                    var aryValue = aryAnd[i].split("=");
                    if (this._objGetParameter[aryValue[0]] == null)
                        this._objGetParameter[aryValue[0]] = aryValue[1];
                }
            }
            this.getLibDictionary();
        };
        UrlParameter.prototype.getLibDictionary = function () {
            var _this = this;
            this._getIplDictionary = new GameLib.LinkInfo();
            this._getIplDictionary.addEventListener("DICT_LOADED", function () {
                _this.onDataLoadReady();
            });
            if (this._isLocal) {
                this._getIplDictionary.strDomain = this._strLocalPath;
                this._getIplDictionary.strFileAddress = this._strPathFile;
            }
            else {
                this._getIplDictionary.strDomain = this._strDomain;
            }
            this._getIplDictionary.load();
        };
        UrlParameter.prototype.checkLinkValue = function (mode) {
            return this._getIplDictionary.checkLinkValue(this._strGameType, mode);
        };
        UrlParameter.prototype.getDefaultLink = function () {
            this._strGameType = this.getWebSiteValue("GameType");
            return this._getIplDictionary.getDefaultLinkValue(this._strGameType);
        };
        UrlParameter.prototype.getWebSiteValue = function (type) {
            var str = "";
            if (this._objGetParameter != null) {
                str = this._objGetParameter[type];
            }
            return str;
        };
        UrlParameter.prototype.getAddress = function (s, strDefault) {
            if (strDefault === void 0) { strDefault = "0"; }
            var str = "";
            if (s == GameLib.UrlParameter.IS_SWF_SET) {
                if (this._objGetParameter == null) {
                }
                else {
                    if (this._isLocal) {
                        str = this._strLocalPath + "loading.swf?" + this.getParameters();
                    }
                    else {
                        str = this._strDomain + "/" + UrlParameter.SWF_PATH + this.getParameters();
                    }
                }
            }
            else {
                if (this._strGameType != "") {
                    var path = this._getIplDictionary.getLink(this._strGameType, strDefault);
                    var intGT = parseInt(this._strGameType);
                    if (intGT > 3000 && intGT < 4000) {
                        intGT = 3;
                    }
                    else if (intGT > 5000 && intGT < 6000) {
                        intGT = 5;
                    }
                    else if (intGT > 30000 && intGT < 31000) {
                        intGT = 30;
                    }
                    str = (intGT == 3) ? "game/videoH5" : "game/casinoH5";
                    if (!this._isLocal) {
                        str = "/ipl/app/flash/pig/" + str;
                        str = this._strDomain + "/" + str + "/" + path + "?" + this.getParameters();
                    }
                    else {
                        str = this._strLocalPath + str + "/" + path + "?" + this.getParameters();
                    }
                }
            }
            return str;
        };
        UrlParameter.prototype.onDataLoadReady = function () {
            this.dispatchEvent(new GameLib.IPLEvent(GameLib.IPLEvent.ON_PARAMETER));
        };
        UrlParameter.prototype.getParameters = function () {
            var str = "";
            var index = 0;
            var strIndex = "";
            for (var i in this._objGetParameter) {
                index++;
                if (this._objGetParameter[i] !== undefined) {
                    if (i === "GameType") {
                        strIndex = "gametype";
                    }
                    else {
                        strIndex = i;
                    }
                    if (index == 1) {
                        str = str + strIndex + "=" + this._objGetParameter[i];
                    }
                    else {
                        str = str + "&" + strIndex + "=" + this._objGetParameter[i];
                    }
                }
            }
            return str;
        };
        UrlParameter.IS_H5_SET = "1";
        UrlParameter.IS_SWF_SET = "0";
        UrlParameter.SWF_PATH = "ipl/app/flash/publictpl/loading.swf?";
        return UrlParameter;
    }(H5EventdispatcherCore.EventDispatcher));
    GameLib.UrlParameter = UrlParameter;
})(GameLib || (GameLib = {}));
document.addEventListener("DOMContentLoaded", function () {
    new JumpLinkCenter.GameJump();
}, false);
var JumpLinkCenter;
(function (JumpLinkCenter) {
    var GameJump = (function () {
        function GameJump() {
            var _this = this;
            this._state = "";
            this._gt = new GameLib.UrlParameter();
            this._gt.addEventListener(GameLib.IPLEvent.ON_PARAMETER, function (e) {
                _this.onParameterHandler(e);
            });
            this._gt.strPathFile = "scj.json";
            this._gt.getSplitURL();
        }
        GameJump.prototype.onParameterHandler = function (e) {
            var strWebValue = this._gt.getWebSiteValue("Client");
            var strDefault = this._gt.getDefaultLink();
            if (strDefault != "") {
                if (DeviceAndEnvironment.Device.isMobile()) {
                    this._state = GameLib.UrlParameter.IS_H5_SET;
                    strDefault = "1";
                }
                else {
                    if (strWebValue == "1" || strWebValue == "2") {
                        if (strWebValue == "2") {
                            this._state = (this._gt.checkLinkValue("1")) ? GameLib.UrlParameter.IS_H5_SET : GameLib.UrlParameter.IS_SWF_SET;
                            if (this._state == GameLib.UrlParameter.IS_H5_SET) {
                                strDefault = "1";
                            }
                        }
                        else {
                            this._state = GameLib.UrlParameter.IS_SWF_SET;
                        }
                        var value = window.location.search.split('&');
                        var gtp = '';
                        for (var i in value) {
                            if (value[i].indexOf('GameType') != -1) {
                                gtp = value[i].split('=')[1];
                                break;
                            }
                        }
                        if (this._state == GameLib.UrlParameter.IS_H5_SET)
                            if (gtp == '5901' || gtp == '5902') {
                                this._state = GameLib.UrlParameter.IS_SWF_SET;
                                if (DeviceAndEnvironment.Device.isFirefox())
                                    this._state = GameLib.UrlParameter.IS_H5_SET;
                            }
                    }
                    else {
                        this._state = (strDefault == "0") ? GameLib.UrlParameter.IS_SWF_SET : GameLib.UrlParameter.IS_H5_SET;
                    }
                }
            }
            var path = this._gt.getAddress(this._state, strDefault);
            if (this._state == GameLib.UrlParameter.IS_SWF_SET) {
                var divText = document.getElementById('forFlashDiv');
                var embed = document.createElement('embed');
                embed.width = '100%';
                embed.height = '100%';
                embed['allowscriptaccess'] = 'always';
                embed['type'] = 'application/x-shockwave-flash';
                divText.appendChild(embed);
                path += '&sid=' + window['SessionID'];
                if (window['Demo'])
                    path += '&demo=1';
                swfobject.embedSWF(path, "forFlashDiv", "100%", "100%", "11.0.0", '', {}, { wmode: "direct" });
            }
            else {
                if (path.indexOf('gametype') != -1)
                    path = path.split('gametype')[0] + 'GameType' + path.split('gametype')[1];
                if (window['Demo']) {
                    path += '&sid=' + window['SessionID'] + '&demo=1';
                }
                else {
                    path += '&ssdd=timestamp';
                    if (window['playtime'])
                        path += '&pt=' + window['playtime'];
                }
                document.open();
                document.write('<meta name=\"viewport\"content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\">');
                document.write('<iframe id="topFrame" src=\"' + path + '\" width=\"100%\" height=\"100%\" frameborder=0 ' +
                    'style=\" position:fixed; left: 0; right: 0; bottom: 0; top: 0; \"></iframe>');
                if (DeviceAndEnvironment.Device.isIE())
                    document.write('<script src=\"../../../js/function.js\"></script>');
                document.close();
            }
        };
        return GameJump;
    }());
    JumpLinkCenter.GameJump = GameJump;
})(JumpLinkCenter || (JumpLinkCenter = {}));
//# sourceMappingURL=HFLoader.js.map