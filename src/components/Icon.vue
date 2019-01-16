<template>
    <svg v-if="name" class="ow-icon" :style="style">
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
            }
        },
        data() {
            return {
                style: {
                    fill: this.color
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .ow-icon { height: 1em; width: 1em }
</style>