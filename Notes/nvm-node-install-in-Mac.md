## nvm安装  
1. 在命令行输入：  
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```
版本自行上官网查看   
https://github.com/nvm-sh/nvm
2. 安装好之后需要配置   
新建一个 .bash_profile文件，内容如下
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```
然后在终端输入
```
source .bash_profile
```
3. 验证  
重新打开终端，输入nvm，出现Node Version Manager，即说明安装成功  
## node安装
在终端输入   
```
nvm install 10.16.2
```
同理，版本自行生官查最新版本  
http://nodejs.cn/  
在终端输入  
```
nvm alias default v10.16.2
```
将安装的node设置为默认版本