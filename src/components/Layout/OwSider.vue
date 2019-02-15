<template>
    <div v-show="visible" class="ow-sider">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwSider",
        props: {
            visible: {
                type: Boolean,
                default: true
            }
        },
    }
</script>

<style scoped lang="scss">

</style>