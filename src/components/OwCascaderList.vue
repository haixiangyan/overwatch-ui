<template>
    <div class="ow-cascader-item">
        <div class="ow-cascader-item-left">
            <div class="label" v-for="item in source" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div v-if="rightSource" class="ow-cascader-item-right">
            <ow-cascader-list :source="rightSource"></ow-cascader-list>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OwCascaderList',
        props: {
            source: {
                type: Array
            }
        },
        data() {
            return {
                leftSelected: null
            }
        },
        computed: {
            rightSource() {
                return this.leftSelected && this.leftSelected.children ? this.leftSelected.children : null
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-cascader-item {
    display: flex;
    white-space: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    &-left {
        border: 1px solid red;
    }
    &-right {
    }
}
</style>