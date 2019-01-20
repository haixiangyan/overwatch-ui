<template>
    <div class="ow-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwContent"
    }
</script>

<style scoped lang="scss">
.ow-content {
    flex-grow: 1;
}
</style>