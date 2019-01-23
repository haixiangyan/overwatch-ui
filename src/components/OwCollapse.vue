<template>
    <div class="ow-collapse">
        <div class="ow-collapse-title" @click="open = !open">
            <span class="ow-collapse-title-text">{{title}}</span>
            <ow-button type="primary" class="ow-collapse-title-button" icon-name="add"></ow-button>
        </div>
        <div v-if="open" class="ow-collapse-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwCollapse",
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
.ow-collapse {
    &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $--color-text-shallow;
        height: $--height-base;
        width: 100%;
        &-text {
            flex-grow: 1;
            display: flex;
            align-items: center;
            padding-left: 10px;
            background: $--color-bg;
            height: 100%;
            opacity: $--less-opacity;
        }
        &-button {
            margin-left: 10px;
            border-radius: 0;
        }
    }
}
</style>