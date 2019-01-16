<template>
    <button
        class="ow-button"
        :class="{[`ow-button-icon_${iconPosition}`]: true}"
        @click="$emit('click')">
        <ow-icon
            class="ow-button-icon"
            color="#fff"
            :is-loading="isLoading"
            :name="iconName">
        </ow-icon>
        <div class="ow-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './Icon'
    export default {
        name: "ow-button",
        props: {
            iconName: {
                type: String
            },
            iconPosition: {
                type: String,
                validator(iconPosition) {
                    return ['left', 'right'].indexOf(iconPosition) > -1
                }
            },
            isLoading: {
                type: Boolean,
                default: false
            }
        },
        components: {
            'ow-icon': Icon
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
        &-icon { height: 1em; width: 1em; order: 1; margin-right: .3em;}
        // Content
        &-content { order: 2; }

        // Right position
        &-icon_right {
            > .ow-button-content { order: 1; }
            > .ow-button-icon { order: 2; margin-left: .3em; margin-right: 0; }
        }
    }
</style>