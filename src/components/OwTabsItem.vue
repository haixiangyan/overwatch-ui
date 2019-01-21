<template>
    <div class="ow-tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwTabsItem",
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">

</style>