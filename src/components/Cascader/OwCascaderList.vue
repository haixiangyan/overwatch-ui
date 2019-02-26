<template>
    <div class="ow-cascader-list">
        <ul class="ow-cascader-list-left">
            <li class="ow-cascader-list-left-item"
                :class="{active: item.name === activeName}"
                v-for="(item, index) in source"
                :key="index"
                @click="selectLeftItem(item)">
                <span class="ow-cascader-list-left-item-text">{{item.name}}</span>
                <span class="ow-cascader-list-left-item-icons">
                    <template v-if="item.name === loadingItem.name">
                        <ow-icon name="loading" :is-loading="true"></ow-icon>
                    </template>
                    <template v-else>
                        <ow-icon v-if="showIcon(item)" name="right"></ow-icon>
                    </template>
                </span>
            </li>
        </ul>
        <section v-if="rightSource" class="ow-cascader-list-right">
            <ow-cascader-list
                :level="level + 1"
                :selected="selected"
                :on-click-item="onClickItem"
                @update:selected="onUpdateSelected"
                :loading-item="loadingItem "
                :source="rightSource">
            </ow-cascader-list>
        </section>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'
    import OwIcon from '../Icon/OwIcon'

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
            },
            loadingItem: {
                type: Object,
                default: () => ({})
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
            border-radius: $--cascader-menu-radius;
            border: 1px solid transparent;
            white-space: nowrap;
            &-text {
                user-select: none;
            }
            &-icons {
                @include hvFlexCenterMx(inline-flex);
                transform: scale(.9);
            }
            svg {
                fill: $--cascader-menu-color;
            }

            &.active {
                border: 1px solid $--color-primary;
            }
            &:hover {
                background: $--cascader-menu-option-fill-hover;
                color: $--cascader-menu-option-color-hover;
                svg {
                    fill: $--cascader-menu-option-color-hover
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