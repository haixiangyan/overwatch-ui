<template>
    <div class="ow-sub-nav">
        <span @click="onClickTitle" class="ow-sub-nav-title">
            <slot name="title"></slot>
        </span>
        <div v-show="isShow" class="ow-sub-nav-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwSubNav",
        data() {
            return {
                isShow: false
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
        display: inline-flex;
        padding: 10px 20px;
        vertical-align: top;
    }
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid green;
        white-space: nowrap;
    }
}
</style>