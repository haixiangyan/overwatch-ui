<template>
    <div v-if="isOpen" class="ow-modal">
        <div class="ow-modal-content">
            <div class="ow-modal-content-main">
                <slot></slot>
            </div>
            <div class="ow-modal-content-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwModal",
        props: {
            isOpen: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
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
        p {
            text-align: center;
        }
        &-main{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: $--color-text-shallow;
        }
        &-main {
            padding: 16px 0;
            background: #263249;
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