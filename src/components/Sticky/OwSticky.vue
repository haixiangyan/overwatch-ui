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
            getOffsetTop() {
                const {top} = this.$refs.stickyWrapper.getBoundingClientRect()
                return top + window.scrollY
            },
        },
        mounted() {
            const offsetTop = this.getOffsetTop()
            window.addEventListener('scroll', () => {
                if (window.scrollY > offsetTop) {
                    console.log('Out of top')
                    const {height, width, left} = this.$refs.stickyWrapper.getBoundingClientRect()
                    this.height = height
                    this.width = width
                    this.left = left
                    // this.$refs.stickyWrapper.style.height = `${height}px`
                    this.isSticky = true
                }
                else {
                    console.log('No')
                    this.isSticky = false
                }
            })
        }
    }
</script>

<style scoped lang="scss">
.ow-sticky {
    border: 1px solid black;
    &-content.sticky {
        position: fixed;
        top: 0;
        left: 0;
    }
}
</style>