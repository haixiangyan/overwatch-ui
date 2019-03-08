<template>
    <div class="ow-select" v-click-outside="close">
        <div class="ow-select-input-wrapper">
            <input
                :disabled="disabled"
                @click="toggle" type="text"
                :value="selectedLabel"
                readonly>
            <ow-icon color="white" name="down"></ow-icon>
        </div>
        <ul v-if="isShowPopover" class="ow-select-popover">
            <ow-option
                v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
                :img-url="option.img"
                @click="onClickOption(option)">
            </ow-option>
        </ul>
    </div>
</template>

<script>
    import ClickOutside from '../../directives/ClickOutside'
    import OwIcon from '../Icon/OwIcon'
    import OwOption from './OwOption'
    export default {
        name: "OwSelect",
        props: {
            value: {
                type: [Number, String, Boolean, Object],
                required: true
            },
            options: {
                type: Array,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isShowPopover: true
            }
        },
        computed: {
            selectedLabel() {
                const selectedOption = this.options.find((option) => option.value === this.value)
                return (selectedOption && selectedOption.label) ? selectedOption.label : ''
            }
        },
        directives: { ClickOutside },
        components: { OwOption, OwIcon },
        methods: {
            open() {
                this.isShowPopover = true
            },
            close() {
                this.isShowPopover = false
            },
            toggle() {
                if (this.isShowPopover) {
                    this.close()
                }
                else {
                    this.open()
                }
            },
            onClickOption(option) {
                if (this.disabled) {
                    return
                }
                this.$emit('update:value', option.value)
                this.$emit('input', option.value)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-select {
    position: relative;
    display: inline-block;
    vertical-align: top;
    &-input-wrapper {
        display: flex;
        align-items: center;
        padding: 0 8px;
        height: $--input-height;
        background: $--color-opacity-primary;
        border: 1px solid $--color-opacity-primary;
        transition: all .3s;
        > input {
            padding: 0 4px;
            height: 100%;
            border: none;
            background: transparent;
            outline: none;
            color: white;
            font-size: 1em;
        }
        &:hover {
            background: $--color-primary;
            border-color: white;
        }
    }
    &-popover {
        position: absolute;
        top: $--input-height;
        left: 0;
        margin-top: 2px;
        padding: 4px 8px;
        width: 100%;
        border-radius: 2px;
        background: $--color-bg-dark;
    }
}
</style>
