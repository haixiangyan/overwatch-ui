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
            }
        },
        computed: {
            optionClasses() {
                return [ 'ow-option', { 'ow-option-disabled': this.disabled } ]
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-option {
    display: flex;
    align-items: center;
    height: $--input-height;
    padding: 0 4px;
    color: white;
    border-radius: 2px;
    &:hover {
        background: $--color-primary;
    }
    &-img {
        margin-right: 8px;
        height: 24px;
    }
}
</style>
