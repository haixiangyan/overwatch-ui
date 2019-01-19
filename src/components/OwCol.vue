<template>
    <div class="ow-col" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    let responsiveValidator = (layout) => {
        let keys = Object.keys(layout)
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                console.log(key)
                valid = false
            }
        })
        return valid
    }
    export default {
        name: "OwCol",
        props: {
            span: {
                type: [Number, String],
            },
            offset: {
                type: [Number, String],
            },
            phone: { type: Object, validator: responsiveValidator },
            tablet: { type: Object, validator: responsiveValidator }
        },
        data() {
            return { gutter: 0 }
        },
        computed: {
            classes() {
                return [
                    this.span && `ow-col-${this.span}`,
                    this.offset && `ow-col-offset-${this.offset}`,
                    this.phone && this.phone.span && `ow-col-phone-${this.phone.span}`,
                    this.phone && this.phone.offset && `ow-col-phone-offset-${this.phone.offset}`,
                    this.tablet && this.tablet.span && `ow-col-tablet-${this.tablet.span}`,
                    this.tablet && this.tablet.offset && `ow-col-tablet-offset-${this.tablet.offset}`
                ]
            },
            styles() {
                return {
                    paddingLeft: `${this.gutter / 2}px`,
                    paddingRight: `${this.gutter / 2}px`
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    // Grid System
    @include gridSpans;
    @include gridOffsets;

    @include phone {
        @include gridPhoneSpans;
        @include gridPhoneOffsets;
    }

    @include tablet {
        @include gridTabletSpans;
        @include gridTabletOffsets;
    }

    .ow-col {
        transition: all .3s;
    }
</style>