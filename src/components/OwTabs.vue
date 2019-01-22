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
                type: [String, Number],
                required: true
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
            this.checkChildren()
            this.initActiveTab()
        },
        methods: {
            initActiveTab() {
                this.eventHub.$emit('update:selected', this.selected)
            },
            checkChildren() {
                if (this.$children.length === 0) {
                    console && console.warn && console.warn('OwTabs children should only be OwTabsHead or OwTabsBody')
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>