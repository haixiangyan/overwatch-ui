<template>
    <div class="ow-sticky" ref="stickyWrapper" :style="wrapperStyles">
        <div class="ow-sticky-content" :style="contentStyles" :class="classes">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwSticky",
        props: {
            offsetTop: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                isSticky: false,
                top: null,
                left: null,
                width: null,
                height: null
            }
        },
        computed: {
            wrapperStyles() {
                return {
                    height: this.height + 'px'
                }
            },
            contentStyles() {
                return {
                    top: this.top + 'px',
                    width: this.width + 'px',
                    left: this.left + 'px'
                }
            },
            classes() {
                return {
                    sticky: this.isSticky
                }
            }
        },
        methods: {
            getOriginOffsetTop() {
                const {top} = this.$refs.stickyWrapper.getBoundingClientRect()
                return top + window.scrollY
            },
            onWindowScroll() {
                if (window.scrollY > this.getOriginOffsetTop() - this.offsetTop) {
                    const {left, width, height} = this.$refs.stickyWrapper.getBoundingClientRect()

                    this.setPosition(this.offsetTop, left, width, height)

                    this.isSticky = true
                }
                else {
                    this.setPosition(null, null, null, null)

                    this.isSticky = false
                }
            },
            setPosition(top, left, width, height) {
                this.top = top
                this.left = left
                this.width = width
                this.height = height
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onWindowScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.onWindowScroll)
        }
    }
</script>

<style scoped lang="scss">
.ow-sticky {
    border: 1px solid black;
    &-content.sticky {
        position: fixed;
        left: 0;
    }
}
</style>