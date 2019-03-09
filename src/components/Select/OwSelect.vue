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
        <ul v-if="isShowDropdown" :style="dropdownStyles" class="ow-select-dropdown">
            <ow-option
                v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
                :img-url="option.img"
                :disabled="option.disabled"
                :selected="option.selected || option.label === selectedLabel"
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
            },
            maxHeight: {
                type: Number,
            }
        },
        data() {
            return {
                isShowDropdown: false
            }
        },
        computed: {
            selectedLabel() {
                const selectedOption = this.options.find((option) => option.value === this.value)
                return (selectedOption && selectedOption.label) ? selectedOption.label : ''
            },
            dropdownStyles() {
                return {
                    maxHeight: this.maxHeight + 'px'
                }
            }
        },
        directives: { ClickOutside },
        components: { OwOption, OwIcon },
        methods: {
            open() {
                this.isShowDropdown = true
            },
            close() {
                this.isShowDropdown = false
            },
            toggle() {
                if (this.isShowDropdown) {
                    this.close()
                }
                else {
                    this.open()
                }
            },
            onClickOption(option) {
                if (this.disabled || option.disabled) {
                    return
                }
                this.$emit('update:value', option.value)
                this.$emit('input', option.value)
                // Close dropdown
                this.close()
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
            padding: 0 5px;
            height: 100%;
            border: none;
            background: transparent;
            outline: none;
            color: $--select-input-color;
            font-size: $--select-input-font-size;
        }
        &:hover {
            background: $--color-primary;
            border-color: $--select-border-color-hover;
        }
    }
    &-dropdown {
        position: absolute;
        top: $--input-height;
        left: 0;
        margin-top: 2px;
        padding: $--select-dropdown-padding;
        width: 100%;
        max-height: $--select-dropdown-max-height;
        border-radius: 2px;
        background: $--select-dropdown-background;
        overflow: auto;
    }
}
</style>
