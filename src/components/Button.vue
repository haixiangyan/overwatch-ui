<template>
    <button class="ow-button" :class="{[`ow-icon-${icon.position}`]: true}">
        <svg v-if="icon.name" class="ow-icon">
            <use :xlink:href="`#icon-${icon.name}`"></use>
        </svg>
        <div class="ow-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        name: "ow-button",
        props: {
            icon: {
                type: Object,
                default: {name: '', position: 'none'}
            }
        }
    }
</script>

<style scoped lang="scss">
    .ow-button {
        @include hvFlexCenter(inline-flex);
        font-size: $--button-font-size;
        padding: $--button-padding-vertical $--button-padding-horizontal;
        color: $--button-warning-color;
        border-radius: $--border-radius-small;
        border: 1px solid transparent;
        background: $--button-warning-fill;
        opacity: $--default-opacity;
        outline: none;
        transition: all .5s;
        vertical-align: middle;
        &:hover, &:active {
            opacity: $--trigger-opacity;
            animation: button-breathe 1.5s infinite;
        }

        // Icon
        > .ow-icon { height: 1em; width: 1em; order: 1; margin-right: .3em; fill: $--button-icon-color; }
        // Content
        &-content { order: 2; }

        // Right position
        &.ow-icon-right {
            > .ow-button-content { order: 1; }
            > .ow-icon { order: 2; margin-left: .3em; margin-right: 0; }
        }
    }
</style>