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
    vertical-align: top;
    &:hover {
        .ow-radio-item {
            border-color: $--radio-input-border-color-hover;
        }
    }
    &-item {
        display: inline-block;
        vertical-align: middle;
        height: $--radio-input-height;
        width: $--radio-input-width;
        position: relative;
        background: $--radio-input-fill;
        border: $--radio-input-border;
        border-radius: $--radio-input-border-radius;
        &-solid {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 12px;
            width: 12px;
            background: $--radio-checked-input-fill;
            border-radius: $--radio-input-border-radius;
        }
    }
    &-label {
        margin-left: 4px;
        color: $--radio-color;
        display: inline-flex;
        vertical-align: middle;
        align-items: center;
    }
}
</style>
