<template>
    <svg
        v-if="name"
        @click="$emit('click', $event)"
        :class="classes"
        :style="styles">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    // Import icons svg
    import '../../assets/icons/index'

    export default {
        name: "OwIcon",
        props: {
            name: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: '#00000'
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: '1em'
            }
        },
        computed: {
            styles() {
                return {
                    fill: this.color,
                    width: this.size,
                    height: this.size
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
        display: inline-flex;
        align-items: center;
        justify-content: center;
        &_loading {
            animation: spin .5s infinite linear;
        }
    }
</style>