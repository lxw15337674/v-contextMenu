<template>
    <div >
        <div class="divided" v-if="divided"></div>
        <div
            v-hotkey="keymap"
            class="context-item"
            :class="{
                'is-active': active,

            }"
            @click="handleClick"
        >
            <slot >
                <slot name="icon"></slot>
                <span class="label">{{ label }}</span>
                <span class="hotkey">{{ hotkey | hotkeyFilter }}</span>
            </slot>
        </div>
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
        label: {
            type: String,
        },
        autoHide: {
            type: Boolean,
            default: true,
        },
        callback: {
            type: Function,
        },
        hotkey: {
            type: String,
        },
    },
    computed: {
        keymap() {
            let obj = {};
            if (this.hotkey && !this.disabled) {
                obj[this.hotkey] = this.callback;
            }
            return obj;
        },
    },
    filters: {
        hotkeyFilter: utils.hotkeyFilter,
    },
    directives: {
        hotkey: directive,
    },
    methods: {
        handleClick(event) {
            let contextMenu = this.$parent.node.context;
            if (!this.disabled) {
                if (utils.varType(this.callback) === 'function') {
                    this.callback();
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
    padding: 10px 30px 10px 16px;
    cursor: pointer;
    font-size 14px
    min-width 240px
    &:not(.is-disabled):hover
        background-color: #f5f5f5
.is-disabled
    color:borderColor
    cursor: not-allowed
.divided
    height: 1px;
    width: 100%;
    margin: 6px 1px;
    background: borderColor
.hotkey
  float right
</style>
