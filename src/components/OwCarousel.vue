<template>
    <div class="ow-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="ow-carousel-window">
            <div class="ow-carousel-items">
                <slot></slot>
            </div>
            <div class="ow-carousel-indicators">
                <span
                    v-for="index in childrenLength"
                    @click="selectItem(index - 1)"
                    class="indicator"
                    :class="{active: selectedIndex === index - 1}">
                    {{index}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwCarousel",
        props: {
            selected: {
                type: [String, Boolean]
            },
            isAutoPlay: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                childrenLength: 0,
                prevIndex: null,
                timerId: null
            }
        },
        computed: {
            names() {
                return this.$children.map(child => child.name)
            },
            selectedIndex() {
                return this.names.indexOf(this.getSelected())
            },
            isReverse() {
                let isReverse = this.selectedIndex <= this.prevIndex
                if (this.timerId) {
                    if (this.prevIndex === this.$children.length - 1 && this.selectedIndex === 0) {
                        isReverse = false
                    }
                    if (this.prevIndex === 0 && this.selectedIndex === this.$children.length - 1) {
                        isReverse = true
                    }
                }
                return isReverse
            }
        },
        methods: {
            autoPlay() {
                if (this.timerId) {
                    return
                }
                this.timerId = setTimeout(() => {
                    this.updatingSelected()
                }, 3000)
            },
            selectItem(index) {
                this.prevIndex = this.selectedIndex
                this.$emit('update:selected', this.names[index])
            },
            updatingSelected() {
                let selectedIndex = this.names.indexOf(this.getSelected())
                selectedIndex = selectedIndex - 1
                if (selectedIndex === this.names.length) {
                    selectedIndex = 0
                }
                if (selectedIndex === -1) {
                    selectedIndex = this.names.length - 1
                }
                // Emit event for info new index
                this.selectItem(selectedIndex)

                this.timerId = setTimeout(() => {
                    this.updatingSelected()
                }, 3000)
            },
            pause() {
                // Stop animation
                window.clearTimeout(this.timerId)
                // Remove timer ID
                this.timerId = null
            },
            onMouseEnter() {
                this.pause()
            },
            onMouseLeave() {
                this.autoPlay()
            },
            getSelected() {
                return this.selected || this.$children[0].name
            },
            updateItems() {
                this.$children.forEach((child) => {
                    child.isReverse = this.isReverse
                    this.$nextTick(() => {
                        child.selected = this.getSelected()
                    })
                })
            }
        },
        mounted() {
            this.updateItems()
            this.autoPlay()
            this.childrenLength = this.$children.length
            this.prevIndex = this.selected
        },
        updated() {
            this.updateItems()
        },
    }
</script>

<style scoped lang="scss">
.ow-carousel {
    width: 100%;
    display: flex;
    &-window {
        width: 100%;
    }
    &-items {
        position: relative;
    }
    &-indicators {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 0;
        .indicator {
            margin: 0 8px;
            display: inline-flex;
            width: 20px;
            height: 20px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: $--color-text-secondary;
            font-size: .9em;
            color: white;
            &:hover {
            }
            &.active {
                background: $--color-bg-dark;
            }
        }
    }
}
</style>