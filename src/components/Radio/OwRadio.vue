<template>
    <label @click="onClick" class="ow-radio">
        <span class="ow-radio-item">
            <span v-if="value === radioKey" class="ow-radio-item-solid"></span>
        </span>
        <span class="ow-radio-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: "OwRadio",
        props: {
            value: {
                type: [String, Number, Boolean],
                required: true
            },
            radioKey: {
                type: [String, Number, Boolean],
                required: true
            },
            options: {
                type: Array,
                required: true
            }
        },
        methods: {
            onClick() {
                this.$emit('input', this.radioKey)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-radio {
    display: inline-flex;
    align-items: center;
    &-item {
        display: inline-block;
        vertical-align: middle;
        height: 16px;
        width: 16px;
        position: relative;
        background: white;
        border: 1px solid $--color-bg;
        border-radius: 50%;
        &-solid {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 12px;
            width: 12px;
            background: $--color-bg-dark;
            border-radius: 50%;
        }
    }
    &-label {
        color: $--color-bg;
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
    }
}
</style>
