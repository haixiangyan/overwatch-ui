<template>
    <div class="ow-select" v-click-outside="close">
        <input
            :disabled="disabled"
            class="ow-select-input"
            @click="open" type="text"
            :value="selectedLabel"
            readonly>
        <ul v-if="isShowPopover" class="ow-select-popover">
            <ow-option
                v-for="option in options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
                @click="onClickOption(option)">
            </ow-option>
        </ul>
    </div>
</template>

<script>
    import ClickOutside from '../../directives/ClickOutside'
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
        components: { OwOption },
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
    &-input {
        height: $--input-height;
    }
    &-popover {
        border: 1px solid red;
        position: absolute;
        top: $--input-height;
        left: 0;
        margin-top: 2px;
    }
}
</style>
