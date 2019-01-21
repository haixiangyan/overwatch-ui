<template>
    <div v-show="active" class="ow-tabs-pane" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwTabsPane",
        inject: ['eventHub'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        computed: {
            classes() {
                return { 'ow-tabs-pane_active': this.active }
            }
        },
        created() {
            this.eventHub.$on('update:selected', (name) => {
                this.active = (name === this.name)
            })
        }
    }
</script>

<style scoped lang="scss">
.ow-tabs-pane {
    &_active {
    }
}
</style>