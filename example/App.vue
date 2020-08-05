<template>
    <div id="app">
        <div class="button" @click="toggle">123</div>
        <contextMenu>
            <div class="content">
                <div>test</div>
                123123
            </div>
            <template slot="contextMenu">
                <context-item
                    v-for="menuItem in contextMenu"
                    :key="menuItem.label"
                    :label="menuItem.label"
                    :divided="menuItem.divided"
                    :disabled="menuItem.disabled"
                    :callback="menuItem.callback"
                    :hotkey="menuItem.hotkey"
                >
                    <template v-slot:icon>
                        <span>icon</span>
                    </template>
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
            show: false,
            contextMenu: [
                {
                    label: '显示',
                    callback: this.toggle,
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
    methods: {
        toggle() {
            console.log('toggle');
            this.show = !this.show;
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
