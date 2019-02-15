<template>
   <div class="ow-collapse-group">
       <slot></slot>
   </div>
</template>

<script>
    import Vue from 'vue'
    import Utils from '../../assets/scripts/utils'

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
                type: [Array]
            }
        },
        data() {
            return {
                eventHub: new Vue()
            }
        },
        mounted() {
            this.checkSelected()

            this.initSelected()

            this.bindUpdateSelected()
        },
        methods: {
            checkSelected() {
                if (this.multiSelect && this.multiSelect.length > 1) {
                    console.error('Single select mode should only contain 1 selected item')
                }
            },
            initSelected() {
                this.eventHub.$emit('update:selected', this.selected)
            },
            bindAddSelected() {
                this.eventHub.$on('add:selected', (name) => {
                    let selectedCopy = Utils.deepClone(this.selected)

                    // Add the selected item
                    selectedCopy = this.addSelectedItem(selectedCopy, name)

                    // Update selected items array
                    this.updateSelected(selectedCopy)
                })
            },
            bindRemoveSelected() {
                this.eventHub.$on('remove:selected', (name) => {
                    let selectedCopy = Utils.deepClone(this.selected)

                    // Remove the selected item
                    selectedCopy = this.removeSelectedItem(selectedCopy, name)

                    // Update selected items array
                    this.updateSelected(selectedCopy)
                })
            },
            bindUpdateSelected() {
                this.bindAddSelected()
                this.bindRemoveSelected()
            },
            updateSelected(selectedCopy) {
                this.$emit('update:selected', selectedCopy)
                this.eventHub.$emit('update:selected', selectedCopy)
            },
            addSelectedItem(selectedCopy, name) {
                if (this.multiSelect) {
                    selectedCopy.push(name)
                }
                else {
                    selectedCopy = [name]
                }
                return selectedCopy
            },
            removeSelectedItem(selectedCopy, name) {
                const index = selectedCopy.indexOf(name)
                selectedCopy.splice(index, 1)

                return selectedCopy
            }
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