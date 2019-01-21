<template>
    <div class="ow-tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwTab",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(direction) {
                    return ['horizontal', 'vertical'].indexOf(direction) > -1
                }
            }
        }
        // created() {
        //     this.$emit('update:selected', 'xxx')
        // }
    }
</script>

<style scoped lang="scss">

</style>