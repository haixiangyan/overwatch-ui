<template>
    <div class="ow-cascader">
        <div class="ow-cascader-trigger" @click="isPopoverShow = !isPopoverShow"></div>
        <div class="ow-cascader-popover" v-if="isPopoverShow">
            <ow-cascader-list :source="source"></ow-cascader-list>
        </div>
    </div>
</template>

<script>
    import OwCascaderList from './OwCascaderList'

    export default {
        name: "OwCascader",
        props: {
            source: {
                type: Array
            }
        },
        data() {
            return {
                isPopoverShow: true
            }
        },
        components: {
            OwCascaderList
        }
    }
</script>

<style scoped lang="scss">
.ow-cascader {
    &-trigger {
        border: 1px solid red;
        height: $--input-height;
        width: 100px;
    }
    &-popover {
        border: 1px solid red;
        height: 200px;
    }
}
</style>