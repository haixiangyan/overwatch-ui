<template>
    <div class="ow-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwCollapse"
    }
</script>

<style scoped lang="scss">
.ow-collapse {
    width: 100%;
    border: 1px solid red;
}
</style>