<template>
    <div class="ow-alert">
        <div class="ow-alert-content">
            <span class="ow-alert-content-icon">
                <ow-icon
                    :name="iconName"
                    :is-loading="isLoading"
                    color="#ffffff">
                </ow-icon>
            </span>
            <div :class="textClasses">
                <p><strong class="ow-alert-content-title">{{title}}</strong></p>
                <p class="ow-alert-content-message">{{message}}</p>
            </div>
        </div>
        <div v-if="autoCloseDelay < 0" class="ow-alert-cancel">
            <ow-button
                @click="onClickClose"
                class="ow-alert-cancel-button"
                :type="buttonType">
                {{closeButton.text}}
            </ow-button>
        </div>
    </div>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'
    import OwButton from '../Button/OwButton'

    export default {
        name: "OwAlert",
        props: {
            title: {
                type: String,
                default: ''
            },
            message: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'info',
                validator(type) {
                    return ['info', 'danger', 'warning', 'success', 'loading'].indexOf(type) > -1
                }
            },
            autoCloseDelay: {
                type: Number,
                default: -1,
            },
            closeButton: {
                type: Object,
                default: () => {
                    return { text: 'CANCEL', callback: () => { } }
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
                    'ow-alert-content-text',
                    `ow-alert-content-text-${this.type}`
                ]
            }
        },
        mounted() {
            this.execAutoClose()
        },
        methods: {
            execAutoClose() {
                if (this.autoCloseDelay > 0) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                // Check if callback exist
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    // this -> OwToast Instance
                    this.closeButton.callback(this)
                }
            }
        },
        components: { OwIcon, OwButton }
    }
</script>

<style scoped lang="scss">
.ow-alert {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    animation: owAlert-slide-down .3s;

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
        &-title {
            font-size: 1.1em;
        }
        &-message {
            color: $--color-text-placeholder;
            font-size: 0.8em;
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