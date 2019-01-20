<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwLayout",
        data() {
            return {
                hasSider: false
            }
        },
        computed: {
            classes() {
                return [
                    'ow-layout',
                    { 'ow-layout-has-sider': this.hasSider }
                ]
            }
        },
        mounted() {
            this.$children.forEach((child) => {
                if (child.$options.name === 'OwSider') {
                    this.hasSider = true
                }
            })
        },
    }
</script>

<style scoped lang="scss">
.ow-layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    &.ow-layout-has-sider {
        flex-direction: row;
    }
}
</style>