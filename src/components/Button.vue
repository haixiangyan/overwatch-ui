<template>
    <button>寻找队伍</button>
</template>

<script>
    export default {
        name: "ow-button"
    }
</script>

<style scoped lang="scss">
    button {
        font-size: $--button-font-size;
        padding: $--button-padding-vertical $--button-padding-horizontal;
        color: $--button-warning-color;
        border-radius: $--border-radius-base;
        border: none;
        background: $--button-warning-fill;
        opacity: $--default-opacity;
        outline: none;
    }
</style>