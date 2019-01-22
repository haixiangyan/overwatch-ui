<template>
    <div class="ow-popover" @click.stop="onClick">
        <!--Content-->
        <span ref="contentWrapper" v-if="visible" class="ow-popover-content-wrapper">
            <slot name="content"></slot>
        </span>
        <!--Trigger-->
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
        mounted() {
            console.log(this.$refs.triggerWrapper)
        },
        methods: {
            onClick() {
                this.visible = !this.visible
                if (this.visible) {
                    // Avoid clicking twice
                    this.$nextTick(() => {
                        // Append content to document .body
                        document.body.appendChild(this.$refs.contentWrapper)
                        // Get button wrapper styles
                        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                        console.log(width, height, top, left)
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                        let eventHandler = () => {
                            this.visible = false
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
            border: 1px solid red;
            transform: translateY(-100%);
        }
    }
</style>