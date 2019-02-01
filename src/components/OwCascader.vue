<template>
    <div class="ow-cascader">
        <div class="ow-cascader-trigger" @click="this.togglePopover"></div>
        <div v-if="isPopoverShow" class="ow-cascader-popover" :style="popoverStyles">
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
            },
            height: {
                type: [String, Number],
                default: 200
            }
        },
        data() {
            return {
                isPopoverShow: true
            }
        },
        computed: {
            popoverStyles() {
                return {
                    height: `${this.height}px`
                }
            }
        },
        components: {
            OwCascaderList
        },
        methods: {
            togglePopover() {
                this.isPopoverShow = !this.isPopoverShow
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-cascader {
    position: relative;
    &-trigger {
        border: 1px solid red;
        height: $--input-height;
        width: 100px;
    }
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        background: $--color-bg-dark;
        color: $--color-text-dark;
        box-shadow: 0 1px 4px $--color-bg-dark;
        border-radius: $--border-radius-small;
        border: 1px solid $--color-bg;
    }
}
</style>