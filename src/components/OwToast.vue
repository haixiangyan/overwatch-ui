<template>
    <div class="ow-toast">
        <div class="ow-toast-content">
            <span class="ow-toast-content-icon">
                <ow-icon
                    :name="iconName"
                    :is-loading="isLoading"
                    color="#ffffff">
                </ow-icon>
            </span>
            <div :class="textClasses">
                <p>
                    <strong><slot name="title"></slot></strong>
                </p>
                <p>
                    <slot name="message"></slot>
                </p>
            </div>
        </div>
        <div class="ow-toast-cancel">
            <ow-button class="ow-toast-cancel-button" :type="buttonType">CANCEL</ow-button>
        </div>
    </div>
</template>

<script>
    import OwIcon from './OwIcon'
    import OwButton from './OwButton'
    export default {
        name: "OwToast",
        props: {
            type: {
                type: String,
                default: 'info',
                validator(type) {
                    return ['info', 'danger', 'warning', 'success', 'loading'].indexOf(type) > -1
                }
            }
        },
        computed: {
            iconName() {
                const mapper = {
                    info: 'notification',
                    warning: 'warning',
                    danger: 'cancel',
                    success: 'check',
                    loading: 'loading'
                }
                return mapper[this.type]
            },
            isLoading() {
                return this.type === 'loading'
            },
            buttonType() {
                return ['loading', 'info'].includes(this.type) ? 'primary' : this.type
            },
            textClasses() {
                return [
                    'ow-toast-content-text',
                    `ow-toast-content-text-${this.type}`
                ]
            }
        },
        components: {
            OwIcon,
            OwButton
        }
    }
</script>

<style scoped lang="scss">
.ow-toast {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    &-content {
        display: flex;
        align-items: center;
        padding: 8px 6px;
        color: $--color-white;
        opacity: $--more-opacity;
        background: $--color-bg;
        &-icon, &-text {
            padding: 2px 8px;
        }
        &-icon {
            @include hvFlexCenterMx(flex);
        }
        &-text {
            display: inline;
            &-info, &-loading { border-left: 2px solid $--color-primary; }
            &-danger { border-left: 2px solid $--color-danger; }
            &-success { border-left: 2px solid $--color-success; }
            &-warning { border-left: 2px solid $--color-warning; }
        }
    }

    &-cancel-button {
        margin-top: 1px;
        width: 100%;
        font-size: $--font-size-mini;
        height: $--height-mini;
    }
}
</style>