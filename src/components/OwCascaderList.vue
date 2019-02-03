<template>
    <div class="ow-cascader-list">
        <ul class="ow-cascader-list-left">
            <li class="ow-cascader-list-left-item"
                :class="{active: item.name === activeName}"
                v-for="(item, index) in source"
                :key="index"
                @click="selectLeftItem(item)">
                <span class="ow-cascader-list-left-item-text">{{item.name}}</span>
                <ow-icon
                    v-if="showIcon(item)"
                    name="right"
                    class="ow-cascader-list-left-item-icon">
                </ow-icon>
            </li>
        </ul>
        <section v-if="rightSource" class="ow-cascader-list-right">
            <ow-cascader-list
                :level="level + 1"
                :selected="selected"
                :on-click-item="onClickItem"
                @update:selected="onUpdateSelected"
                :source="rightSource">
            </ow-cascader-list>
        </section>
    </div>
</template>

<script>
    import Utils from '../assets/scripts/utils'
    import OwIcon from './OwIcon'

    export default {
        name: 'OwCascaderList',
        props: {
            source: {
                type: Array
            },
            selected: {
                type: Array,
                default: () => []
            },
            level: {
                type: Number,
                default: 0
            },
            onClickItem: {
                type: Function
            }
        },
        data() {
            return {
                activeName: ''
            }
        },
        computed: {
            rightSource() {
                // Use this.source to compute this property
                if (this.selected && this.selected[this.level]) {
                    const item = this.source.find((item) => item.name === this.selected[this.level].name)
                    if (item && item.children && item.children.length > 0) {
                        return item.children
                    }
                }
            },
        },
        methods: {
            selectLeftItem(item) {
                this.activeName = item.name
                let selectedCopy = Utils.deepClone(this.selected)
                // Update to current selected item
                selectedCopy[this.level] = item
                // Remove items after that selected item
                selectedCopy.splice(this.level + 1)
                this.$emit('update:selected', selectedCopy)
            },
            onUpdateSelected(updatedSelected) {
                this.$emit('update:selected', updatedSelected)
            },
            showIcon(item) {
                return this.onClickItem ? !item.isLeaf : item.children
            }
        },
        components: {
            OwIcon
        }
    }
</script>

<style scoped lang="scss">
.ow-cascader-list {
    display: flex;
    white-space: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    &-left {
        height: 100%;
        padding: .3em 0;
        overflow: auto;
        &-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 120px;
            padding: .3em .5em;
            margin: 0 .5em;
            transition: all .3s;
            border-radius: $--border-radius-small;
            border: 1px solid transparent;
            &-text {
                user-select: none;
            }
            svg {
                fill: $--color-text-dark;
            }

            &.active {
                border: 1px solid $--color-primary;
            }
            &:hover {
                background: $--color-primary;
                color: $--color-text-shallow;
                svg {
                    fill: $--color-text-shallow;
                }
            }
        }
    }
    &-right {
        height: 100%;
        border-left: 1px solid $--color-bg;
    }
}
</style>