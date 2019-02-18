<template>
    <div class="ow-table-wrapper">
        <table class="ow-table" :class="{compact: isCompact, strip}">
            <!--Head-->
            <thead>
                <tr>
                    <th>
                        <input
                            ref="allCheckbox"
                            type="checkbox"
                            @change="onSelectAllItems">
                    </th>
                    <th v-if="isShowIndex">
                        #
                    </th>
                    <th :key="column.label" v-for="column in columns">
                        {{column.label}}
                    </th>
                </tr>
            </thead>
            <!--Body-->
            <tbody>
                <tr :key="item.id" v-for="(item, index) in source">
                    <td>
                        <input
                            type="checkbox"
                            :checked="isItemChecked(item)"
                            @change="onSelectItem(index, item, $event)">
                    </td>
                    <td v-if="isShowIndex">
                        {{index}}
                    </td>
                    <template v-for="column in columns">
                        <td :key="column.label">{{item[column.field]}}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'

    export default {
        name: "OwTable",
        props: {
            strip: {
                type: Boolean,
                default: false
            },
            selectedItems: {
                type: Array,
                default: () => []
            },
            columns: {
                type: Array,
                required: true
            },
            source: {
                type: Array,
                required: true,
                validator(array) {
                    return array.filter(item => item.id === undefined).length === 0
                }
            },
            isShowIndex: {
                type: Boolean,
                default: false
            },
            hasBorder: {
                type: Boolean,
                default: false
            },
            isCompact: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onSelectItem(index, item, event) {
                let selectedItemsCopy = Utils.deepClone(this.selectedItems)
                if (event.target.checked) {
                    // Add this item to array
                    selectedItemsCopy.push(item)
                }
                else {
                    // Remove this item from array
                    selectedItemsCopy = selectedItemsCopy.filter(i => i.id !== item.id)
                }

                this.$emit('update:selectedItems', selectedItemsCopy)
            },
            onSelectAllItems(event) {
                this.$emit('update:selectedItems', event.target.checked ? this.source : [])
            },
            isItemChecked(item) {
                return this.selectedItems.find(i => i.id === item.id)
            }
        },
        watch: {
            selectedItems() {
                if (this.selectedItems.length === this.source.length) {
                    this.$refs.allCheckbox.indeterminate = false
                    this.$refs.allCheckbox.checked = true
                }
                else if (this.selectedItems.length === 0) {
                    this.$refs.allCheckbox.indeterminate = false
                    this.$refs.allCheckbox.checked = false
                }
                else {
                    this.$refs.allCheckbox.indeterminate = true
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-table-wrapper {
    opacity: $--more-opacity;
    .ow-table {
        width: 100%;
        color: $--color-white;
        border-collapse: separate;
        border-spacing: 0 4px;
        thead {
            tr {
                background: $--color-opacity-primary;
                th {
                    padding: 8px;
                    text-align: left;
                    font-size: 1.2em;
                }
            }
        }
        tbody {
            tr {
                padding: 4px;
                background: $--color-opacity-bg-shallow;
                transition: all .5s;
                &:hover {
                    background: $--color-bg-dark;
                }
                td {
                    padding: 8px;
                }
            }
        }
        &.compact {
            td, th {
                padding: 4px;
            }
        }
        &.strip {
            tbody {
                tr {
                    &:nth-child(odd) {
                        background: $--color-opacity-bg-dark;
                    }
                    &:hover {
                        background: $--color-bg-dark;
                    }
                }
            }
        }
    }
}
</style>