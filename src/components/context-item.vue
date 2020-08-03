<template>
    <div>
        <div
            v-hotkey="keymap"
            v-focus
            class="context-item"
            :class="{
                'is-active': active,
                'is-disabled': disabled,
            }"
            @click="handleClick"
        >
            <slot></slot>
        </div>
        <div class="divided" v-if="divided"></div>
    </div>
</template>

<script>
import { directive } from 'v-hotkey';
import * as utils from '../utils/index.ts';
export default {
    name: 'context-item',
    props: {
        divided: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
        autoHide: {
            type: Boolean,
            default: true,
        },
        def: {
            type: Function,
        },
        hotkey: {
            type: String,
        },
    },
    computed: {
        keymap() {
            let obj = {};
            if (this.hotkey) {
                obj[this.hotkey] = this.def;
            }
            return obj;
        },

    },
    directives: {
        hotkey: directive,
    },
    methods: {
        handleClick(event) {
            debugger;
            let contextMenu = this.$parent.node.context;
            if (!this.disabled) {
                if (utils.varType(this.def) === 'function') {
                    this.def();
                }
                if (this.autoHide) {
                    contextMenu.closeContextMenu();
                }
                this.$emit('click', this, event);
            }
        },
    },
};
</script>

<style lang="stylus" scoped>
borderColor = rgba(0,0,0,0.1)
.context-item
    padding: 10px 16px;
    cursor: pointer;
    font-size 14px
    min-width 280px
    &:not(.is-disabled):hover
        background-color: #f5f5f5
.is-disabled
    color:borderColor
    cursor: not-allowed
.is-active
  background-color:#46a0fc
  color white
.divided
    height: 1px;
    width: 100%;
    margin: 6px 1px;
    background: borderColor
</style>
