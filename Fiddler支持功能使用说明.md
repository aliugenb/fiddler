# Fiddler功能使用说明
## 目前支持的功能：
切换host、自定义abtest参数、显示MC渠道名、其他小功能
### 一、SwitchHost功能
#### 使用方法：
1.	在fiddler工具的安装路径下新建Hosts文件夹
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/switchhost/swithhost1.png" width="420" height="120"  />

2. Hosts文件夹内添加.hosts文件（或者复制switchhost工具下hosts文件）
需保证.hosts文件与CustomRules.js中(下图红框内)命名一致
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

2. 输入后请求gw.appAbtest.getTestInfoByStoryid接口
<img src="https://github.com/aliugenb/Temp/raw/master/MarkdownPictures/abtest/abtest1.png"/>
如果接口返回报错或者无数据，fiddler弹出提示框<br>
如果接口返回正确，会获取到需求号对应的testid，并在接下来的fanli请求都会替换abtest参数值(无abtest参数会添加参数)<br>
`不想替换abtest参数的host，可以在filter_hosts和image_hosts添加；不想替换的url，可以添加在filter_urls，格式可以参考已有内容`

3. 关闭此功能，可以重启fiddler，或者命令行输入abtest即可

### 三、显示MC渠道号
#### 使用方法：
1. 将mcdata.txt文件粘贴至Fiddler安装文件夹内(类似D:\Program Files\Fiddler)<br>
文件存放在(\\fileservernew\5.质量保障部\test group\返利网APP\APP测试数据\mc渠道号)<br>
`文件如有改动，请务必以Unicode形式保存`

2. Fiddler菜单栏--Rules--显示MC中，勾选显示

3. app请求"passport.fanli.com/mobileapi/i/device/update"接口时，Fiddler弹窗显示当前mc渠道号

### 四、其他
#### * 右键菜单栏功能
1. 标记功能<br>
右键选择mark选项，下次请求该url时，背景色为黄色<br>
选择removeMark，清除`所有`已标记的url

2. 转换ifanli功能<br>
右键选择ToIfanli，将选中url转换成ifanli/showweb，并添加至剪切板(`选中的url如果是fanli域名，会移除abtest参数进行转换`)<br>
支持同时选中多条进行转换

3. bpa和bpu功能<br>
右键选择bpa和bpu，和命令行输入bpafter和bpu功能一致<br>
支持同时选中多条

#### * Https开关
1. Fiddler菜单栏--Rules--Https--打开或者关闭

2. 选中后，app请求getResource接口，开关即可生效

#### * 切换浏览器内核(仅针对ios)
1. Fiddler菜单栏--Rules--切换浏览器内核

2. 选择wk或者ui后，app请求getResource接口，开关即可生效，并且在Fiddler命令行下方一栏显示当前浏览器内核

#### * 打开304功能
1. Fiddler菜单栏--Rules--打开304

2. 选中后，app的请求都会支持304功能(`前提是服务端支持`)；<br>
未选中情况下，app的请求不会返回304<br>
如果想默认情况下支持304功能，代码内搜索allow_304参数，将其改为true即可
