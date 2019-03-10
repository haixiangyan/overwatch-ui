<template>
    <div class="ow-label">
        <div class="ow-label-title">
            {{title}}
        </div>
        <div class="ow-label-item" :class="{wrap: wrappable}" v-click-outside="hideInput">
            <span v-if="hasOwSlider">
                <input
                    v-if="isShowInput"
                    @input="$emit('input', $event.target.value)"
                    class="ow-label-item-input"
                    type="text"
                    :value="value">
                <span v-else @click.stop="showInput" class="ow-label-item-label">{{value}}</span>
            </span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ClickOutside from '../../directives/ClickOutside'
    export default {
        name: "OwLabel",
        props: {
            title: {
                type: String,
                default: ''
            },
            value: {
                type: [String, Number, Boolean]
            },
            wrappable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                hasOwSlider: false,
                isShowInput: false
            }
        },
        methods: {
            showInput() {
                this.isShowInput = true
            },
            hideInput() {
                this.isShowInput = false
            }
        },
        directives: { ClickOutside },
        mounted() {
            this.hasOwSlider = this.$children.length > 0 ? this.$children[0].$options.name === 'OwSlider' : false
        }
    }
</script>

<style scoped lang="scss">
.ow-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: $--label-height;
    &-title {
        flex-grow: 1;
        display: flex;
        align-items: center;
        padding-left: 16px;
        height: 100%;
        background: $--label-background;
        color: $--label-text-color;
    }
    &-item {
        margin-left: 8px;
        height: 100%;
        display: flex;
        align-items: center;
        &.wrap {
            position: absolute;
            top: 0;
            right: 0;
        }
        &-label {
            display: inline-flex;
            margin-right: 32px;
            height: 24px;
            vertical-align: top;
            line-height: 24px;
            color: $--label-text-color;
        }
        &-input {
            width: 24px;
            height: 24px;
            vertical-align: top;
            border: none;
            outline: none;
            margin-right: 32px;
        }
    }
    & + & {
        margin-top: 8px;
    }

    /*Reset*/
    .ow-switch {
        background: transparent;
        border-color: transparent;
    }
}
</style>
