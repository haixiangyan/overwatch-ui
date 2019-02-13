<template>
    <div class="ow-carousel">
        <div class="ow-carousel-window">
            <div class="ow-carousel-items">
                <slot></slot>
            </div>
            <div>
                <span
                    v-for="index in childrenLength"
                    @click="selectItem(index - 1)"
                    class="ow-carousel-indicator"
                    :class="{active: selectedIndex === index - 1}">
                    {{index - 1}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwCarousel",
        props: {
            selected: {
                type: [String, Boolean]
            },
            isAutoPlay: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                childrenLength: 0,
                prevIndex: null
            }
        },
        computed: {
            names() {
                return this.$children.map(child => child.name)
            },
            selectedIndex() {
                return this.names.indexOf(this.getSelected())
            }
        },
        methods: {
            autoPlay() {
                let selectedIndex = this.names.indexOf(this.getSelected())
                setTimeout(() => {
                    this.updatingSelected(selectedIndex)
                }, 3000)
            },
            selectItem(index) {
                this.prevIndex = this.selectedIndex
                this.$emit('update:selected', this.names[index])
            },
            updatingSelected(selectedIndex) {
                selectedIndex = selectedIndex - 1
                if (selectedIndex === this.names.length) {
                    selectedIndex = 0
                }
                if (selectedIndex === -1) {
                    selectedIndex = this.names.length - 1
                }
                this.selectItem(selectedIndex)

                setTimeout(() => {
                    this.updatingSelected(selectedIndex)
                }, 3000)
            },
            getSelected() {
                return this.selected || this.$children[0].name
            },
            updateItems() {
                this.$children.forEach((child) => {
                    child.isReverse = this.selectedIndex <= this.prevIndex
                    this.$nextTick(() => {
                        child.selected = this.getSelected()
                    })
                })
            }
        },
        mounted() {
            this.updateItems()
            // this.autoPlay()
            this.childrenLength = this.$children.length
            this.prevIndex = this.selected
        },
        updated() {
            console.log('prevIndex', this.prevIndex, 'selectedIndex', this.selectedIndex)
            this.updateItems()
        },
    }
</script>

<style scoped lang="scss">
.ow-carousel {
    width: 100%;
    display: flex;
    border: 1px solid black;
    &-window {
        width: 100%;
    }
    &-items {
        position: relative;
    }
    &-indicator {
        &.active {
            background: red;
        }
    }
}
</style>