<template>
    <div class="ow-scroll" ref="parent" :style="wrapperStyles" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="ow-scroll-child" ref="child">
            <slot></slot>
        </div>
        <transition name="fade">
            <div v-show="isShowScrollTrack" class="ow-scroll-track">
                <div class="ow-scroll-bar" :style="barStyles"></div>
            </div>
        </transition>
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
        data() {
            return {
                isShowScrollTrack: false,
                scrollBarHeight: 0,
                scrollBarTranslateY: 0
            }
        },
        computed: {
            wrapperStyles() {
                return {height: `${this.height}px`}
            },
            barStyles() {
                return {
                    height: `${this.scrollBarHeight}px`,
                    transform: `translateY(${this.scrollBarTranslateY}px)`
                }
            }
        },
        methods: {
            updateScrollBar(parentHeight, childHeight, translateY) {
                this.scrollBarHeight = parentHeight * parentHeight / childHeight
                this.scrollBarTranslateY = -(parentHeight * translateY / childHeight)
            },
            onMouseEnter() {
                this.isShowScrollTrack = true
            },
            onMouseLeave() {
                this.isShowScrollTrack = false
            }
        },
        mounted() {
            const parent = this.$refs.parent
            const child = this.$refs.child
            let translateY = 0
            const {height: childHeight} = child.getBoundingClientRect()
            const {height: parentHeight} = parent.getBoundingClientRect()
            const {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
            const maxHeight = parseInt(childHeight) - parseInt(parentHeight) + parseInt(borderTopWidth) + parseInt(borderBottomWidth) + parseInt(paddingTop) + parseInt(paddingBottom)
            parent.addEventListener('wheel', (event) => {
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
                this.updateScrollBar(parentHeight, childHeight, translateY)
            })

            this.updateScrollBar(parentHeight, childHeight, translateY)
        }
    }
</script>

<style scoped lang="scss">
.ow-scroll {
    border: 4px solid red;
    height: 400px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    &-track {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 8px;
        border-radius: $--border-radius-base;
        .ow-scroll-bar {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 100%;
            background: #7F7F7F;
            border-radius: $--border-radius-base;
        }
    }
}
</style>