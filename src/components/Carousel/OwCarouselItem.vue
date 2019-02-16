<template>
    <transition name="slide-left">
        <div class="ow-carousel-item" v-if="isOpen" :class="{reverse: isReverse}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "OwCarouselItem",
        props: {
            name: {
                type: [String, Boolean],
                required: true
            }
        },
        data() {
            return {
                selected: null,
                isReverse: false
            }
        },
        computed: {
            isOpen() {
                return this.selected === this.name
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-carousel-item {
}
</style>