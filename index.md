# 使用手册

## 这是什么网站

  这是一个由**chengyu**搭建的技术博客文档，被chengyu称为**使用手册**。其功能正如名字一样，是一个用来记录内容的网站。  
  
  本手册会记录项目开发过程中的设计思路，然后对许多项目都会用到的内容进行封装，例如列表。  

  同时也会记录其它框架或者其它库运用时的心得，避免太久了产生遗忘。  

  最后本手册还会添加一些常用链接到末尾，方便自己进行资料查阅。  

  以上就是这个网站的内容，总的来说，这个是我为自己搭建的一个 **“手册”** 它将记录我的程序员生活。

## 手册简介

  这是一个使用了`vite-press`进行搭建的网站。网站本身体由`cloudflare`进行免费托管。  
  
  除了域名是我真真正正的花了钱购买外，其它都是基于`Github`和cloudflare进行托管，如果你也是程序员或者开发者对此网站的构建有兴趣，请到页面底部友链点击`vite-press`进行了解。

  手册网站本身一共五个板块，分别是`前端常用封装`、`后端常用封装`、`个人项目笔记`、`实际项目笔记`、`友情链接`，不同类目对应不同的记录内容。

## 写在前面

  如果您是某些项目管理人员，或者某些项目的领导，您无需担心这里的笔记会对项目有什么泄露，因为很多时候这里仅仅只是阐述页面的逻辑，而不是一味的贴代码。

  代码是给程序员理解的，对于功能复杂，变量随处使用，如果没有文档，对项目的维护将会是一场灾难，特别是多程序员合作开发的场景或者是接手`祖传代码`的场景。

  如果在新人接手老项目时，有一份文档，这个文档写明了某个方法例如`getUserInfo`方法，它的作用是`传入当前用户的ID，执行里面的xxxx API从服务器获取用户数据，以Promise对象的形式返回数据，返回的数据格式就是接口文档上的response数据`，当我这样写之后。

  接手的人就会更能理解项目的运行，照着源码也能更快的上手，降低难度同时也节省时间。 

  而在这个过程中，我并没有透露任何敏感的信息，这也是我编写文档会特别考虑的事情。

  > [!IMPORTANT] 注意
  > - **文档在撰写时，会不可避免的贴上部分源码，例如变量，方法，这些都是无需担心源代码泄露的。因为对于方法来说，大部分业务代码都会被删掉，只保留用于理清思路的关键变量和名称**  
  > - **从技术角度而言，前端代码无论如何都不能保证安全，即便是通过Webpack或者vite进行构建，其代码始终会在浏览器里执行，通过浏览器的控制台查看或者查看源代码和断点调试，甚至反编译，前端代码很容易被获取。**
  > - **所以您能听到的风险，一般都是xxx公司服务器被黑了，而不是xxx公司前端(网站)代码泄露导致怎样的损失，即便是听到网站被攻击，也指的是黑客攻击该服务器导致网站崩溃。**
  > - **所以无需担心此文档会给项目带来风险。**

  此外，我会对基本的数据进行脱敏，譬如：
  
  - 文档里`不会贴上实际项目git仓库地址`，避免他人拉取代码。
  - 文档的配置信息，域名，证件，地址，姓名以及接口地址，一些SDKID等等都将以`模拟值`代替。

  文档记录在这里并没有任何安全问题。但如果您出于某些考虑，或公司制度规定要求，需要我将记录的文档提交并删除，请与我发送邮件，我会不定期查阅邮件，我会在查阅到的第一时间进行相关内容的删除。  
  
  **`文档的删除，应当在本人离职项目交接之时明确提出。`**  

  **`若为我离职后提出，请发送要求到 tangwairen@sina.cn 这个邮箱`**

## 前端常用封装

  常用方法封装索引：

  - [纯Javascript/Typescript相关](/docs/jts/)
  - [Vuejs组件封装](/docs/vuecom/)

  Tailwindcss相关笔记：

  - [Flex弹性布局与Gird网格布局的区别笔记](/docs/css/flexGrid)

## 后端常用封装

  Golang开发学习：

  - [Gin框架学习笔记](/docs/gin/)

  数据库学习：

  - [mysql学习](/docs/mysql/)

## 个人项目笔记

  全栈开发心得体会记录：

  [galang后台开发实战](/docs/golang-study/)

## 实际项目文档

  **东方电\*\*\*院(成都)：**

  - [福建mes系统App端](/docs/fujian-mes/)  

  - [天津mom系统App端](/docs/tianjin-mom/)  

  - [梁帽大屏可视化Web端](/docs/liangmao/)

  **神钢\*\*\*\*\*\*公司**

  - [电子合同-微信小程序](/docs/sgjj/applet/)  

  - [电子合同-后台管理](/docs/sgjj/web/)  

  **不点\*\*\*\*\*\*\*\*公司**

  - [交易盾微信小程序-原生](/docs/jiaoyidun/wx/)  

  - [交易盾小程序-H5网页](/docs/jiaoyidun/h5/)  

  - [交易盾后台管理-Web](/docs/jiaoyidun/web/)  

## 友情链接

  Vuejs:

  - [Vue.js前端框架](https://cn.vuejs.org/guide/introduction.html)  
  
  Vuejs生态：

  - [Ant-Design-Vue前端组件 - 适用于web后台管理系统](https://antdv.com)
  - [Vant-UI前端组件 - 适用于H5移动端项目](https://vant.pro)
  - [VitePress文档构建 - 文档编写搭建](https://vitepress.dev/zh/guide/deploy)
  
  请求协议相关：

  - [Axios前端请求](https://www.axios-http.cn/docs/intro)  
  - [EMQX-mqtt](https://www.emqx.com/zh/blog/the-easiest-guide-to-getting-started-with-mqtt)
  
  前端跨平台技术框架：

  - [Electron - 跨Mac/Windows/Linux桌面程序的框架](https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app)
  - [Uniapp - 跨Android/IOS/小程序三个平台的框架](https://uniapp.dcloud.net.cn/)

  前端常用动画：

  - [Aos.js动画 - 适用于官网简单动画](http://michalsnik.github.io/aos/)

  前后端接口规范

  - [swaagerAPI - 也叫OpenApi](https://swagger.org.cn/docs/)