<template>
    <div ref="popover" class="ow-popover" @click="onPopoverClick">
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
        methods: {
            setContentPosition() {
                // Append content to document .body
                document.body.appendChild(this.$refs.contentWrapper)
                // Get button wrapper styles
                let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onDocClick(event) {
                // Click outside of OwPopover, then close it
                if (!this.$refs.contentWrapper.contains(event.target)) {
                    this.close()
                }
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    // Set content position
                    this.setContentPosition()
                    // Set event handler to listen to document click event
                    document.addEventListener('click', this.onDocClick)
                })
            },
            close() {
                this.visible = false
                // Remove event listener after closing OwPopover
                document.removeEventListener('click', this.onDocClick)
            },
            onPopoverClick(event) {
                // If click the trigger part
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible) {
                        this.close()
                    }
                    else {
                        this.open()
                    }
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