<template>
    <svg v-if="name" class="ow-icon" :class="classes" :style="styles">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "ow-icon",
        props: {
            name: {
                type: String
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
        data() {
            return {
                styles: {
                    fill: this.color
                },
                classes: [
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