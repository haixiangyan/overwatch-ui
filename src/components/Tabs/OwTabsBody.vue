<template>
    <div class="ow-tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwTabsBody",
        inject: ['eventHub']
    }
</script>

<style scoped lang="scss">

</style>