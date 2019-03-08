<template>
    <li :class="optionClasses"
        @click="$emit('click', $event)"
        :data-label="label"
        :data-value="value">
        <img class="ow-option-img" v-if="imgUrl" :src="imgUrl" alt="img">
        {{label}}
    </li>
</template>

<script>
    export default {
        name: "OwOption",
        props: {
            label: {
                type: String,
                required: true
            },
            value: {
                type: [String, Number, Boolean, Object],
                required: true
            },
            imgUrl: {
                type: String
            },
            disabled: {
                type: Boolean,
                required: false
            },
            selected: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            optionClasses() {
                return [
                    'ow-option',
                    {
                        'ow-option-disabled': this.disabled,
                        'ow-option-selected': this.selected
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-option {
    display: flex;
    align-items: center;
    height: $--select-option-height;
    padding: 0 4px;
    color: $--select-option-color;
    border-radius: 2px;
    &:hover {
        background: $--select-option-hover-background
    }
    &-disabled {
        color: $--select-option-disabled-color;
        &:hover {
            background: none;
        }
    }
    &-img {
        margin-right: 8px;
        height: 24px;
    }
}
</style>
