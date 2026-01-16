# 使用手册

  本手册是一个给相关人员阅读的文档。

## 手册简介

  这是我(**ChengYu**)使用 `vite-press` 框架搭建的文档手册网站。目的是记录自己开发过程中项目的设计构思，以及一些可以剥离出来的不用重复造轮子的相关代码。

  当然记录代码片段是此文档的支线。
  
  这里主要的内容，仍然是记录我在参与项目的开发时，对接手程序的开发思路进行的文档记录，我认为这一步是非常有必要的。

  否者，当一段时间后回顾程序，以及当下一个接手的程序员，在面对不知何用的变量字段，面对三言两语的注释解释不清的、较为抽象的方法时，就会吐槽抱怨了。
  
  总之，写文档是一个程序员的优秀的习惯，这也是我从此刻开始着手培养的好习惯。


## 写在前面

  **此站点的文档仅仅只是对项目开发时，开发者对功能的设计进行阐述。**
  
  用大白话来说就是，这个方法是做什么用的，这些对象是干什么用的，把设计的思路的讲清楚即为目的，避免我后续回忆，也避免后续的开发者接手时，因难以理解项目导致拖慢项目进度。

  文档在编写时会进行脱敏处理，涉及到`服务器地址`、`KEY`、`敏感信息如特殊ID，身份证`，包括以上但未列举完全的项会以默认值展示。

  例如：

  ```ts
  // 假设这个是文档中的用户返回响应，以下数据不会造成源项目信息泄露
  interface IResponse{
    code: number,
    data: {
      userInfo:{
        avatar: string, // 用户头像 - 包含的服务器地址会删除 "https://example.com/assets/users/xxxxxxx/xxxxxx.png"
      },
      sdkId: number,    // 某些插件的ID - 登录的时候初始化 1002003001 
    }
  }
  ```
  > [!IMPORTANT]
  > - **文档在撰写时，会不可避免的贴上源码，例如变量，方法，这些都是无需担心源代码泄露的。纯前端的代码没有安全性可言，真有人搞事情前端代码起不了多少作用，即便是源码给到黑客，黑客仍然是攻击的服务器，所以不用担心前端代码展示之后的风险。**  
  > - **单从技术而言，与其担心前端代码泄露产生风险，不如多考虑服务器的防御配置和防御机制。**

  不过最基本的还是处理的，譬如：
  
  - 所有文档里`不会贴上git仓库地址`。
  - 即使因为疏忽泄露了git地址，他人也`无法获取源代码`，因为没有拉取的权限。
  - 文档的配置信息，域名，证件，地址，姓名等都将以`模拟值`代替。

  所以文档记录在这里并没有任何安全问题。

  但出于某些考虑，可能有些公司对资产管理或者项目审计、项目管理有一套严格的规章制度，需要将我工作时的整理记录的文档提交，并删除此页面的记录。  
  
  **`如有要求请联系我删除，顺带一提，若要对文档进行提交，应当在本人离职项目交接之时明确提出。`**

## 实际项目文档列表索引

  **东方\*\*\*究院：**

  - [福建mes系统App端](/docs/fujian-mes/)  

  - [天津mom系统App端](/docs/tianjin-mom/)  

  - [梁帽大屏可视化Web端](/docs/liangmao/)

  **神\*\*机**

  - [电子合同-微信小程序](/docs/sgjj/applet/)  

  - [电子合同-后台管理](/docs/sgjj/web/)  

  **不\*\*软**

  - [交易盾微信小程序-原生](/docs/jiaoyidun/wx/)  

  - [交易盾小程序-H5网页](/docs/jiaoyidun/h5/)  

  - [交易盾后台管理-Web](/docs/jiaoyidun/web/)  

  - [不点外勤-App使用手册](/docs/budian/)

## 个人学习项目

  我个人学习Golang语言时，做全栈时的学习心得，相关文档记录和代码。

  [galang后台开发实战](/docs/golang-study/)

## 方法封装与常用代码

  常用方法封装索引：

  - [纯Javascript/Typescript相关](/docs/jts/)
  - [Vuejs组件封装](/docs/vuecom/)

## CSS样式学习

  html样式、动画、tailwindcss等：

  - [Flex弹性布局与Gird网格布局的区别笔记](/docs/css/flexGrid)

## 友情链接

  学习技术常用网站:

  - [Vuejs前端框架](https://cn.vuejs.org/guide/introduction.html)  
  - [Axios前端请求-可能需要梯子访问](https://www.axios-http.cn/docs/intro)  
  - [electron桌面框架](https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app)
  - [Ant-Design-Vue组件](https://antdv.com)
  - [Vant-UI组件](https://vant.pro)
  - [VitePress文档构建](https://vitepress.dev/zh/guide/deploy)
  - [Aos.js动画试用于官网上浮效果-开箱即用](http://michalsnik.github.io/aos/)