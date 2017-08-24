import System;
import System.Windows.Forms;
import Fiddler;

// INTRODUCTION
//
// Well, hello there!
//
// Don't be scared! :-)
//
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first runs, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a 
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// The best way to edit this file is to install the FiddlerScript Editor, part of
// the free SyntaxEditing addons. Get it here: http://fiddler2.com/r/?SYNTAXVIEWINSTALL

// GLOBALIZATION NOTE: Save this file using UTF-8 Encoding.

// JScript.NET Reference
// http://fiddler2.com/r/?msdnjsnet
//
// FiddlerScript Reference
// http://fiddler2.com/r/?fiddlerscriptcookbook

class Handlers
{
	// *****************
	//
	// This is the Handlers class. Pretty much everything you ever add to FiddlerScript
	// belongs right inside here, or inside one of the already-existing functions below.
	//
	// *****************

	// The following snippet demonstrates a custom-bound column for the Web Sessions list.
	// See http://fiddler2.com/r/?fiddlercolumns for more info
	
	public static BindUIColumn("Method", 60)
	function FillMethodColumn(oS: Session): String {
	return oS.RequestMethod;
	}
	

	// The following snippet demonstrates how to create a custom tab that shows simple text
	//右侧栏添加tab
	/*
	public BindUITab("Flags")
	static function FlagsReport(arrSess: Session[]):String {
	var oSB: System.Text.StringBuilder = new System.Text.StringBuilder();
	for (var i:int = 0; i<arrSess.Length; i++)
	{
	oSB.AppendLine("SESSION FLAGS");
	oSB.AppendFormat("{0}: {1}\n", arrSess[i].id, arrSess[i].fullUrl);
	for(var sFlag in arrSess[i].oFlags)
	{
	oSB.AppendFormat("\t{0}:\t\t{1}\n", sFlag.Key, sFlag.Value);
	}
	}
	return oSB.ToString();
	}
	*/

	// You can create a custom menu like so:
	//顶部菜单栏添加跳转链接
	// QuickLinkMenu("&Links")
	// QuickLinkItem("IE GeoLoc TestDrive", "http://ie.microsoft.com/testdrive/HTML5/Geolocation/Default.html")
	// QuickLinkItem("FiddlerCore", "http://fiddler2.com/fiddlercore")
	// public static function DoLinksMenu(sText: String, sAction: String)
	// {
	// Utilities.LaunchHyperlink(sAction);
	// }
		
	public static RulesOption("Hide 304s")
	BindPref("fiddlerscript.rules.Hide304s")
	var m_Hide304s: boolean = false;

	// Cause Fiddler to override the Accept-Language header with one of the defined values
	public static RulesOption("Request &Japanese Content")
	var m_Japanese: boolean = false;

	// Automatic Authentication
	public static RulesOption("&Automatically Authenticate")
	BindPref("fiddlerscript.rules.AutoAuth")
	var m_AutoAuth: boolean = false;

	// Cause Fiddler to override the User-Agent header with one of the defined values
	// The page http://browserscope2.org/browse?category=selectors&ua=Mobile%20Safari is a good place to find updated versions of these
	RulesString("&User-Agents", true) 
	BindPref("fiddlerscript.ephemeral.UserAgentString")
	RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
	RulesStringValue(1,"WinPhone8.1", "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537")
	RulesStringValue(2,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
	RulesStringValue(3,"Safari9 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56")
	RulesStringValue(4,"iPad", "Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F5027d Safari/600.1.4")
	RulesStringValue(5,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4")
	RulesStringValue(6,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
	RulesStringValue(7,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
	RulesStringValue(8,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
	RulesStringValue(9,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
	RulesStringValue(10,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
	RulesStringValue(11,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
	RulesStringValue(12,"IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")
	RulesStringValue(13,"IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")
	RulesStringValue(14,"Edge (Win10)", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.11082")
	RulesStringValue(15,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17")
	RulesStringValue(16,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
	RulesStringValue(17,"&Firefox 43", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")
	RulesStringValue(18,"&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")
	RulesStringValue(19,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")
	RulesStringValue(20,"Chrome (Win)", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.48 Safari/537.36")
	RulesStringValue(21,"Chrome (Android)", "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36")
	RulesStringValue(22,"ChromeBook", "Mozilla/5.0 (X11; CrOS x86_64 6680.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.74 Safari/537.36")
	RulesStringValue(23,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
	RulesStringValue(24,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
	RulesStringValue(25,"&Custom...", "%CUSTOM%")
	public static var sUA: String = null;

	RulesString("Custom Response",true)
	RulesStringValue(0,"打开", "1")
	public static var custom_response: String = null;

	public static RulesOption("切换xwalk", "切换浏览器内核")
	var xwalk: boolean = false;

	public static RulesOption("切换webkit", "切换浏览器内核")
	var webkit: boolean = false;

    public static RulesOption("恢复uiwebview", "切换浏览器内核")
	var uiwebview: boolean = false;

	RulesString("SwitchHosts",true)
	RulesStringValue(0,"外测", "waice")
	RulesStringValue(1,"158", "158")
    RulesStringValue(2,"生产", "shengchan")
	RulesStringValue(3,"自定义", "custom")
	public static var m_host: String = null;	
	
	public static RulesOption("图片是否绑定生产", "SwitchHosts")
	var m_image: boolean = false;

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;



    public static ToolsAction("&Edit Hosts")
    function EditHosts(){
        var hosts = "hosts\\shengchan.hosts";
        if (m_host){
            hosts = "hosts\\"+m_host+".hosts";
        }
        System.Diagnostics.Process.Start("D:\\Program Files\\Sublime Text 3\\sublime_text.exe", hosts);
    }

    

    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload() { 
        FiddlerObject.ReloadScript();
    }
	
	// Create a new item on the Tools menu.
	// public static ToolsAction("&UNTITLED")
	// function DoUNTITLED(oSessions: Fiddler.Session[]){
	// 	// Write your code here
    //
	// 	MessageBox.Show(FiddlerObject.prompt("aaa","bbb","ccc"));
	// }



    public static ContextAction("Open in Browser")
    function DoOpenInIE(oSessions: Fiddler.Session[]){ 
        if (null == oSessions){
            MessageBox.Show("Please choose at least 1 session."); return;
        }

        for (var x = 0; x < oSessions.Length; x++){
            System.Diagnostics.Process.Start("D:\\Program Files\\Tencent\\QQBrowser\\QQBrowser.exe", oSessions[x].url);
        }
    }


    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]) {
        for (var x:int = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
        UI.actUpdateInspector(true,true);
    }
    
    public static ContextAction("CopyTimers")
    function CopyTimers(oSessions: Fiddler.Session[]){
        if (null == oSessions){
            MessageBox.Show("Please select sessions to copy timers for.", "Nothing to Do");
            return;
        }
        var s: System.Text.StringBuilder = new System.Text.StringBuilder();
        for (var x = 0; x < oSessions.Length; x++)  {
            s.AppendFormat("ClientConnected:{0}, ClientDoneRequest:{1}, ServerConnected:{2}, ServerGotRequest:{3}, ServerBeginResponse:{4}, ServerDoneResponse:{5}, ClientBeginResponse:{6}, ClientDoneResponse:{7}\r\n",
                oSessions[x].Timers.ClientConnected,
                oSessions[x].Timers.ClientDoneRequest,
                oSessions[x].Timers.ServerConnected,
                oSessions[x].Timers.ServerGotRequest,
                oSessions[x].Timers.ServerBeginResponse,
                oSessions[x].Timers.ServerDoneResponse,
                oSessions[x].Timers.ClientBeginResponse,
                oSessions[x].Timers.ClientDoneResponse
                );
        }
        Utilities.CopyToClipboard(s.ToString());
        MessageBox.Show("已复制到剪切板.");
    }

    //bpafter url
    public static var bpResponseURIs = new Array();
    public static ContextAction("bpa")
    function bpaUrl(oSessions: Session[]){
        if (null == oSessions){
            MessageBox.Show("Please select sessions to copy timers for.", "Nothing to Do");
            return;
        }
        for (var x = 0; x < oSessions.Length; x++){
            var bpaurl = oSessions[x].url.substr(0, oSessions[x].url.indexOf("?"));
            bpResponseURIs.push(bpaurl);
        }
		FiddlerObject.StatusText="选中了"+oSessions.Length+"条url";
    }

    //bpu url
    public static var bpRequestURIs = new Array();
    public static ContextAction("bpu")
    function bpuUrl(oSessions: Session[]){
        if (null == oSessions){
            MessageBox.Show("Please select sessions to copy timers for.", "Nothing to Do");
            return;
        }
        for (var x = 0; x < oSessions.Length; x++){
            var bpuurl = oSessions[x].url.substr(0, oSessions[x].url.indexOf("?"));
            bpRequestURIs.push(bpuurl);
        }
		FiddlerObject.StatusText="选中了"+oSessions.Length+"条url";
    }

    //添加转换成ifanli链接
    public static ContextAction("To Ifanli")
    function ToIfanli(oSessions: Session[]){
        if (null == oSessions){
            MessageBox.Show("Please select sessions to copy timers for.", "Nothing to Do");
            return;
        }
        var ifanli = 'ifanli://m.51fanli.com/app/show/web?url=';
        var ifanli_urls: System.Text.StringBuilder = new System.Text.StringBuilder();
        for (var x = 0; x < oSessions.Length; x++){
            var original_url = delParam(oSessions[x].fullUrl, "abtest");
            var ifanli_url = ifanli + encodeURIComponent(original_url);
            ifanli_urls.AppendFormat("{0}\r",ifanli_url);
        }
        Utilities.CopyToClipboard(ifanli_urls.ToString());
        MessageBox.Show("已复制到剪切板.");
    }
        
    //删除指定key
    static function delParam(url,paramKey){
        var urlParam = url.substr(url.indexOf("?")+1);
        var beforeUrl = url.substr(0,url.indexOf("?"));
        var nextUrl = "";
        var arr = new Array();
        if(urlParam!=""){
            var urlParamArr = urlParam.split("&");
            for(var i=0;i<urlParamArr.length;i++){
                var paramArr = urlParamArr[i].split("=");
                if(paramArr[0]!=paramKey){
                    arr.push(urlParamArr[i]);
                }
            }
        }
        if(arr.length>0){
            nextUrl = "?"+arr.join("&");
        }
        url = beforeUrl+nextUrl;
        return url;
    }
        
    public static ContextAction("&Remove Mark")
    function RemoveMark(){
        var fso=new ActiveXObject("Scripting.FileSystemObject");
        if(!fso.FileExists("markUrls.txt"))
            return;
        else
            fso.DeleteFile("markUrls.txt");
        MessageBox.Show("已清除标记的url.");
    }
        
    //选中url标记背景色
    public static ContextAction("Mark")
    function MarkColor(oSessions: Session[]){
        var mark_txt = new ActiveXObject("Scripting.FileSystemObject").OpenTextFile("markUrls.txt",8 ,true,true);
        if (null == oSessions){
            MessageBox.Show("Please select sessions to copy timers for.", "Nothing to Do");
            return;
        }
        for (var x = 0; x < oSessions.Length; x++)  {
            var mark_url = oSessions[x].url.substr(0, oSessions[x].url.indexOf("?"));
            mark_txt.writeLine(mark_url);
        }
        mark_txt.close();
    }

    static function getDay(){
        var date = new Date();
        var seperator = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var day = date.getFullYear() + seperator + month + seperator + strDate;
        return day;
    }

    static function getCurTime(){
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var curTime = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return curTime;
    }
   
    static function createFolder(){
        //文件保存路径，可自定义
     	var parFolder = "D:\\Fiddler Sessions";
		var folder = "D:\\Fiddler Sessions\\"+getDay()+"\\";
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        if (!fso.FolderExists(parFolder)){
            fso.CreateFolder(parFolder);
        }
		if (!fso.FolderExists(folder)){
			fso.CreateFolder(folder);
		}
        return folder;
    }

    static function GetHosts(path){
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        if (!fso.FileExists(path)){
            MessageBox.Show("Hosts文件不存在");
            return;
        }
        var hosts_list = new Array();
        var f = fso.OpenTextFile(path,1,false,0);
        var re1 = /^(#(\d+\.){3}\d+(\s+(\w+\.){1,2}(fanli|51fanli|shzyfl)\.(com|net|cn))+\s*)+$/;//以#开头的并且中间没有ip的不处理
        var re2 = /#(\d+\.){3}\d+(\s+(\w+\.){1,2}(fanli|51fanli|shzyfl)\.(com|net|cn))+/ig;//删除一行中包含#的ip
        var re3 = /(\d+\.){3}\d+(\s+(\w+\.){1,2}(fanli|51fanli|shzyfl)\.(com|net|cn))+/ig;//匹配出每个ip+host
        while (!f.AtEndOfStream){
            var read_hosts =f.readline();
            if (re1.test(read_hosts) || /^\r+$/.test(read_hosts)){
                continue;
            }
            var read_hosts = trim(read_hosts.replace(re2, ""));
            var hosts_tmp = read_hosts.match(re3);
            if (hosts_tmp!=null){
                for (var n=0; n<hosts_tmp.length; n++){
                    var host = hosts_tmp[n].split(/\s+/);
                    for (var i=1; i<host.length; i++){
                        var host_tmp = {};
                        host_tmp.Host = host[i];
                        host_tmp.IP = host[0];
                        hosts_list.push(host_tmp);
                    }
                }
           }
        }
        f.close();
        return hosts_list;
    }
        
    static function trim(str){ //删除左右两端的空格
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    static function ltrim(str){ //删除左边的空格
        return str.replace(/(^\s*)/g,"");
    }
    static function rtrim(str){ //删除右边的空格
        return str.replace(/(\s*$)/g,"");
    }
	
	//图片hosts
	public static var image_hosts = new Array("l0.51fanli.net","l1.51fanli.net","l2.51fanli.net","l3.51fanli.net","l4.51fanli.net","i0.51fanli.net","i1.51fanli.net","i2.51fanli.net","i3.51fanli.net","i4.51fanli.net");

    //不用处理的hosts
    public static var filter_hosts = new Array("bbs.qa.51fanli.com","mid.qa.51fanli.com","chandao.office.51fanli.com")

    static function inArray(arr, str) {
        var i = arr.length;
        while (i--) {
            if (arr[i] === str) {
                return true;
            }
        }
        return false;
    }

    static function CustomResponse(){
        return;
    }

    static function OnBeforeRequest(oSession: Session) {
        // Sample Rule: Color ASPX requests in RED
     //   if (oSession.responseCode == 404){
     //       FiddlerObject.playSound("C:\\windows\\media\\tada.wav");
     //       oSession["ui-strikeout"]="true";
      //  }
      //   if ((oSession.uriContains("http://fun.fanli.com/goshop/go")) && (oSession.uriContains("source=override")))  {
      //       oSession["ui-backcolor"] = "Yellow";
      //       oSession["ui-customcolumn"] = '高佣api';
         //   FiddlerObject.playSound("C:\\windows\\media\\tada.wav");
         //   oSession["ui-color"] = "red"; //设置字体颜色，颜色名称
         //   oSession["ui-italic"] = "yup"; //设置字体斜体，字符串无所谓
         //   oSession["ui-bold"]="QuickExec";	//设置字体加粗，字符串无所谓
         //   oSession["ui-backcolor"] = "Lavender";	//设置背景颜色，颜色名称
         //     oSession["ui-hide"] = "NotMyApp";	//隐藏显示，字符串无所谓
		// }

        if (oSession.host.Contains("fanli")|| oSession.host.Contains("shzyfl")){
            var fso=new ActiveXObject("Scripting.FileSystemObject");
            if(fso.FileExists("markUrls.txt")){
                var mark_txt = fso.OpenTextFile("markUrls.txt",1,true,true);
                while (!mark_txt.AtEndOfStream){
                    var mark_url = mark_txt.readline();
                    if (oSession.uriContains(mark_url)){
                        oSession["ui-backcolor"] = "Yellow";
                        oSession["ui-customcolumn"] = 'Mark';
                    }
                }
                mark_txt.close();
            }
        }

        if (null != m_host && (oSession.host.Contains("fanli")|| oSession.host.Contains("shzyfl"))){
            var path = "Hosts\\"+m_host+".hosts";
            var hosts = GetHosts(path);
            var original_ip = oSession.m_hostIP;
            for(var i=0; i<hosts.length; i++){
                var host = hosts[i].Host
                var ip = hosts[i].IP
                if (oSession.HostnameIs(host)){
                    oSession["x-overridehost"] = ip;
                }
            }
            if (Handlers.m_image && inArray(image_hosts, oSession.host)){
                oSession["x-overridehost"] = original_ip;
                oSession["ui-customcolumn"] = '图片已绑定生产';
            }
        }

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }

        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith); 
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
            oSession["x-overridehost"] = gs_OverrideHostWith; 
        }
		
        // if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
        //     oSession["x-breakrequest"]="uri";
        // }



        if (bpRequestURIs.length > 0){
            for(var i=0; i<bpRequestURIs.length; i++){
                if(oSession.uriContains(bpRequestURIs[i])){
                    oSession["x-breakrequest"]="uri";
                }
            }
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem) {
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300000"; 
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "1000"; 
        }

        if (m_DisableCaching) {
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA) {
            oSession.oRequest["User-Agent"] = sUA; 
        }

        if (m_Japanese) {
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AutoAuth) {
            // Automatically respond to any authentication challenges using the 
            // current Fiddler user's credentials. You can change (default)
            // to a domain\\username:password string if preferred.
            //
            // WARNING: This setting poses a security risk if remote 
            // connections are permitted!
            oSession["X-AutoAuth"] = "(default)";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }
        
        if (oSession.host.Contains("fanli")){
            if(oSession.oRequest.headers.Exists("If-None-Match")){
                oSession.oRequest["If-None-Match"] = 'not304';
            }
        } 
     
        if (oSession.host.Contains("fanli")){
            if (inArray(image_hosts, oSession.host) || inArray(filter_hosts, oSession.host) || oSession.host.Contains("51fanli.net")){
                return;
            }
            var fso;
            var file;
            //文件保存路径，可自定义
            try{
				fso = new ActiveXObject("Scripting.FileSystemObject");
                file = fso.OpenTextFile(""+createFolder()+"\\Request.txt",8 ,true, true);
                file.writeLine(getCurTime());
                file.writeLine("Request url: " + oSession.fullUrl);
                file.writeLine("Request header:" + "\n" + oSession.oRequest.headers);
                file.writeLine("Request body: " + oSession.GetRequestBodyAsString());
                file.writeLine("\n");
                file.close();
            }catch(err){
            }
        }
    }

    // This function is called immediately after a set of request headers has
    // been read from the client. This is typically too early to do much useful
    // work, since the body hasn't yet been read, but sometimes it may be useful.
    //
    // For instance, see 
    // http://blogs.msdn.com/b/fiddler/archive/2011/11/05/http-expect-continue-delays-transmitting-post-bodies-by-up-to-350-milliseconds.aspx
    // for one useful thing you can do with this handler.
    //
    // Note: oSession.requestBodyBytes is not available within this function!
/*
    static function OnPeekAtRequestHeaders(oSession: Session) {
        var sProc = ("" + oSession["x-ProcessInfo"]).ToLower();
        if (!sProc.StartsWith("mylowercaseappname")) oSession["ui-hide"] = "NotMyApp";
    }
*/

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function 
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders function is called before the response headers are 
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time 
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers 
    // which suggests that tampering with the response body is necessary.
    // 
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }
        
        // if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
        //     oSession["x-breakresponse"]="uri";
        //     oSession.bBufferResponse = true;
        // }
        if (bpResponseURIs.length > 0){
            for(var i=0; i<bpResponseURIs.length; i++){
                if(oSession.uriContains(bpResponseURIs[i])){
                    oSession["x-breakresponse"]="uri";
                    oSession.bBufferResponse = true;
                }
            }
        }
    }


    static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }
		
	//	if (oSession.fullUrl.Contains("fun.fanli.com/goshop/go")){
	//		oSession.oResponse.headers["Ext"] = 's_u=https%3A%2F%2Funion-click.jd.com%2Fjdc%3Fe%3DD00pk9ey4mqy3ghgv8s2%26p%3DAyIOZRJSFwARAlwdXyUCEAVUH1sTBRUBXCsfSlpMWGVCHlBDUAxLBQcKWUcYB0UHC0NRWQBfCVAcEgVXGl8VBBUAUxJETEdOWmVYJ295Gn5WHD5ddHpdM2czXll7RgBdVxlsEQZVHUcUBQ4EVgpbHAkSA14bWCUBEQZRGFgVBhc3VxxSEQQiB2UbWiVDfABVGlwXACIGZRteHQsSBFIfWxYCFw5lHGtOV3wDBh8JEVYbU1JIWRZWIjdlKw%253D%253D%26t%3DW1dCFFlQCxxOGA5OREdcThkUWAVARkBCSxtZFwMWB1McXBMLDV4QRwY%253D%26tracking_id%3D7527146284';
	//	}

        if (/(?i)^http:\/\/fun\.fanli\.com\/api\/mobile\/getResource\?.*key=common.*$/.test(oSession.fullUrl)){
            var responseStringOriginal =  oSession.GetResponseBodyAsString();
            var responseJSON = Fiddler.WebFormats.JSON.JsonDecode(responseStringOriginal);
            if (!responseJSON.JSONObject || !responseJSON.JSONObject['data'].ContainsKey('switch')){
                MessageBox.Show("接口出错啦！！！");
                return;
            }
            var fanliSwitch = responseJSON.JSONObject['data']['switch']['content'];
            if (oSession.fullUrl.Contains("src=2")){
                //Android内置默认白名单
                // var white_devices = new Array("SM801", "HUAWEI MT7-TL00", "MI NOTE LTE", "Redmi Note 3", "vivo X6S A", "Le X820", "X600","SM-G9300", "SM-G9308", "OPPO R7", "OPPO R9m");
                //当前请求的设备
                var device = oSession.oRequest.headers['User-Agent'].match(/(?<=\(\w+\s+).*(?=;\s*Android)/)[0];
                //接口未返回browser_rule节点时，写入默认内容
                var content = "{}";
                var updatetime = new System.Collections.Hashtable();
                if (!responseJSON.JSONObject['data'].ContainsKey('browser_rule')){
                    updatetime.Add('updatetime', ""+new Date().getTime()+"");
                    responseJSON.JSONObject['data'].Add('browser_rule',updatetime);
                    responseJSON.JSONObject['data']['browser_rule'].Add('content', content);
                }
                if (!uiwebview && xwalk){
                    content = "{\"device_white_list\":[\""+device+"\"]}";
                    responseJSON.JSONObject['data']['browser_rule']['content']=content;
                    fanliSwitch = (/^\{.*browser_type.*\}$/.test(fanliSwitch))?fanliSwitch.replace(/"browser_type":[\d]/, "\"browser_type\":2"):fanliSwitch.replace(/\}$/, ",\"browser_type\":2}");
                    FiddlerObject.StatusText="已切换至xwalk";
                }
                if (uiwebview){
                    content = "{\"device_white_list\":[\"\"]}";
                    responseJSON.JSONObject['data']['browser_rule']['content']=content;
                    FiddlerObject.StatusText="已切换至uiwebview";
                    // fanliSwitch = (/^\{.*browser_type.*\}$/.test(fanliSwitch))?fanliSwitch.replace(/"browser_type":[\d]/, "\"browser_type\":1"):fanliSwitch.replace(/\}$/, ",\"browser_type\":1}");
                }
            } else if (oSession.fullUrl.Contains("src=1")){
                if (!uiwebview && webkit){
                    fanliSwitch = (/^\{.*force_uiwv.*\}$/.test(fanliSwitch))?fanliSwitch.replace(/"force_uiwv":[\d]/, "\"force_uiwv\":2"):fanliSwitch.replace(/\}$/, ",\"force_uiwv\":2}");
                }
                if (uiwebview){
                    fanliSwitch = (/^\{.*force_uiwv.*\}$/.test(fanliSwitch))?fanliSwitch.replace(/"force_uiwv":[\d]/, "\"force_uiwv\":1"):fanliSwitch.replace(/\}$/, ",\"force_uiwv\":1}");
                }
                (/^\{.*\"force_uiwv\":2.*\}$/.test(fanliSwitch))?FiddlerObject.StatusText="已切换至webkit":FiddlerObject.StatusText="已切换至uiwebview";
            }
            responseJSON.JSONObject['data']['switch']['content'] = fanliSwitch;
            var responseStringDestinal = Fiddler.WebFormats.JSON.JsonEncode(responseJSON.JSONObject);
            oSession.utilSetResponseBody(responseStringDestinal);
        }

        if (custom_response){
			// if (oSession.fullUrl.Contains("key=popmsg")) {
            // if (oSession.fullUrl.Contains("fun.fanli.com/api/taobao/searchTaobao")) {
            //if (oSession.fullUrl.Contains("api.v1.search&keyword")) {
            if (oSession.fullUrl.Contains("mobile/getResource")) {
                FiddlerObject.log('enter');
			    // 获取Response Body中JSON字符串
			    var responseStringOriginal =  oSession.GetResponseBodyAsString();

			    //转换为可编辑的JSONObject变量
			    var responseJSON = Fiddler.WebFormats.JSON.JsonDecode(responseStringOriginal);
                var fanliSwitch = responseJSON.JSONObject['data']['switch']['content'];
                FiddlerObject.log(fanliSwitch);
                // responseJSON.JSONObject['data']['list_state']= Fiddler.WebFormats.JSON.JsonDecode('1').JSONObject;
                //responseJSON.JSONObject['data']['sug_pos_index']= Fiddler.WebFormats.JSON.JsonDecode('0').JSONObject;
	    		// responseJSON.JSONObject['data']['popmsg']['id'] = Fiddler.WebFormats.JSON.JsonDecode(Math.floor((Math.random()*100)+1)).JSONObject.toString();
			    // responseJSON.JSONObject['data']['popmsg']['lastUpdateTime'] = Fiddler.WebFormats.JSON.JsonDecode(Math.floor((Math.random()*1000)+1)).JSONObject;

			    //重新设置Response Body
			    var responseStringDestinal = Fiddler.WebFormats.JSON.JsonEncode(responseJSON.JSONObject);
			    oSession.utilSetResponseBody(responseStringDestinal);
		    }
        }
		
		
        if (oSession.host.Contains("fanli")) {
            if (inArray(image_hosts, oSession.host) || inArray(filter_hosts, oSession.host) || oSession.host.Contains("51fanli.net")){
                return;
            }
            oSession.utilDecodeResponse();//消除保存的请求可能存在乱码的情况
            var fso;
            var file;
            fso = new ActiveXObject("Scripting.FileSystemObject");
            try{
                file = fso.OpenTextFile(""+createFolder()+"\\Response.txt",8 ,true, true);
                file.writeLine(getCurTime());
                file.writeLine("Request url: " + oSession.fullUrl);
                file.writeLine("serverIp: " + oSession.m_hostIP);
                file.writeLine("Response code: " + oSession.responseCode);
                file.writeLine("Response body: " + oSession.GetResponseBodyAsString());
                file.writeLine("\n");
                file.close();
            }
            catch(err){
                }
          }
    }

/*
    // This function executes just before Fiddler returns an error that it has 
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/
/*
    // This function executes after Fiddler finishes processing a Session, regardless
    // of whether it succeeded or failed. Note that this typically runs AFTER the last
    // update of the Web Sessions UI listitem, so you must manually refresh the Session's
    // UI if you intend to change it.
    static function OnDone(oSession: Session) {
    }
*/
/*
    public static var hosts_env = new  Array('waice','158','custom','shengchan');
    static function OnBoot() {

        // MessageBox.Show("Fiddler has finished booting");
        // System.Diagnostics.Process.Start("iexplore.exe");
        //
        // UI.ActivateRequestInspector("HEADERS");
        // UI.ActivateResponseInspector("HEADERS");
    }

*/
    /*
    static function OnBeforeShutdown(): Boolean {
        // Return false to cancel shutdown.
        return ((0 == FiddlerApplication.UI.lvSessions.TotalItemCount()) ||
                (DialogResult.Yes == MessageBox.Show("Allow Fiddler to exit?", "Go Bye-bye?",
                 MessageBoxButtons.YesNo, MessageBoxIcon.Question, MessageBoxDefaultButton.Button2)));
    }
    */

    /*
    static function OnShutdown() {
            MessageBox.Show("Fiddler has shutdown");
    }
    */

    /*
    static function OnAttach() {
        MessageBox.Show("Fiddler is now the system proxy");
    }
    */

    /*
    static function OnDetach() {
        MessageBox.Show("Fiddler is no longer the system proxy");
    }
    */

    // The Main() function runs everytime your FiddlerScript compiles
    static function Main() {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;
        FiddlerObject.UI.lvSessions.AddBoundColumn("Server IP", 100, "X-HostIP");
        FiddlerObject.UI.lvSessions.AddBoundColumn("Client IP", 120, "X-CLIENTIP");

        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");

        // Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...
        // UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot"); 
    }

    // These static variables are used for simple breakpointing & other QuickExec rules 
    BindPref("fiddlerscript.ephemeral.bpRequestURI")
    public static var bpRequestURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpResponseURI")
    public static var bpResponseURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpMethod")
    public static var bpMethod: String = null;

    static var bpStatus:int = -1;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]): Boolean {

        FiddlerObject.StatusText = "ExecAction: " + sParams[0];

        var sAction = sParams[0].toLowerCase();
        switch (sAction) {
        case "bold":
            if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return false;}
            uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
            return true;
        case "bp":
            FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
            return true;
        case "bps":
            if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return false;}
            bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
            return true;
        case "bpv":
        case "bpm":
            if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return false;}
            bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
            return true;
        case "bpu":
            // if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return false;}
            // bpRequestURI = sParams[1];
            if (sParams.Length<2) {bpRequestURI=null; bpRequestURIs=[]; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return false;}
            bpRequestURIs.push(sParams[1]);
            FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
            return true;
        case "bpa":
        case "bpafter":
            // if (sParams.Length<2) {bpResponseURI=null;FiddlerObject.StatusText="ResponseURI 111breakpoint cleared"; return false;}
            // bpResponseURI = sParams[1];
            if (sParams.Length<2) {bpResponseURI=null; bpResponseURIs=[];FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return false;}
            bpResponseURIs.push(sParams[1]);
            FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
            return true;
        case "overridehost":
            if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return false;}
            gs_OverridenHost = sParams[1].toLowerCase();
            gs_OverrideHostWith = sParams[2];
            FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
            return true;
        case "urlreplace":
            if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return false;}
            gs_ReplaceToken = sParams[1];
            gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
            FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
            return true;
        case "allbut":
        case "keeponly":
            if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return false;}
            UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
            UI.actRemoveUnselectedSessions();
            UI.lvSessions.SelectedItems.Clear();
            FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
            return true;
        case "stop":
            UI.actDetachProxy();
            return true;
        case "start":
            UI.actAttachProxy();
            return true;
        case "cls":
        case "clear":
            UI.actRemoveAllSessions();
            return true;
        case "g":
        case "go":
            UI.actResumeAllSessions();
            return true;
        case "goto":
            if (sParams.Length != 2) return false;
            Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
            return true;
        case "help":
            Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");
            return true;
        case "hide":
            UI.actMinimizeToTray();
            return true;
        case "log":
            FiddlerApplication.Log.LogString((sParams.Length<2) ? "User couldn't think of anything to say..." : sParams[1]);
            return true;
        case "nuke":
            UI.actClearWinINETCache();
            UI.actClearWinINETCookies(); 
            return true;
        case "screenshot":
            UI.actCaptureScreenshot(false);
            return true;
        case "show":
            UI.actRestoreWindow();
            return true;
        case "tail":
            if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return false;}
            UI.TrimSessionList(int.Parse(sParams[1]));
            return true;
        case "quit":
            UI.actExit();
            return true;
        case "dump":
            UI.actSelectAll();
            UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
            UI.actRemoveAllSessions();
            FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
            return true;

        default:
            if (sAction.StartsWith("http") || sAction.StartsWith("www.")) {
                System.Diagnostics.Process.Start(sParams[0]);
                return true;
            }
            else
            {
                FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
                return false;
            }
        }
    }
}