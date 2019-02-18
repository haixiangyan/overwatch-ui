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
                            :checked="areAllItemsSelected"
                            @change="onSelectAllItems">
                    </th>
                    <th v-if="isShowIndex">
                        #
                    </th>
                    <th :key="column.label" v-for="column in columns" @click="sort(column.field, sortRules[column.field])">
                        <div >
                            <span>{{column.label}}</span>
                            <span v-if="column.field in sortRules" class="ow-table-sort-indicator">
                                <ow-icon
                                    :class="{active: sortRules[column.field] === 'desc'}"
                                    size="10px"
                                    name="up-solid">
                                </ow-icon>
                                <ow-icon
                                    :class="{active: sortRules[column.field] === 'asc'}"
                                    size="10px"
                                    name="down-solid">
                                </ow-icon>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <!--Body-->
            <tbody>
                <tr :key="item.id" v-for="(item, index) in source">
                    <td>
                        <input
                            type="checkbox"
                            :checked="isItemSelected(item)"
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
        <transition name="fade">
            <div v-if="loading" class="ow-table-loading">
                <ow-icon name="loading" color="white" size="4em" :is-loading="true"></ow-icon>
            </div>
        </transition>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'
    import OwIcon from '../Icon/OwIcon'

    export default {
        name: "OwTable",
        props: {
            strip: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
                default: () => []
            },
            columns: {
                type: Array,
                required: true
            },
            sortRules: {
                type: Object,
                default: () => ({})
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
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onSelectItem(index, item, event) {
                let selectedCopy = Utils.deepClone(this.selected)
                if (event.target.checked) {
                    // Add this item to array
                    selectedCopy.push(item)
                }
                else {
                    // Remove this item from array
                    selectedCopy = selectedCopy.filter(i => i.id !== item.id)
                }

                this.$emit('update:selected', selectedCopy)
            },
            onSelectAllItems(event) {
                this.$emit('update:selected', event.target.checked ? this.source : [])
            },
            isItemSelected(item) {
                return this.selected.find(i => i.id === item.id)
            },
            sort(field, prevOrder) {
                const sortRulesCopy = Utils.deepClone(this.sortRules)
                if (prevOrder === 'asc') {
                    sortRulesCopy[field] = 'desc'
                }
                else if (prevOrder === 'desc') {
                    sortRulesCopy[field] = true
                }
                else {
                    sortRulesCopy[field] = 'asc'
                }
                this.$emit('update:sortRules', sortRulesCopy)
            }
        },
        computed: {
            areAllItemsSelected() {
                const sourceIds = this.source.map((item) => item.id).sort()
                const selectedIds = this.selected.map(item => item.id).sort()
                if (sourceIds.length !== selectedIds.length) {
                    return false
                }
                for (let i = 0; i < sourceIds.length; i++) {
                    if (sourceIds[i] !== selectedIds[i]) {
                        return false
                    }
                }
                return true
            }
        },
        watch: {
            selected() {
                this.$refs.allCheckbox.indeterminate = !(this.selected.length === this.source.length || this.selected.length === 0)
            }
        },
        components: {
            OwIcon
        }
    }
</script>

<style scoped lang="scss">
.ow-table-wrapper {
    opacity: $--more-opacity;
    position: relative;
    .ow-table-loading {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
    }
    .ow-table {
        width: 100%;
        color: $--color-white;
        border-collapse: separate;
        border-spacing: 0 4px;
        &-sort-indicator {
            margin-left: 4px;
            display: inline-flex;
            flex-direction: column;
            svg {
                fill: $--color-text-secondary;
                &.active {
                    fill: $--color-white;
                }
                &:first-child {
                    position: relative;
                    bottom: -1px;
                }
                &:last-child {
                    position: relative;
                    top: -1px;
                }
            }
        }
        thead {
            tr {
                background: $--color-opacity-primary;
                th {
                    padding: 8px;
                    text-align: left;
                    font-size: 1.2em;
                    transition: all .5s;
                    border: 1px solid transparent;
                    border-radius: $--border-radius-small;
                    > div {
                        display: flex;
                        align-items: center;
                    }
                    &:hover {
                        border: 1px solid white;
                        background: $--color-primary;
                    }
                }
            }
        }
        tbody {
            tr {
                padding: 4px;
                background: $--color-opacity-bg-dark;
                transition: all .5s;
                &:hover {
                    background: $--color-bg-dark;
                }
                td {
                    padding: 10px;
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
                        background: $--color-opacity-bg-shallow;
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