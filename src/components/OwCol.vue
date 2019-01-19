<template>
    <div class="ow-col" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwCol",
        props: {
            span: {
                type: [Number, String],
            },
            offset: {
                type: [Number, String],
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            classes() {
                return [
                    this.span && `ow-col-${this.span}`,
                    this.offset && `ow-col-offset-${this.offset}`
                ]
            },
            styles() {
                return {
                    paddingLeft: `${this.gutter / 2}px`,
                    paddingRight: `${this.gutter / 2}px`
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    // Grid System
    @include gridSpans;
    @include gridOffsets;
</style>