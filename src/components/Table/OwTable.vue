<template>
    <div ref="wrapper" class="ow-table-wrapper">
        <div :style="{height: height + 'px', overflow: 'auto'}" ref="content">
            <table ref="table" class="ow-table" :class="{compact: isCompact, strip}">
                <!--Head-->
                <thead>
                <tr>
                    <th v-if="expandField" :style="{width: '50px'}"></th>
                    <th v-if="selectable" class="ow-table-center" :style="{width: '50px'}" >
                        <input
                            ref="allCheckbox"
                            type="checkbox"
                            :checked="areAllItemsSelected"
                            @change="onSelectAllItems">
                    </th>
                    <th class="ow-table-center" :style="{width: '50px'}" v-if="isShowIndex">
                        #
                    </th>
                    <th :style="{width: column.width + 'px'}"
                        :key="column.label"
                        v-for="column in columns"
                        @click="sort(column.field, sortRules[column.field])">
                        <div>
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
                    <th ref="actionsTh" v-if="$scopedSlots.default"></th>
                </tr>
                </thead>
                <!--Body-->
                <tbody>
                    <template v-for="(item, index) in source">
                        <tr :key="item.id" >
                            <td v-if="expandField" class="ow-table-expander ow-table-center"
                                :class="{expanded: isItemExpanded(item.id)}"
                                @click="toggleExpandItem(item.id)"
                                :style="{width: '50px'}">
                                <ow-icon name="right" size=".8em" color="white"></ow-icon>
                            </td>
                            <td v-if="selectable" :style="{width: '50px'}" class="ow-table-center">
                                <input
                                    type="checkbox"
                                    :checked="isItemSelected(item)"
                                    @change="onSelectItem(index, item, $event)">
                            </td>
                            <td class="ow-table-center" :style="{width: '50px'}" v-if="isShowIndex">
                                {{index}}
                            </td>
                            <template v-for="column in columns">
                                <td :style="{width: column.width + 'px'}" :key="column.label">{{item[column.field]}}</td>
                            </template>
                            <td v-if="$scopedSlots.default">
                                <div class="ow-table-actions" ref="actions">
                                    <slot :item="item"></slot>
                                </div>
                            </td>
                        </tr>
                        <transition name="slide-down">
                            <tr v-if="isItemExpanded(item.id)" :key="`${item.id}-expand`">
                                <td :colspan="expandedColspan">
                                    {{item[expandField]}}
                                </td>
                            </tr>
                        </transition>
                    </template>
                </tbody>
            </table>
        </div>
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
            selectable: {
                type: Boolean,
                default: false
            },
            height: {
                type: Number
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
            isCompact: {
                type: Boolean,
                default: false
            },
            expandField: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                expandedItems: []
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
            },
            expandedColspan() {
                let colspan = this.columns.length
                if (this.selectable) {
                    colspan += 1
                }
                if (this.expandField) {
                    colspan += 1
                }
                if (this.$scopedSlots.default) {
                    colspan += 1
                }
                return colspan
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
            },
            resizeTable(thead) {
                // Set margin top
                let {height} = thead.getBoundingClientRect()
                this.$refs.content.style.marginTop = height + 'px'
                // Set content height
                this.$refs.content.style.height = this.height - height + 'px'
            },
            copyTable() {
                this.tableCopy = this.$refs.table.cloneNode(false)
                // Add copy class name
                this.tableCopy.classList.add('ow-table-copy')
            },
            fixTHead() {
                // Get a new table copy
                this.copyTable()

                // Get thead
                const thead = this.$refs.table.children[0]

                this.resizeTable(thead)

                // Append previous thead to new table
                this.tableCopy.appendChild(thead)

                // Append new table to wrapper
                this.$refs.wrapper.appendChild(this.tableCopy)
            },
            toggleExpandItem(id) {
                if (this.isItemExpanded(id)) {
                    this.expandedItems.splice(this.expandedItems.indexOf(id), 1)
                }
                else {
                    this.expandedItems.push(id)
                }
            },
            isItemExpanded(id) {
                return this.expandedItems.indexOf(id) >= 0
            },
            setActionsWidth() {
                if (this.$scopedSlots.default) {
                    // Get the one of actions element
                    let firstActions = this.$refs.actions[0]

                    // Get styles and compute its width
                    let {width} = firstActions.getBoundingClientRect()
                    let styles = getComputedStyle(firstActions.parentNode)
                    let { paddingLeft, paddingRight, borderLeft, borderRight } = styles
                    let computedWidth = parseInt(width) + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px'

                    // Assign new computed width to th and div
                    this.$refs.actionsTh.style.width = computedWidth
                    this.$refs.actions.map((div) => {
                        div.parentNode.style.width = computedWidth
                    })
                }
            }
        },
        watch: {
            selected() {
                this.$refs.allCheckbox.indeterminate = !(this.selected.length === this.source.length || this.selected.length === 0)
            }
        },
        components: {
            OwIcon
        },
        mounted() {
            this.fixTHead()

            this.setActionsWidth()
        },
        beforeDestroy() {
            this.tableCopy.remove()
        }
    }
</script>

<style scoped lang="scss">
.ow-table-wrapper {
    opacity: $--more-opacity;
    position: relative;
    overflow: auto;
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
        &-copy {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
        &-expander {
            svg {
                transition: all .5s;
            }
            &.expanded {
                svg {
                    transform: rotate(90deg);
                }
            }
        }
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
        &-actions {
            display: inline-flex;
        }
        & .ow-table-center {
            text-align: center;
        }
    }
}
</style>