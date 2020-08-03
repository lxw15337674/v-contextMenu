<template>
    <div class="app">
        <contextMenu>
            <div class="content"></div>
            <template slot="contentMenu">
                <context-item
                    v-for="menuItem in contextMenu"
                    :key="menuItem.label"
                    :divided="menuItem.divided"
                    :disabled="menuItem.disabled"
                    :active="menuItem.active"
                    :def="menuItem.def"
                    :hotkey="menuItem.hotkey"
                >
                    <span class="">{{ menuItem.label }}</span>
                    <span class="fr">{{ menuItem.hotkey | hotKeyFilter }}</span>
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
            contextMenu: [
                {
                    label: '复制',
                    def: this.copy,
                    hotkey: 'ctrl+c',
                },
                {
                    label: '粘贴',
                    def: 'paste',
                    hotkey: 'ctrl+v',
                },
                // {
                //     label: '剪切',
                //     def: 'cut',
                //     hotkey: 'ctrl+x',
                // },
                // {
                //     label: '撤销',
                //     def: 'reverse',
                //     hotkey: 'ctrl+z',
                // },
                // {
                //     label: '重做',
                //     def: 'reverse',
                //     hotkey: 'ctrl+y',
                //     disabled: false,
                // },
                // {
                //     label: '清空选中区域',
                //     def: 'clear',
                //     divided: true,
                //     hotkey: 'delete',
                // },
                // {
                //     label: '上方插入一行',
                //     def: 'insertRowUp',
                // },
                // {
                //     label: '下方插入一行',
                //     def: 'insertRowDown',
                // },
                // {
                //     label: '删除所在行',
                //     def: 'removeRows',
                //     divided: true,
                // },
                // {
                //     label: '左边插入一列',
                //     def: 'insertColLeft',
                // },
                // {
                //     label: '右边插入一列',
                //     def: 'insertColRight',
                // },
                // {
                //     label: '删除所在列',
                //     def: 'removeCols',
                // },
            ],
        };
    },
    methods: {
        copy() {
            console.log('copy');
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
