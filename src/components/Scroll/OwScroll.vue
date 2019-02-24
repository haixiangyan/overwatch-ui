<template>
    <div class="ow-scroll" ref="parent" :style="wrapperStyles">
        <div class="ow-scroll-child" ref="child">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwScroll",
        props: {
            height: {
                type: Number,
                default: null
            }
        },
        computed: {
            wrapperStyles() {
                return {height: `${this.height}px`}
            }
        },
        mounted() {
            const parent = this.$refs.parent
            const child = this.$refs.child
            let translateY = 0
            console.log(translateY)
            const {height: childHeight} = child.getBoundingClientRect()
            const {height: parentHeight} = parent.getBoundingClientRect()
            const {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
            const maxHeight = parseInt(childHeight) - parseInt(parentHeight) + parseInt(borderTopWidth) + parseInt(borderBottomWidth) + parseInt(paddingTop) + parseInt(paddingBottom)
            function onScroll(event) {
                // If there's no vertical movement
                if (event.deltaY === 0) {
                    return
                }

                // Calculate current position
                translateY = translateY - event.deltaY

                // Check edge case
                if (translateY > 0) {
                    translateY = 0
                }
                else if (translateY < -maxHeight) {
                    translateY = -maxHeight
                }
                else {
                    event.preventDefault()
                }

                // Update style
                child.style.transform = `translateY(${translateY}px)`
            }
            parent.addEventListener('wheel', onScroll)
        }
    }
</script>

<style scoped lang="scss">
.ow-scroll {
    border: 4px solid red;
    height: 400px;
    overflow: hidden;
    box-sizing: border-box;
    &-child {
        border: 4px solid green;
    }
}
</style>