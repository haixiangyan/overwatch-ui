<template>
    <button class="ow-button">寻找队伍</button>
</template>

<script>
    export default {
        name: "ow-button"
    }
</script>

<style scoped lang="scss">

    .ow-button {
        font-size: $--button-font-size;
        padding: $--button-padding-vertical $--button-padding-horizontal;
        color: $--button-warning-color;
        border-radius: $--border-radius-small;
        border: 1px solid transparent;
        background: $--button-warning-fill;
        opacity: $--default-opacity;
        outline: none;
        transition: all .5s;
        &:hover, &:active {
            opacity: $--trigger-opacity;
            animation: button-breathe 1.5s infinite;
        }
    }
</style>