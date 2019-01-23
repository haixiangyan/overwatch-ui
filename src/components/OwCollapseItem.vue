<template>
    <div class="ow-collapse-item">
        <div class="ow-collapse-item-title" @click="open = !open">
            <span class="ow-collapse-item-title-text">{{title}}</span>
            <ow-button type="primary" class="ow-collapse-item-title-button" icon-name="add"></ow-button>
        </div>
        <div v-if="open" class="ow-collapse-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwCollapseItem",
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-collapse-item {
    &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $--color-text-shallow;
        height: 32px;
        &-text {
            display: flex;
            align-items: center;
            width: 97%;
            padding-left: 10px;
            background: $--color-bg;
            height: 100%;
            opacity: $--less-opacity;
        }
        &-button {
            height: 32px;
            width: 32px;
            padding: 0;
            border-radius: 0;
        }
    }
    &-content {
        color: $--color-white;
        margin-top: 10px;
        padding: 10px;
        background: $--color-bg;
        opacity: $--less-opacity;
    }
}
</style>