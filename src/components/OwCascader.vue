<template>
    <div class="ow-cascader">
        <div class="ow-cascader-trigger" @click="togglePopover">
            <ow-input
                :placeholder="placeholder"
                :disabled="isInputDisabled"
                class="ow-cascader-input"
                :value="selectedValue">
            </ow-input>
        </div>
        <div v-if="isPopoverShow" class="ow-cascader-popover" :style="popoverStyles">
            <ow-cascader-list
                :selected="selected"
                @update:selected="onUpdateSelected"
                :on-click-item="onClickItem"
                :source="source">
            </ow-cascader-list>
        </div>
    </div>
</template>

<script>
    import Utils from '../assets/scripts/utils'
    import OwInput from './OwInput'
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
                isPopoverShow: true,
                isInputDisabled: false
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
        components: {
            OwCascaderList,
            OwInput
        },
        methods: {
            togglePopover() {
                this.isPopoverShow = !this.isPopoverShow
                this.isInputDisabled = this.isPopoverShow
            },
            onUpdateSelected(updatedSelected) {
                this.$emit('update:selected', updatedSelected)
                this.handleClickItem(updatedSelected)
            },
            handleClickItem(updatedSelected) {
                const clickedItem = updatedSelected[updatedSelected.length - 1]
                if (clickedItem.isLeaf) {
                    return
                }
                let updateSource = (updatedChildren) => {
                    const sourceCopy = Utils.deepClone(this.source)
                    const toUpdate = Utils.findTreeNodeById({children: sourceCopy}, clickedItem.id)
                    toUpdate.children = updatedChildren
                    this.$emit('update:source', sourceCopy)
                }
                this.onClickItem && this.onClickItem(clickedItem, updateSource)
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
    }
}
</style>