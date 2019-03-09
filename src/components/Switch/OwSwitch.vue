<template>
    <div class="ow-switch">
        <ow-carousel :selected.sync="selected">
            <ow-carousel-item name="1">
                <div class="box">1</div>
            </ow-carousel-item>
            <ow-carousel-item name="2">
                <div class="box">2</div>
            </ow-carousel-item>
            <ow-carousel-item name="3">
                <div class="box">3</div>
            </ow-carousel-item>
        </ow-carousel>
    </div>
</template>

<script>
    import OwCarousel from '../Carousel/OwCarousel'
    import OwCarouselItem from '../Carousel/OwCarouselItem'
    export default {
        name: "OwSwitch",
        data() {
            return {
                selected: '1'
            }
        },
        components: {
            OwCarousel,
            OwCarouselItem
        }
    }
</script>

<style scoped lang="scss">
.ow-switch {
    border: 1px solid red;
}
</style>