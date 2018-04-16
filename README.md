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

## 如何自定义功能
1. 添加Rules子菜单(以switchHost功能为例)<br>
RulesString("SwitchHosts", true) //在rules下添加菜单名SwitchHost<br>
RulesStringValue(0, "外测", "waice")<br>
RulesStringValue(0, "外测-29", "waice-29") //在SwitchHost下添加子菜单,可以添加多个其中"0"是子菜单的排序，"外测"是菜单显示的名称，"waice"是定义当前选项的变量名<br>
public static var m_host: String = null; //定义整个子菜单的开关<br>
`通过以上方式添加的子菜单选项，同时只能选中一个`<br>
public static RulesOption("图片是否绑定生产", "SwitchHosts") //在SwitchHost下添加选项<br>
var m_image: boolean = false; //定义选项变量名<br>
`通过以上方式添加的子菜单选项，同时能选中多个`

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

6. 获取和修改request或者response header(cookie、UA等)
oSession.oRequest.headers["User-Agent"]="xxxx"; //修改RequestHeader中User-Agent，如果header中没有User-Agent，会自动添加<br>
oSession.oRequest.headers.Remove("User-Agent"); //移除RequestHeader中的User-Agent<br>
oSession.oResponse.headers 用法与上一致，作用与ResponseHeader

7. 获取和修改response


## Fiddler的部分变量和api
