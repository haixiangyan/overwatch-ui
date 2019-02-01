<template>
    <div class="ow-cascader-item">
        {{sourceItem.name}}
        <ow-cascader-item
            :source-item="item"
            v-if="sourceItem.children"
            v-for="item in sourceItem.children">
        </ow-cascader-item>
    </div>
</template>

<script>
    export default {
        name: 'OwCascaderItem',
        props: {
            sourceItem: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-cascader-item {
    padding: 10px;
    border: 1px solid red;
}
</style>