<template>
    <button
        :class="classes"
        @click="$emit('click')">
        <ow-icon
            class="ow-button-icon"
            color="#fff"
            :is-loading="isLoading"
            :name="iconName">
        </ow-icon>
        <span class="ow-button-content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'

    export default {
        name: "OwButton",
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
            },
            type: {
                type: String,
                default: 'primary',
                validator(type) {
                    return ['primary', 'warning', 'danger', 'info', 'success'].indexOf(type) > -1
                }
            }
        },
        computed: {
            classes() {
                return [
                    'ow-button',
                    { [`ow-button-icon-${this.iconPosition}`]: true, },
                    `ow-button-${this.type}`
                ]
            }
        },
        components: {
            OwIcon
        }
    }
</script>

<style scoped lang="scss">
    .ow-button {
        @include hvFlexCenterMx(inline-flex);
        padding: $--button-padding;
        height: $--height-base;
        color: $--button-color;
        border: none;
        outline: none;
        border-radius: $--button-border-radius;
        background: $--button-default-fill;
        font-size: $--button-font-size;
        vertical-align: middle;
        transition: all .3s;
        &:hover {
            box-shadow: 0px 0px 2px 3px rgba(255, 255, 255, 1);
        }
        &:active {
            backface-visibility: hidden;
            transform: $--pressed-scale;
        }

        // Icon
        &-icon { height: 1em; width: 1em; order: 1}
        // Content
        &-content { order: 2; margin: 0 4px;}

        // Right position
        &-icon-right {
            > .ow-button-content { order: 1; }
            > .ow-button-icon { order: 2; }
        }

        // Types
        &-primary { background: $--button-primary-fill; }
        &-success { background: $--button-success-fill; }
        &-danger { background: $--button-danger-fill; }
        &-warning { background: $--button-warning-fill; }
        &-info { background: $--button-info-fill; }

        & + & {
            margin-left: 4px;
        }
    }
</style>