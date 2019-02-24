<template>
    <div ref="parent"
         class="ow-scroll-wrapper"
         :style="wrapperStyles"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @wheel="onWheel"
         @mousemove="onMouseMove">
        <div ref="child" class="ow-scroll" :style="{transform: `translateY(${this.contentY}px)`}">
            <slot></slot>
        </div>
        <div class="ow-scroll-track" v-show="scrollBarVisible">
            <div class="ow-scroll-bar" ref="bar" @mousedown="onMouseDownScrollBar" @selectstart="onSelectStartScrollBar">
                <div class="ow-scroll-bar-inner"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwScroll",
        props: {
            height: {
                type: Number
            }
        },
        data () {
            return {
                scrollBarVisible: false,
                isScrolling: false,
                startPosition: undefined,
                endPosition: undefined,
                scrollBarY: 0,
                contentY: 0,
                barHeight: undefined,
                parentHeight: undefined,
                mouseIn: false,
            }
        },
        computed: {
            maxScrollHeight () {
                return this.parentHeight - this.barHeight
            },
            childHeight () { // 可以优化
                return this.$refs.child.getBoundingClientRect().height
            },
            wrapperStyles() {
                return {
                    height: this.height + 'px'
                }
            }
        },
        mounted () {
            this.listenToDocument()
            this.parentHeight = this.$refs.parent.getBoundingClientRect().height
            this.updateScrollBar()
            this.listenToRemoteResources()
            this.listenToDomChange()
        },
        beforeDestroy () {
            document.removeEventListener('mousemove', this.onMouseMoveScrollbar)
            document.removeEventListener('mouseup', this.onMouseUpScrollbar)
        },
        methods: {
            listenToRemoteResources () {
                let tags = this.$refs.parent.querySelectorAll('img, video, audio')
                Array.from(tags).map((tag) => {
                    if (tag.hasAttribute('data-ow-listened')) { return }
                    tag.setAttribute('data-ow-listened', 'yes')
                    tag.addEventListener('load', () => {
                        this.updateScrollBar()
                    })
                })
            },
            listenToDomChange () {
                const targetNode = this.$refs.child
                const config = {attributes: true, childList: true, subtree: true};
                const callback = () => {
                    this.listenToRemoteResources()
                }
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            },
            listenToDocument () {
                document.addEventListener('mousemove', this.onMouseMoveScrollbar)
                document.addEventListener('mouseup', this.onMouseUpScrollbar)
            },
            calculateContentYFromDeltaY (deltaY) {
                let contentY = this.contentY
                if (deltaY > 20) {
                    contentY -= 20 * 3
                } else if (deltaY < -20) {
                    contentY -= -20 * 3
                } else {
                    contentY -= deltaY * 3
                }
                return contentY
            },
            onWheel (e) {
                this.updateContentY(e.deltaY, () => e.preventDefault())
                this.updateScrollBar()
            },
            updateContentY (deltaY, fn) {
                let maxHeight = this.calculateContentYMax()
                this.contentY = this.calculateContentYFromDeltaY(deltaY)
                if (this.contentY > 0) {
                    this.contentY = 0
                } else if (this.contentY < -maxHeight) {
                    this.contentY = -maxHeight
                } else {
                    fn && fn()
                }
            },
            calculateContentYMax () {
                let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(this.$refs.parent)
                borderTopWidth = parseInt(borderTopWidth)
                borderBottomWidth = parseInt(borderBottomWidth)
                paddingTop = parseInt(paddingTop)
                paddingBottom = parseInt(paddingBottom)
                let maxHeight = this.childHeight - this.parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom)
                return maxHeight
            },
            updateScrollBar () {
                let parentHeight = this.parentHeight
                let childHeight = this.childHeight
                this.barHeight = parentHeight * parentHeight / childHeight
                this.$refs.bar.style.height = this.barHeight + 'px'
                this.scrollBarY = -parentHeight * this.contentY / childHeight
                this.$refs.bar.style.transform = `translateY(${this.scrollBarY}px)`;
            },
            onMouseEnter () {
                this.scrollBarVisible = true
                this.mouseIn = true
            },
            onMouseLeave () {
                this.mouseIn = false
                if (!this.isScrolling) this.scrollBarVisible = false;
            },
            onMouseMove () {
                this.mouseIn = true
            },
            onMouseDownScrollBar (e) {
                this.isScrolling = true
                let {screenX, screenY} = e
                this.startPosition = {x: screenX, y: screenY}
            },
            onMouseMoveScrollbar (e) {
                if (!this.isScrolling) { return }
                this.endPosition = {x: e.screenX, y: e.screenY}
                let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
                this.scrollBarY = this.calculateScrollBarY(delta)
                this.contentY = -(this.childHeight * this.scrollBarY / this.parentHeight)
                this.startPosition = this.endPosition
                this.$refs.bar.style.transform = `translate(0px,${this.scrollBarY}px)`
            },
            calculateScrollBarY (delta) {
                let newValue = parseInt(this.scrollBarY) + delta.y
                if (newValue < 0) {
                    newValue = 0
                } else if (newValue > this.maxScrollHeight) {
                    newValue = this.maxScrollHeight
                }
                return newValue
            },
            onMouseUpScrollbar (e) {
                this.isScrolling = false
                if (!this.mouseIn) {
                    this.scrollBarVisible = false
                }
            },
            onSelectStartScrollBar (e) {
                e.preventDefault()
            }
        }
    }
</script>

<style scoped lang="scss">
    .ow-scroll {
        transition: transform 0.05s ease;
        &-wrapper {
            overflow: hidden;
            position: relative;
        }
        &-track { position: absolute; top: 0; right: 0; width: 14px; height: 100%;
            background: #FAFAFA; border-left: 1px solid #E8E7E8; opacity: 0.9;
        }
        &-bar {
            position: absolute; top: -1px; left: 50%; height: 40px; width: 8px;
            margin-left: -4px; padding: 4px 0;
            &-inner {
                height: 100%; border-radius: 4px; background: #C2C2C2;
                &:hover {
                    background: #7D7D7D;
                }
            }
        }
    }
</style>
