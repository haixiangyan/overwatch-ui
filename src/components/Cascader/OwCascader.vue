<template>
    <div class="ow-cascader" ref="cascader" v-click-outside="close">
        <div class="ow-cascader-trigger" @click="togglePopover">
            <ow-input
                :placeholder="placeholder"
                :readonly="true"
                class="ow-cascader-input"
                :value="selectedValue">
            </ow-input>
        </div>
        <div v-show="isPopoverShow" class="ow-cascader-popover" :style="popoverStyles">
            <ow-cascader-list
                :selected="selected"
                @update:selected="onUpdateSelected"
                :on-click-item="onClickItem"
                :loading-item="loadingItem"
                :source="source">
            </ow-cascader-list>
        </div>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'
    import ClickOutside from '../../directives/ClickOutside'
    import OwInput from '../Input/OwInput'
    import OwCascaderList from './OwCascaderList'

    export default {
        name: "OwCascader",
        props: {
            selected: {
                type: Array,
                default: () => []
            },
            source: {
                type: Array
            },
            height: {
                type: [String, Number],
                default: 200
            },
            placeholder: {
                type: String
            },
            onClickItem: {
                type: Function
            }
        },
        data() {
            return {
                isPopoverShow: false,
                loadingItem: {}
            }
        },
        computed: {
            popoverStyles() {
                return {
                    height: `${this.height}px`
                }
            },
            selectedValue() {
                return this.selected.map((item) => item.name).join('/')
            }
        },
        directives: {
            ClickOutside
        },
        components: {
            OwCascaderList,
            OwInput
        },
        methods: {
            open() {
                this.isPopoverShow = true
            },
            close() {
                this.isPopoverShow = false
            },
            togglePopover() {
                if (this.isPopoverShow) {
                    this.close()
                }
                else {
                    this.open()
                }
            },
            onUpdateSelected(updatedSelected) {
                this.$emit('update:selected', updatedSelected)
                this.handleClickItem(updatedSelected)
            },
            handleClickItem(updatedSelected) {
                const clickedItem = updatedSelected[updatedSelected.length - 1]
                if (clickedItem.isLeaf || !this.onClickItem) {
                    return
                }
                let updateSource = (updatedChildren) => {
                    // Reset Loading
                    this.loadingItem = {}
                    // Update entire source
                    const sourceCopy = Utils.deepClone(this.source)
                    const toUpdate = Utils.findTreeNodeById({children: sourceCopy}, clickedItem.id)
                    toUpdate.children = updatedChildren
                    this.$emit('update:source', sourceCopy)
                }
                this.loadingItem = clickedItem
                this.onClickItem(clickedItem, updateSource)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-cascader {
    position: relative;
    display: inline-flex;
    &-input {
        opacity: $--more-opacity;
    }
    &-popover {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        background: $--color-bg-dark;
        color: $--color-text-dark;
        box-shadow: 0 1px 4px $--color-bg-dark;
        border-radius: $--border-radius-small;
        z-index: 1;
    }
}
</style>