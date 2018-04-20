# FiddlerScript说明
## FiddlerScript几个主要方法
1. OnBeforeRequest<br>
请求发起前执行该方法
2. OnBeforeResponse<br>
数据返回前执行该方法
3. OnBoot<br>
Fiddler启动时执行该方法
4. OnExecAction<br>
定义命令行输入的命令

## Fiddler的部分变量和api
1. oSession //代表Fiddler中捕获的每个请求<br>
oSession.host //请求的host<br>
oSession.HostnameIs("xxxx") //判断当前host是否等于xxxx<br>
oSession.fullUrl //请求的url<br>
oSession.fullUrl.Contains("xxxx") //判断当前请求的url是否包含xxxx，方法同样适用于oSession.host<br>
oSession.uriContains("xxxx") //判断当前请求的url是否包含xxxx<br>
oSession.m_hostIP //请求的IP地址<br>
oSession.responseCode //请求的状态码<br>
oSession.HTTPMethodIs("xxxx") //判断当前的请求方式，一般是"CONNECT"/"GET"/"POST"等<br>
oSession.isTunnel //判断当前的请求是否是CONNECT Tunnel<br>
oSession.isHTTPS //判断当前的请求是否是https

2. FiddlerObject.log() //打印log日志，在右侧log一栏输出

3. MessageBox.Show("xxxx") //Fiddler以弹窗形式显示xxxx

4. FiddlerApplication.oProxy.SendRequestAndWait(HTTPRequestHeaders,null,null,null) //该方法可以通过fiddler发起请求，第一个参数可以添加指定请求的url及header中参数等，后续值暂未使用过<br>
`var abtest_headers: HTTPRequestHeaders = new HTTPRequestHeaders(path + testGroup[0], ['Host: gw.api.fanli.com', 'custom_abtest: ' + testGroup[0]]);
abtest_headers.HTTPMethod = "GET";
var abtest_session = FiddlerApplication.oProxy.SendRequestAndWait(abtest_headers, null, null, null);`

5. oSession.utilFindInResponse(String,false) //在Response中查找关键字，并返回位置下标，找不到返回-1<br>
oSession.utilFindInRequest(String,false) //用法与上一致，作用于Request

6. new ActiveXObject("Scripting.FileSystemObject").FileExists //判断本地文件是否存在<br>
new ActiveXObject("Scripting.FileSystemObject").DeleteFile //删除本地文件

7. new ActiveXObject("Scripting.FileSystemObject").OpenTextFile(String filename, int iomode, boolean create, int format) //打开或者写入本地文件，其中<br>
filename: 写入的文件名<br>
inmode: 1代表只读打开文件；8代表追加写入<br>
create: True 代表文件不存在是创建文件; False代表文件不存在时不创建文件;<br>
format: -2 '以系统默认格式打开文件;-1 '以 Unicode 格式打开文件;0 '以 ASCII 格式打开文件

## 如何自定义功能
1. 添加Rules子菜单(以switchHost功能为例)<br>
RulesString("SwitchHosts", true) //在rules下添加菜单名SwitchHost<br>
RulesStringValue(0, "外测", "waice")<br>
RulesStringValue(0, "外测-29", "waice-29") //在SwitchHost下添加子菜单,可以添加多个其中"0"是子菜单的排序，"外测"是菜单显示的名称，"waice"是定义当前选项的变量名<br>
public static var m_host: String = null; //定义选项变量名及默认状态<br>
`通过以上方式添加的子菜单选项，同时只能选中一个`<br>
public static RulesOption("图片是否绑定生产", "SwitchHosts") //在SwitchHost下添加选项<br>
var m_image: boolean = false; //定义选项变量名及默认状态<br>
`通过以上方式添加的子菜单选项，同时能选中多个`<br>
如果添加的菜单需要一直保持选中的状态，除非手动切换，其他如重启FIddler等操作仍然保持之前选中的状态<br>
以上述内容中var m_host:为例，script中添加<br>
`BindPref("fiddlerscript.rules.m_host")`

2. 添加Tools子菜单(以switchHost功能为例)<br>
public static ToolsAction("&Edit Hosts") //在tools下添加子菜单EditHost(不太清楚&功能，有无&好像没有区别)<br>
function EditHosts() {<br>
  xxxx;<br>
}

3. 添加右键菜单<br>
public static ContextAction("Mark") //右键request弹出框添加子菜单Mark<br>
function MarkColor(oSessions: Session[]) {<br>
    xxxx;<br>
}

4. 修改或添加Fiddler命令行(以abtest功能为例)<br>
在OnExecAction方法中switch (sAction) 下添加自定义名称<br>
`case "abtest":
  if (sParams.Length < 2) {
    m_abtest = null;
    FiddlerObject.StatusText = "abtest cleared";
    return false;
  }
  m_abtest = sParams[1];
  FiddlerObject.StatusText = "abtest参数 " + sParams[1];
  m_abtest = getAbtest(m_abtest);
  return true;`<br>
其中第一行case "xxxx"定义命令名称<br>
FiddlerObject.StatusText定义命令行下方右侧显示文案

5. 添加自定义的标签，如背景色、字体加粗等<br>
oSession["ui-backcolor"] = "Yellow"; //设置背景颜色，颜色名称<br>
oSession["ui-customcolumn"] = '高佣api'; //设置Custom一列显示文案<br>
FiddlerObject.playSound("C:\\windows\\media\\tada.wav"); //设置请求时播放的声音<br>
oSession["ui-color"] = "red"; //设置字体颜色，颜色名称<br>
oSession["ui-italic"] = "yup"; //设置字体斜体，字符串无所谓<br>
oSession["ui-bold"]="QuickExec";	//设置字体加粗，字符串无所谓<br>
oSession["ui-hide"] = "NotMyApp";	//隐藏显示，字符串无所谓<br>

6. 添加和修改request或者response header(cookie、UA等)<br>
oSession.oRequest.headers["User-Agent"]="xxxx"; //修改RequestHeader中User-Agent，如果header中没有"User-Agent"，会自动添加<br>
oSession.oRequest.headers.Remove("User-Agent"); //移除RequestHeader中的User-Agent<br>
oSession.oResponse.headers 用法与上一致，作用于ResponseHeader

7. 获取和修改response(以https开关为例)<br>
var responseStringOriginal = oSession.GetResponseBodyAsString(); //获取Response Body中JSON字符串 <br>
var responseJSON = Fiddler.WebFormats.JSON.JsonDecode(responseStringOriginal); //转换为可编辑的JSONObject变量<br>
if (!responseJSON.JSONObject ||<br> !responseJSON.JSONObject['data'].ContainsKey('switch')) {<br>
  return;<br>
}<br>
var fanliSwitch = responseJSON.JSONObject['data']['switch']['content']; //获取getResource接口switch节点content内容<br>
if (custom_https==1){<br>
  fanliSwitch = fanliSwitch.replace(/"https":(\d*)/, "\"https\":1");<br>
}else if(custom_https==0){<br>
  fanliSwitch = fanliSwitch.replace(/"https":(\d*)/, "\"https\":0");<br>
}<br>
responseJSON.JSONObject['data']['switch']['content'] = fanliSwitch;<br>
var responseStringDestinal = Fiddler.WebFormats.JSON.JsonEncode(responseJSON.JSONObject); <br>
oSession.utilSetResponseBody(responseStringDestinal); //重新设置Response Body<br>
