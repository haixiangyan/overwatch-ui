<template>
    <div class="ow-nav" :class="{vertical: isVertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwNav",
        provide() {
            return {
                // Nav to be the root
                root: this,
                isVertical: this.isVertical
            }
        },
        props: {
            isVertical: {
                type: Boolean,
                default: false
            },
            selected: {
                type: String,
                default: ''
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
                    item.isActive = this.selected === item.name
                })
            },
            listenToItems() {
                this.items.forEach((item) => {
                    item.$on('update:selected', (name) => {
                        this.$emit('update:selected', name)
                    })
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-nav {
    display: flex;
    height: $--nav-height;
    background: $--nav-fill;
    margin-bottom: 4px;
    user-select: none;
    > .ow-nav-item {
        color: $--nav-header-item-color;
    }
    &.vertical {
        height: auto;
        flex-direction: column;
    }
}
</style>