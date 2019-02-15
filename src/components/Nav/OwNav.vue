<template>
    <div class="ow-nav">
        <slot></slot>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'

    export default {
        name: "OwNav",
        props: {
            selected: {
                type: Array,
                default: () => []
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.updateItems()

            this.listenToItems()
        },
        updated() {
            this.updateItems()
        },
        computed: {
            items() {
                return this.$children.filter((child) => child.$options.name === 'OwNavItem')
            }
        },
        methods: {
            updateItems() {
                this.items.forEach((item) => {
                    item.active = this.selected.indexOf(item.name) > -1;
                })
            },
            listenToItems() {
                this.items.forEach((item) => {
                    item.$on('add:selected', (name) => {
                        if (!this.multiple) {
                            this.$emit('update:selected', [name])
                            return
                        }
                        // Multiple and name is for new item
                        if (this.selected.indexOf(name) < 0) {
                            let selectedCopy = Utils.deepClone(this.selected).push(name)
                            this.$emit('update:selected', selectedCopy)
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-nav {
    display: flex;
    border: 1px solid red;
}
</style>