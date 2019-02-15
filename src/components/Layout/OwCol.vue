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
            pc: { type: Object, validator: responsiveValidator },
            phone: { type: Object, validator: responsiveValidator },
            tablet: { type: Object, validator: responsiveValidator }
        },
        data() {
            return { gutter: 0 }
        },
        computed: {
            classes() {
                const devices = ['pc', 'tablet', 'phone']
                const classes = []
                devices.forEach((device) => {
                    if (this[device]) {
                        if (typeof this[device].span === 'number') {
                            classes.push(`ow-col-${device}-${this[device].span}`)
                        }
                        if (typeof this[device].offset === 'number') {
                            classes.push(`ow-col-${device}-offset-${this[device].offset}`)
                        }
                    }
                })
                return classes
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
    @include phone {
        @include gridPhoneSpans;
        @include gridPhoneOffsets;
    }

    @include tablet {
        @include gridTabletSpans;
        @include gridTabletOffsets;
    }

    @include pc {
        @include gridPcSpans;
        @include gridPcOffsets;
    }

    .ow-col {
        transition: all .3s;
    }
</style>