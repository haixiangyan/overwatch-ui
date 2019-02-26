<template>
    <div class="ow-tabs-head">
        <slot></slot>

        <div class="ow-tabs-head-actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwTabsHead",
        inject: ['eventHub'],
    }
</script>

<style scoped lang="scss">
.ow-tabs-head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: $--tab-height;
    background: $--tab-bg;
    color: $--tab-header-color;
    font-size: $--tab-font-size;
    &-actions-wrapper {
        margin-left: auto;
        height: 100%;
    }
    // OwButton
    button {
        border-radius: 0;
        height: 100%;
    }
}
</style>