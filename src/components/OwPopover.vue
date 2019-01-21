<template>
    <div class="ow-popover" @click.stop="onClick">
        <div v-if="visible" class="ow-popover-content-wrapper" @click.stop>
            <slot name="content"></slot>
        </div>
        <!--Trigger-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwPopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            onClick() {
                this.visible = !this.visible
                if (this.visible) {
                    // Avoid clicking twice
                    this.$nextTick(() => {
                        console.log('add')
                        let eventHandler = () => {
                            this.visible = false
                            console.log('document hide')
                            // Remove event listener after closing OwPopover
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
                }
                else {
                    console.log('vm hide')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .ow-popover {
        position: relative;
        display: inline-block;
        vertical-align: top;

        &-content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
        }
    }
</style>