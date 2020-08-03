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
        theme: {
            type: String,
            default: 'light',
            validator: function (value) {
                return ['dark', 'light'].indexOf(value) !== -1;
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        openContextMenu(evt) {
            evt.preventDefault();
            if (this.visible) {
                this.closeContextMenu();
            } else {
                if (this.disabled) return;
                this.visible = true;
                this.$nextTick(() => {
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
                    this.$emit('contextmenu');
                });
            }
        },

        closeContextMenu() {
            this.visible = false;
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
        this.$el.addEventListener('contextmenu', this.openContextMenu, true);
    },
    beforeCreate() {
        this.popperVM = new Vue({
            data: { node: '' },
            render(h) {
                return this.node;
            },
        }).$mount();
    },
    render(h) {
        this.popperVM.node = (
            <transition name='context-menu-fade'>
                <div
                    id='context-menu'
                    class={[this.theme, 'context-menu']}
                    ref='contextMenu'
                    v-show={this.visible}
                >
                    {this.$slots.contentMenu}
                </div>
            </transition>
        );
        const firstElement = this.getFirstElement();
        if (!firstElement) {
            return null;
        }
        if (this.popperVM) {
            document.body.appendChild(this.popperVM.$el);
        }
        return firstElement;
    },
    beforeDestroy() {
        document.body.removeChild(this.popperVM.$el);
        this.popperVM && this.popperVM.$destroy();
    },
    destroyed() {
        this.$el.removeEventListener('oncontextmenu', this.openContextMenu);
    },
};
</script>

<style scoped>
.context-menu {
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
}
.dark {
    background: #303133;
    color: #fff;
}
.light {
    color: #303133;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid #d9d9d9;
}

.context-menu-fade-enter-active,
.context-menu-fade-leave-active {
    transition: opacity 0.3s;
}
.context-menu-fade-enter,
.context-menu-fade-leave-to {
    opacity: 0;
}
</style>
