<template>
    <div class="ow-carousel">
        <div class="ow-carousel-window">
            <div class="ow-carousel-items">
                <slot></slot>
            </div>
            <div>
                <span
                    v-for="index in childrenLength"
                    @click="select(index - 1)"
                    class="ow-carousel-indicator"
                    :class="{active: selectedIndicator === index - 1}">
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
                childrenLength: 0
            }
        },
        computed: {
            names() {
                return this.$children.map(child => child.name)
            },
            selectedIndicator() {
                return this.names.indexOf(this.getSelected())
            }
        },
        mounted() {
            this.updateCarouselItems()
            this.autoPlay()
            this.childrenLength = this.$children.length
        },
        updated() {
            this.updateCarouselItems()
        },
        methods: {
            autoPlay() {
                let selectedIndex = this.names.indexOf(this.getSelected())
                setTimeout(() => {
                    this.updatingSelected(this.names, selectedIndex)
                }, 3000)
            },
            select(index) {
                this.$emit('update:selected', this.names[index])
            },
            updatingSelected(names, selectedIndex) {
                selectedIndex = selectedIndex - 1
                if (selectedIndex === names.length) {
                    selectedIndex = 0
                }
                if (selectedIndex === -1) {
                    selectedIndex = names.length - 1
                }
                this.$emit('update:selected', names[selectedIndex])

                setTimeout(() => {
                    this.updatingSelected(names, selectedIndex)
                }, 3000)
            },
            getSelected() {
                return this.selected || this.$children[0].name
            },
            updateCarouselItems() {
                const selected = this.getSelected()
                const selectedIndex = this.names.indexOf(selected)
                this.$children.forEach((child, index) => {
                    child.selected = selected
                    child.isReverse = index >= selectedIndex
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-carousel {
    width: 100%;
    display: flex;
    border: 1px solid black;
    &-window {
        width: 100%;
    }
    &-items {
        position: relative;
    }
    &-indicator {
        &.active {
            background: red;
        }
    }
}
</style>