<template>
    <svg v-if="name" class="ow-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "ow-icon",
        props: {
            name: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .ow-icon { height: 1em; width: 1em }
</style>