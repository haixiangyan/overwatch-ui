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
        height: $--tab-height;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        transition: all .5s;
        &:hover {
            color: $--color-white;
            background: $--color-primary;
        }
    }
    &-popover {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        background: $--color-bg-dark;
        color: $--color-text-placeholder;
        white-space: nowrap;
        box-shadow: 0 1px 4px $--color-bg-dark;
        border-radius: $--border-radius-small;
    }
}
/*For Popover*/
.ow-sub-nav .ow-sub-nav .ow-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 4px;
}
</style>