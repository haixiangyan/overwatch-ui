<template>
    <svg
        v-if="name"
        :class="classes"
        :style="styles">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "ow-icon",
        props: {
            name: {
                type: String,
                required: true,
                default: 'setting'
            },
            color: {
                type: String,
                default: '#00000'
            },
            isLoading: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            styles() {
                return {
                    fill: this.color
                }
            },
            classes() {
                return [
                    'ow-icon',
                    {'ow-icon_loading': this.isLoading}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .ow-icon {
        height: 1em;
        width: 1em;
        &_loading {
            animation: spin .5s infinite linear;
        }
    }
</style>