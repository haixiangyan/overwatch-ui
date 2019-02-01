<template>
    <div class="ow-cascader">
        <div class="ow-cascader-trigger">
            <slot></slot>
        </div>
        <div class="ow-cascader-popover">
            <div v-for="item in source">
                <ow-cascader-item :source-item="item"></ow-cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
    import OwCascaderItem from './OwCascaderItem'

    export default {
        name: "OwCascader",
        props: {
            source: {
                type: Array
            }
        },
        components: {
            OwCascaderItem
        }
    }
</script>

<style scoped lang="scss">
.ow-cascader {
    background: $--color-bg-dark;
    color: $--color-primary;
}
</style>