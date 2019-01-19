<template>
    <div class="ow-row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwRow"
    }
</script>

<style scoped lang="scss">
.ow-row {
    display: flex;
}
</style>