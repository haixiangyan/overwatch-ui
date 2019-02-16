<template>
    <div class="ow-nav">
        <slot></slot>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'

    export default {
        name: "OwNav",
        provide() {
            return {
                // Nav to be the root
                root: this
            }
        },
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
        data() {
            return {
                items: [],
                namePath: []
            }
        },
        mounted() {
            this.updateItems()

            this.listenToItems()
        },
        updated() {
            this.updateItems()
        },
        methods: {
            addItem(item) {
                this.items.push(item)
            },
            updateItems() {
                this.items.forEach((item) => {
                    item.isActive = this.selected.indexOf(item.name) > -1;
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
    color: $--color-primary;
    background: $--color-bg-shallow;
    margin-bottom: 4px;
    user-select: none;
}
</style>