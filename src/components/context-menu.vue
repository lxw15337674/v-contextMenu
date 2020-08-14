<script>
import Vue from 'vue';
import * as utils from '../utils/index.ts';
export default {
    name: 'context-menu',
    data() {
        return {
            visible: false,
        };
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleBodyClick(event) {
            event.preventDefault();
            if (event.button === 0) {
                this.closeContextMenu();
            }
            if (event.button === 2) {
                this.closeContextMenu();
                this.openContextMenu(event);
            }
        },
        openContextMenu(evt) {
            if (this.disabled) return;
            this.visible = true;
            this.$nextTick(() => {
                if (!this.$refs.contextMenu) return;
                let contextMenu = this.$refs.contextMenu,
                    {
                        width: menuHeight = 0,
                        height: menuWidth = 0,
                    } = contextMenu.getBoundingClientRect(),
                    position = {},
                    { x, y } = evt,
                    { innerWidth: width, innerHeight: height } = window;
                position.maxWidth = utils.numToPx(width);
                position.maxHeight = utils.numToPx(height);
                position.left = utils.placement(menuHeight, x, width);
                position.top = utils.placement(menuWidth, y, height);
                Object.assign(contextMenu.style, position);
                this.$emit('show');
            });
        },

        closeContextMenu() {
            this.visible = false;
            this.$emit('close');
        },
        getFirstElement() {
            const slots = this.$slots.default;
            if (!Array.isArray(slots)) {
                return null;
            }
            let element = null;
            for (let index = 0; index < slots.length; index++) {
                if (slots[index] && slots[index].tag) {
                    element = slots[index];
                }
            }
            return element;
        },
    },

    mounted() {
        this.$el.addEventListener('contextmenu', this.handleBodyClick, true);
        window.addEventListener('click', this.handleBodyClick, true);
    },
    beforeCreate() {
        let that = this;
        this.menuVm = new Vue({
            data: { node: '' },
            render(h) {
                //todo 这个地方不知道为什么必须要包裹才能正常渲染，直接返回this.node会渲染为空
                return <div>{this.node}</div>;
            },
        }).$mount();
    },
    render(h) {
        if (this.menuVm) {
            // this.menuVm.provide = { $$contextmenu: this };
            this.menuVm.node = (
                <transition name='context-menu-fade'>
                    <div
                        id='context-menu'
                        class='context-menu'
                        ref='contextMenu'
                        v-show={this.visible}
                    >
                        {this.$slots.contextMenu}
                    </div>
                </transition>
            );
        }
        const firstElement = this.getFirstElement();
        if (!firstElement) {
            return null;
        }
        if (this.menuVm) {
            document.body.appendChild(this.menuVm.$el);
        }
        return firstElement;
    },
    beforeDestroy() {
        document.body.removeChild(this.menuVm.$el);
        this.menuVm && this.menuVm.$destroy();
    },
    destroyed() {
        this.$el.removeEventListener('contextmenu', this.handleBodyClick, true);
        window.removeEventListener('click', this.handleBodyClick, true);
    },
};
</script>

<style lang="stylus" scoped>
.context-menu
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    border-radius: 4px;
    padding: 10px 0;
    font-size: 12px;
    line-height: 1.2;
    min-width: 10px;
    word-wrap: break-word;
    color: #303133;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid #d9d9d9;

.context-menu-fade-enter-active,
.context-menu-fade-leave-active
    transition: opacity 0.3s;

.context-menu-fade-enter,
.context-menu-fade-leave-to
    opacity: 0;
</style>
