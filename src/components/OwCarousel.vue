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
            }
        },
        mounted() {
            this.updateCarouselItems()
        },
        updated() {
            this.updateCarouselItems()
        },
        methods: {
            updateCarouselItems() {
                this.$children.forEach((child) => {
                    child.selected = this.selected || this.$children[0].name
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-carousel {
    display: inline-flex;
    border: 1px solid black;
    &-window {

    }
    &-items {
        position: relative;
    }
}
</style>