<template>
    <div class="ow-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwButtonGroup",
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn(`ow-button-group component should have ow-button child, but detect <${name}>`)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .ow-button-group {
        display: inline-flex;
        > .ow-button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                margin-left: 0;
                border-top-left-radius: $--button-border-radius;
                border-bottom-left-radius: $--button-border-radius;
            }
            &:last-child {
                border-top-right-radius: $--button-border-radius;
                border-bottom-right-radius: $--button-border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>