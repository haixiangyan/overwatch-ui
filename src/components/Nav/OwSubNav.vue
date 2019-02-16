<template>
    <div class="ow-sub-nav">
        <span @click="onClickTitle" class="ow-sub-nav-title">
            <slot name="title"></slot>
        </span>
        <div v-show ="isShow" class="ow-sub-nav-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwSubNav",
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            onClickTitle() {
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-sub-nav {
    position: relative;
    &-title {
        display: flex;
        padding: 10px 20px;
    }
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid green;
        white-space: nowrap;
    }
}
/*For Popover*/
.ow-sub-nav .ow-sub-nav .ow-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
}
</style>