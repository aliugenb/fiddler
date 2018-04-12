# Fiddler功能使用说明
## 目前支持的功能：
切换host、自定义abtest参数、显示MC渠道名、https开关
### 一、SwitchHost功能
#### 使用方法：
1.	在fiddler工具的安装路径下新建Hosts文件夹
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/switchhost/swithhost1.png" width="420" height="120"  />

2. Hosts文件夹内添加.hosts文件（或者复制swihost工具下hosts文件）
需保证.hosts文件与CustomRules.js中（下图红框内）命名一致
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/switchhost/switchhost2.png" width="420" height="100"  /><br>
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/switchhost/switchhost3.png" width="420" height="100"  />

3. 修改CustomRules.js下图红框内容，路径改成自己喜欢用的编辑器（注意用\\\）
或者删除变成System.Diagnostics.Process.Start(hosts);
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/switchhost/switchhost4.png" width="420" height="100"  />

4. 我的文档-Fiddler2-Scripts文件夹下替换CustomRules.js文件

5. 打开Fiddler，点击Rules-SwitchHosts
其中选中Disabled，即切换到生产环境
选中外测或者其他测试环境后，再勾选“图片是否绑生产”，会使用生产图片（只对i1、I1这种类型开头的图片链接有效）<br>
`使用fiddler切换hosts之前，先用之前SwitchHosts工具将本机的hosts切到生产`<br>
如果host不够用，自己可以添加，格式如RulesStringValue({int},”xxxx” ,”xxxx”)，参考步骤2中的截图，切记文件命名要一致
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/switchhost/switchhost5.png" width="300" height="250"  />

6. Fiddler点击Tool-EditHosts可编辑当前选中的hosts
如果选中的是Disabled，会编辑生产hosts
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/switchhost/switchhost6.png" width="300" height="250"  />

### 二、自定义abtest参数
#### 使用方法：
1. Fiddler命令行输入:`abtest 24450_b-22312_b-39103_b`
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/abtest/abtest.png" width="284" height="54"  />
