<template>
    <li :class="optionClasses"
        @click="$emit('click', $event)"
        :data-label="label"
        :data-value="value">
        {{label}}: {{value}}
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
    padding: 0 2px;
    color: white;
}
</style>
