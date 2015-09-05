#模块
js先天的没有模块系统
没有标准库
不支持文件系统和流
没有包管理工具，不自持自动加载和安装依赖


commonjs    一模块划分  每一个js文件都是一个模块   实现了require方法      npm基于commonjs  实现自动加载安装依赖


优点
  增加了内聚性
  有助于分工
  提交代码质量和开发效率

加载模块的方法    require()   核心模块的加载   http fs path
                我们自己写的            文件模块


                 加载文件模块：  .js     .json     .node

                 先读到内存， 在执行     转化为JSON对象      二进制   不需要在编译直接使用


                 查找文件

                 npm init   package.json 的向导'


                 npm root -g  ／／查看全局路径
                 npm list  ／／查看包
                 npm uninstall  卸载