<template>
    <div class="ow-cascader-list">
        <ul class="ow-cascader-list-left">
            <li class="ow-cascader-list-left-item"
                v-for="item in source"
                :key="item.name"
                @click="selectLeftItem(item)">
                <span>{{item.name}}</span>
                <ow-icon v-if="item.children" name="right"></ow-icon>
            </li>
        </ul>
        <section v-if="rightSource" class="ow-cascader-list-right">
            <ow-cascader-list
                :level="level + 1"
                :selected="selected"
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
            }
        },
        methods: {
            selectLeftItem(item) {
                let selectedCopy = Utils.deepClone(this.selected)
                // Update to current selected item
                selectedCopy[this.level] = item
                // Remove items after that selected item
                selectedCopy.splice(this.level + 1)
                this.$emit('update:selected', selectedCopy)
            },
            onUpdateSelected(updatedSelected) {
                this.$emit('update:selected', updatedSelected)
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
            justify-content: space-between;
            align-items: center;
            width: 120px;
            padding: .3em .5em;
            margin: 0 .5em;
            transition: all .3s;
            border-radius: $--border-radius-small;
            border: 1px solid transparent;
            svg {
                fill: $--color-text-dark;
            }
            &.selected {
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