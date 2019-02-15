<template>
    <div class="ow-nav-item" :class="{active}" @click="onClickItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwNavItem",
        props: {
            name: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        methods: {
            onClickItem() {
                this.$emit('add:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-nav-item {
    padding: 10px 20px;
    &.active {
        background: red;
    }
}
</style>