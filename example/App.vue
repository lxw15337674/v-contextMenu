<template>
    <div class="app">
        <contextMenu :theme="'dark'" >
            <div class="content">
              <div v-show="show">test</div>
            </div>
            <template slot="contentMenu" >
                <context-item
                    v-for="menuItem in contextMenu"
                    :key="menuItem.label"
                    :label="menuItem.label"
                    :divided="menuItem.divided"
                    :disabled="menuItem.disabled"
                    :active="menuItem.active"
                    :callback="menuItem.callback"
                    :hotkey="menuItem.hotkey"
                >
                  <template  v-slot:icon >
                    <span>icon</span>
                  </template>
<!--                    <span class="">{{ menuItem.label }}</span>-->
<!--                    <span class="fr">{{ menuItem.hotkey | hotKeyFilter }}</span>-->
                </context-item>
            </template>
        </contextMenu>
    </div>
</template>

<script>
export default {
    name: 'App',
    data: function () {
        return {
          show:false,
            contextMenu: [
                {
                    label: '显示',
                    callback: this.toggle,
                    hotkey: 'enter',
                },
                {
                    label: '粘贴',
                    callback: ()=>{
                      console.log('粘贴')
                    },
                    hotkey: 'ctrl+v',
                  active:true,
                },
                {
                    label: '剪切',
                    callback: 'cut',
                    hotkey: 'ctrl+x',
                },
                {
                    label: '撤销',
                    callback: 'reverse',
                    hotkey: 'ctrl+z',
                },
                {
                    label: '重做',
                    callback: 'reverse',
                    hotkey: 'ctrl+y',
                    disabled: true,
                },
                {
                    label: '清空选中区域',
                    callback: 'clear',
                    hotkey: 'delete',
                },
                {
                  divided: true,
                  label: '上方插入一行',
                    callback: 'insertRowUp',
                },
                {
                    label: '下方插入一行',
                    callback: 'insertRowDown',
                },
                {
                    label: '删除所在行',
                    callback: 'removeRows',
                    divided: true,
                },
                {
                    label: '左边插入一列',
                    callback: 'insertColLeft',
                },
                {
                    label: '右边插入一列',
                    callback: 'insertColRight',
                },
                {
                    label: '删除所在列',
                    callback: 'removeCols',
                },
            ],
        };
    },
    methods: {
        toggle() {
            this.show=!this.show
        },
    },
    mounted() {},
};
</script>

<style lang="stylus" scoped>
.content
    height 100px
    border 1px solid red
    width 100px
</style>
