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
                <p><strong class="ow-toast-content-title">{{title}}</strong></p>
                <p class="ow-toast-content-message">{{message}}</p>
            </div>
        </div>
        <div v-if="!autoClose" class="ow-toast-cancel">
            <ow-button
                @click="onClickClose"
                class="ow-toast-cancel-button"
                :type="buttonType">{{closeButton.text}}
            </ow-button>
        </div>
    </div>
</template>

<script>
    import OwIcon from './OwIcon'
    import OwButton from './OwButton'
    export default {
        name: "OwToast",
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
            autoClose: {
                type: Boolean,
                default: false
            },
            autoCloseDelay: {
                type: Number,
                default: 3
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
                    'ow-toast-content-text',
                    `ow-toast-content-text-${this.type}`
                ]
            }
        },
        mounted() {
            this.execAutoClose()
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
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
.ow-toast {
    position: fixed;
    top: 30px;
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