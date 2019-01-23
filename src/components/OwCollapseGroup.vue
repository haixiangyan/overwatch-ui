<template>
   <div class="ow-collapse-group">
       <slot></slot>
   </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "OwCollapseGroup",
        provide() {
            return {
                eventHub: this.eventHub
            }
        },
        props: {
            multiSelect: {
                type: Boolean,
                default: true
            },
            selected: {
                type: [String, Number]
            }
        },
        data() {
            return {
                eventHub: new Vue()
            }
        },
        mounted() {
            this.eventHub.$emit('update:selected', this.selected)
            this.eventHub.$on('update:selected', (name) => {
                this.$emit('update:selected', name)
            })
        }
    }
</script>

<style scoped lang="scss">
.ow-collapse-group {
    > div {
        margin: 10px;
    }
}
</style>