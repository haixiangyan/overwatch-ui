<template>
    <div class="ow-slider">
        <input
            :min="min"
            :max="max"
            :value="value"
            @input="$emit('input', parseInt($event.target.value))"
            :style="inputStyles"
            class="ow-slider-input"
            type="range">
    </div>
</template>

<script>
    export default {
        name: "OwSlider",
        props: {
            width: {
                type: Number,
                default: 200
            },
            value: {
                type: Number,
                default: 0
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            }
        },
        computed: {
            inputStyles() {
                return { width: this.width + 'px' }
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-slider {
    display: inline-flex;
    background: transparent;
    @media screen and (-webkit-min-device-pixel-ratio:0) {
        &-input {
            -webkit-appearance: none;
            outline: none;
            border-radius: 10px;
            background: transparent;
        }

        &-input::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            height: 6px;
            background-color: $--color-primary;
            border-radius: 10px;
        }
        &-input::-moz-range-track {
            -moz-appearance: none;
            height: 6px;
            background: $--color-primary;
            border-radius: 10px;
        }
        &-input::-ms-track {
            height: 6px;
            background: $--color-primary;
            border-radius: 10px;
        }

        &-input::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            margin-top: -5px;
            border-radius: 50%;
            background: white;
        }
        &-input::-moz-range-thumb {
            -moz-appearance: none;
            width: 16px;
            height: 16px;
            margin-top: -5px;
            border-radius: 50%;
            background: white;
        }
        &-input::-ms-thumb {
            -moz-appearance: none;
            width: 16px;
            height: 16px;
            margin-top: -5px;
            border-radius: 50%;
            background: white;
        }
    }
}
</style>