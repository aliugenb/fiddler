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
以switchHost功能为例:
1. 添加顶部Rules菜单选项<br>
RulesString("SwitchHosts", true) //在rules下添加菜单名SwitchHost<br>
RulesStringValue(0, "外测", "waice")<br>
RulesStringValue(0, "外测-29", "waice-29") //在SwitchHost下添加子菜单,可以添加多个其中"0"是子菜单的排序，"外测"是菜单显示的名称，"waice"是定义当前选项的变量名<br>
public static var m_host: String = null; //定义整个子菜单的开关<br>
`通过以上方式添加的子菜单选项，同时只能选中一个`

public static RulesOption("图片是否绑定生产", "SwitchHosts") //在SwitchHost下添加选项
var m_image: boolean = false; //定义选项变量名<br>
`通过以上方式添加的子菜单选项，同时能选中多个`

2.
