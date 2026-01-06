<style>
  .box{
    width: 100%;
    height: auto;
    background: #ffffffff;
  }
  .block{
    width: 90px;
    aspect-ratio: 8 / 3;
    margin: 4px;
    border-radius: 4px;
  }
  .block:hover{
    cursor: pointer;
  }
  .flex{ display: flex; }
  .flex-row{ flex-direction: row; }
  .flex-col{ flex-direction: column; }
  .orange{
    background: #2e93f1ff;
  }
  .text-white{
    color: #FFF;
    font-size: 12px
  }
  .text-center{
    justify-content: center;
    align-items: center;
  }
</style>

# Flex和Gird的区别

  **`Flex`** 是弹性布局。  

  通过控制主轴和交叉轴来进行布局，大白话就是控制横向、纵向元素的排列方式。  

  **`Gird`** 是网格布局。  

  像表格一样，将容器划分成行和列，通过设置属性，对其进行整体控制。

## Flex 弹性布局笔记

  **1.1、在css里设置 `display: flex;` 属性得到弹性布局，此时默认排列的两根轴是 → ↓**

  ```scss{2}
  .box {
    display: flex; // 设置弹性布局，其它值默认
  }
  ```

  <div class="box flex">
    <div class="block orange flex text-center text-white">点赞</div>
    <div class="block orange flex text-center text-white">投币</div>
    <div class="block orange flex text-center text-white">收藏</div>
  </div>

  **1.2、通过设置 `flex-direction: column;` 属性改变主轴方向，此时默认排列的两根轴是 ↓ →**

  ```scss{3}
  .box {
    display: flex;
    flex-direction: column;  // 设置弹性布局，其它值默认
  }
  ```

  <div class="box flex flex-col">
    <div class="block orange flex text-center text-white">点赞</div>
    <div class="block orange flex text-center text-white">投币</div>
    <div class="block orange flex text-center text-white">收藏</div>
  </div>

  >[!TIP] 提示：
  > **并不是所有属性都要写，当仅仅只是希望横向排列时就可以仅写个 display: flex; 即可，根据不同的场景设置不同的值。**

  **2.1、通过 `justify-content: 值 ;` 属性改变主轴排列**

  ```scss{5}
  // 主轴里的内容左对齐
  .box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start; // 默认排列方式（首对齐）
  }
  ```

  <div class="box flex flex-row">
    <div class="block orange flex text-center text-white">点赞</div>
    <div class="block orange flex text-center text-white">投币</div>
    <div class="block orange flex text-center text-white">收藏</div>
  </div>

  ```scss{5}
  // 主轴里的内容居中
  .box {
    display: flex;
    flex-direction: row;
    justify-content: center; // 居中对齐
  }
  ```

  <div class="box flex flex-row" style="justify-content: center;">
    <div class="block orange flex text-center text-white">点赞</div>
    <div class="block orange flex text-center text-white">投币</div>
    <div class="block orange flex text-center text-white">收藏</div>
  </div>

  ```scss{5}
  // 主轴里的内容右对齐
  .box {
    display: flex;
    flex-direction: row;
    justify-content: flex-end; // 尾对齐
  }
  ```

  <div class="box flex flex-row" style="justify-content: flex-end;">
    <div class="block orange flex text-center text-white">点赞</div>
    <div class="block orange flex text-center text-white">投币</div>
    <div class="block orange flex text-center text-white">收藏</div>
  </div>

  ## Gird 网格布局笔记