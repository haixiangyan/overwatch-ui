<template>
    <label @click="onClick" class="ow-checkbox">
        <span class="ow-checkbox-item">
            <span v-if="value" class="ow-checkbox-item-solid"></span>
        </span>
        <span class="ow-checkbox-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: "OwCheckbox",
        props: {
            value: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            onClick() {
                this.$emit('input', !this.value)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-checkbox {
    display: inline-flex;
    align-items: center;
    vertical-align: top;

    &:hover {
        .ow-checkbox-item {
            border-color: $--checkbox-input-border-color-hover;
        }
    }

    &-item {
        display: inline-block;
        height: $--checkbox-input-height;
        width: $--checkbox-input-width;
        position: relative;
        background: $--checkbox-input-fill;
        border: $--checkbox-input-border;
        border-radius: $--checkbox-input-border-radius;

        &-solid {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 12px;
            width: 12px;
            background: $--checkbox-checked-input-fill;
            border-radius: $--checkbox-input-border-radius;
        }
    }

    &-label {
        color: $--checkbox-color;
        display: inline-flex;
        align-items: center;
    }
}
</style>
