# Javascript或者Typescript代码

  开发过程中，遇到的困难以及解决方法。

  该页面将会被设计的非常长，因为所有的代码都将会在这一个文件里，因此希望快速查找和索引请看右侧菜单。

  >[!info]
  >为什么要这样做?  
  >额外分一些类不好吗？当然更好，但是我懒得分。

## 移动端适配

  原理是`通过控制缩放比例`将移动端的设计稿样式应用到各个尺寸的手机。

  至于平板和PC电脑，则可以通过限制最大宽度为750px来处理，即当在pc/平板上显示时，其页面不会全屏铺开，而是最大占750px，居中显示，诸如此类。

  优点是除了极个别的特殊屏，其它的都能展示成设计稿的样式。
  
  缺点是字体、图片会等比放大或者缩小，且必须使用`rem`作为css的单位。

  代码如下:

  ```ts
    export class useRem {
      static remListenerRegistered = false;
      static currentDesignWidth = 375;
      static resizeHandler = null;
      static orientationHandler = null;
      static domContentLoadedHandler = null;

      /** 
       * 当窗口大小发生变化时，动态设置根字体大小
       **/
      static setRem(designWidth = 375) {
        const html = document.documentElement;
        let width = html.clientWidth;
        
        // 设置宽度边界，确保在合理范围内
        if (width > 540) width = 540;
        if (width < 320) width = 320;
        
        // 计算并设置根字体大小：基准值100px
        html.style.fontSize = (width / designWidth) * 100 + 'px';
        this.currentDesignWidth = designWidth;
      }

      /** 
       * 监听页面大小变化
       **/
      static registerRemListener(designWidth = 375) {
        if (this.remListenerRegistered) return;
        
        // 创建具名函数引用，便于后续移除
        this.resizeHandler = () => this.setRem(designWidth);
        this.orientationHandler = () => this.setRem(designWidth);
        this.domContentLoadedHandler = () => this.setRem(designWidth);
        
        // 添加事件监听
        window.addEventListener('resize', this.resizeHandler);
        window.addEventListener('orientationchange', this.orientationHandler);
        document.addEventListener('DOMContentLoaded', this.domContentLoadedHandler);
        
        // 立即执行一次初始化
        this.setRem(designWidth);
        this.remListenerRegistered = true;
      }

      /** 
       * 移除所有监听器事件
       **/
      static unregisterRemListener() {
        if (!this.remListenerRegistered) return;
        
        // 移除事件监听器
        if (this.resizeHandler) {
          window.removeEventListener('resize', this.resizeHandler);
          this.resizeHandler = null;
        }
        
        if (this.orientationHandler) {
          window.removeEventListener('orientationchange', this.orientationHandler);
          this.orientationHandler = null;
        }
        
        if (this.domContentLoadedHandler) {
          document.removeEventListener('DOMContentLoaded', this.domContentLoadedHandler);
          this.domContentLoadedHandler = null;
        }
        
        this.remListenerRegistered = false;
      }

      /**
       * 手动触发一次rem计算（适用于某些特殊场景）
       **/
      static updateRem() {
        this.setRem(this.currentDesignWidth);
      }
    }
  ```

  使用示例：
  ```js
    // 初始化
    useRem.registerRemListener(375); // 针对750px设计稿（二倍图）

    // 在组件卸载或页面销毁时清理
    useRem.unregisterRemListener();

    // 手动更新
    useRem.updateRem();
  ```