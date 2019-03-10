<template>
    <transition name="fade">
        <div v-if="isOpen" class="ow-modal" @click="close">
            <div class="ow-modal-content" @click.stop>
                <div class="ow-modal-content-header">
                    <slot name="header"></slot>
                </div>
                <div class="ow-modal-content-main">
                    <slot></slot>
                </div>
                <div class="ow-modal-content-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import Utils from '../../assets/scripts/utils'
    import ClickOutside from '../../directives/ClickOutside'

    export default {
        name: "OwModal",
        props: {
            isOpen: {
                type: Boolean,
                default: false
            },
            isFixed: {
                type: Boolean,
                default: true
            }
        },
        directives: {
            ClickOutside
        },
        watch: {
            isOpen(newIsOpen) {
                if (newIsOpen && this.isFixed) {
                    Utils.disableScroll()
                }
                else {
                    Utils.enableScroll()
                }
            }
        },
        methods: {
            close() {
                this.$emit('update:isOpen', false)
            }
        },
        mounted() {
            if (this.isOpen && this.isFixed) {
                Utils.disableScroll()
            }
        },
        beforeDestroy() {
            enableScroll()
        }
    }
</script>

<style scoped lang="scss">
.ow-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    &-content {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        background: #263249;
        p {
            text-align: center;
        }
        &-header {
            font-size: 3em;
            text-align: center;
            color: white;
            padding-top: 16px;
        }
        &-main{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 12px 0;
            color: $--color-text-shallow;
        }
        &-footer {
            padding: 16px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #1F2734;
        }
    }
}
</style>