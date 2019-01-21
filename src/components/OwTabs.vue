<template>
    <div class="ow-tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
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
        },
        data() {
            return {
                eventHub: new Vue()
            }
        },
        provide() {
            return {
                eventHub: this.eventHub
            }
        },
        mounted() {
            this.eventHub.$emit('update:selected', this.selected)
        }
    }
</script>

<style scoped lang="scss">

</style>