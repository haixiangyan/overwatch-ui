<template>
    <div class="ow-carousel">
        <div class="ow-carousel-window">
            <div class="ow-carousel-items">
                <slot></slot>
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
        mounted() {
            this.updateCarouselItems()
            this.autoPlay()
        },
        updated() {
            this.updateCarouselItems()
        },
        methods: {
            autoPlay() {
                const names = this.$children.map(child => child.name)
                let selectedIndex = names.indexOf(this.getSelected())
                setTimeout(() => {
                    this.updatingSelected(names, selectedIndex)
                }, 3000)
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
                const names = this.$children.map(child => child.name)
                const selected = this.getSelected()
                const selectedIndex = names.indexOf(selected)
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
}
</style>