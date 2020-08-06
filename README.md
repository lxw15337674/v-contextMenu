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
import {contextItem,contextMenu} from '@lxw15337674/v-context-menu';

export default {
    name: 'App',
    components: { contextItem，contextMenu },
}
```

3. demo

```javascript
    <contextMenu>
            <div class="content">
              本体内容
            </div>
            <template slot="contextMenu">
                <context-item
                    v-for="menuItem in contextMenu"
                    :key="menuItem.label"
                    :hotkey="menuItem.hotkey"
					:divided="menuItem.divided"
                    :disabled="menuItem.disabled"
                    :callback="menuItem.callback"
                    :hotkey="menuItem.hotkey"
                >
                </context-item>
            </template>
        </contextMenu>

data: function () {
        return {
            contextMenu: [
                {
                    label: '显示',
                    callback: () => {
                        console.log('显示');
                    },
                    hotkey: 'enter',
                    disabled: true,
                },
                {
                    label: '粘贴',
                    callback: () => {
                        console.log('粘贴');
                    },
                    hotkey: 'ctrl+v',
                },
            ],
        };
    },
```



## context-menu

菜单主题


### 组件props参数

| 参数     | 说明         | 类型    | 是否必填 | 可选值         | 默认值 |
| -------- | ------------ | ------- | -------- | -------------- | ------ |
| disabled | 是否禁用菜单 | Booelan | 否       | `true`/`false` | false  |
|          |              |         |          |                |        |
### 组件事件

| 参数  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| show  | 菜单显示时触发 |          |
| close | 菜单关闭时触发 |          |

## context-item

菜单项

### 组件props参数
| 参数     | 说明                     | 类型          | 是否必填 | 可选值         | 默认值 | 举例   |
| -------- | ------------------------ | ------------- | -------- | -------------- | ------ | ------ |
| label    | 菜单项标题               | String/Number | 否       |                |        |        |
| hotkey   | 功能快捷键               | String        | 否       |                |        | ctrl+c |
| callback | 回调函数                 | Function      | 否       |                |        |        |
| divided  | 是否在上方添加分隔符     | Boolean       | 否       | `true`/`false` | false  |        |
| disabled | 是否禁用                 | Boolean       | 否       | `true`/`false` | false  |        |
| autoHide | 被点击后菜单是否自动隐藏 | Boolean       | 否       | `true`/`false` | false  |        |
### 组件事件

| 参数  | 说明               | 回调参数               |
| ----- | ------------------ | ---------------------- |
| click | 被点击时触发的事件 | 当前元素实例、点击事件 |
|       |                    |                        |

