## v-contextMenu

基于vue的右键菜单组件

##  特性

\- 集成v-hotkey，支持功能快捷键

## 用法

1. 安装插件

```shell
npm i @lxw15337674/v-context-menu
```

2. 注册为全局组件

```javascript
import contextMenu from '@lxw15337674/v-context-menu'
Vue.use(contextMenu, 'g');
```

或者按需引用

```javascript
import {virtualScroller,virtualScrollerTable} from 'v-virtual-scroller';

export default {
    name: 'App',
    components: { virtualScroller，virtualScrollerTable },
}
```

## virtual-scroller

单向虚拟滚动组件

### 基本用法

```html
<template>
<virtual-scroller :items="items" v-slot="{ index, size, active }">
                <div>{{ index }}{{ size }} {{ active }}</div>
  </virtual-scroller>
</tempalte>
<script>
export default {
    data() {
        return {
            items: [20, 20, 20, 20, 20],
        };
    },
};
</script>
```


### 组件props参数

| 参数      | 说明                       | 类型   | 是否必填 | 可选值                  | 默认值     |
| --------- | -------------------------- | ------ | -------- | ----------------------- | ---------- |
| items     | 元素长度集合（以px为单位） | array  | 是       |                         |            |
| direction | 虚拟滚动方向               | string | 否       | `vertical`,`horizontal` | `vertical` |
### 元素slot参数

| 参数   | 说明             | 类型    |
| ------ | ---------------- | ------- |
| size   | 元素的长度       | number  |
| index  | 元素在集合的位置 | number  |
| active | 元素激活状态     | Boolean |

### 组件事件

| 参数   | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| scroll | 列表滚动时触发 | 偏移值   |
|        |                |          |

## virtual-scroller-table

同时支持横向纵向的虚拟滚动组件

### 基本用法

```html
<template>
    <virtual-scroller-table
                            :cols="cols"
                            :rows="rows"
                            v-slot="{ rowIndex, colIndex, active }"
                            >
        <div>{{ colIndex }}{{ colIndex }} {{ active }}</div>
    </virtual-scroller-table>
</tempalte>
<script>
export default {
    data() {
        return {
            rows: [20, 20, 20, 20, 20],
            cols: [20, 20, 20, 20, 20]
        };
    },
};
</script>
```

### 组件props参数
| 参数 | 说明                         | 类型  | 是否必填 | 可选值 | 默认值 | 举例             |
| ---- | ---------------------------- | ----- | -------- | ------ | ------ | ---------------- |
| rows | 元素行长度集合（以px为单位） | array | 是       |        |        | [20,20,20,20,20] |
| cols | 元素列长度集合（以px为单位） | array | 是       |        |        | [20,20,20,20,20] |
|      |                              |       |          |        |        |                  |
|      |                              |       |          |        |        |                  |
### 元素slot参数

| 参数     | 说明               | 类型    |
| -------- | ------------------ | ------- |
| rowIndex | 元素在行集合的位置 | number  |
| colIndex | 元素在列集合的位置 | number  |
| height   | 元素高度           | number  |
| width    | 元素宽度           | number  |
| active   | 元素激活状态       | Boolean |
### 组件事件

| 参数   | 说明           | 回调参数                                |
| ------ | -------------- | --------------------------------------- |
| scroll | 列表滚动时触发 | `left` ：横向偏移值， `top`：纵向偏移值 |
|        |                |                                         |


## 参考

[再谈前端虚拟列表的实现](https://zhuanlan.zhihu.com/p/34585166)

[无尽滚动的复杂度 -- 来自 Google 大神的拆解](https://juejin.im/post/58a3c81e128fe10058c57a8b#heading-1 )

