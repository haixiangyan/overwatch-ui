<template>
    <div class="ow-pager">
        <span class="ow-pager-item" :class="{disabled: current === 1}">
            <ow-icon name="left"></ow-icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page === current">
                <span class="ow-pager-item ow-pager-current">{{page}}</span>
            </template>
            <template v-else-if="page === '...'">
                <span class="ow-pager-separator">
                    <ow-icon name="more"></ow-icon>
                </span>
            </template>
            <template v-else>
                <span class="ow-pager-item ow-pager-indicator">{{page}}</span>
            </template>
        </template>
        <span class="ow-pager-item" :class="{disabled: current === total}">
            <ow-icon name="right"></ow-icon>
        </span>
    </div>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'
    import Utils from '../../assets/scripts/utils'

    export default {
        name: "OwPager",
        props: {
            total: {
                type: Number,
                required: true
            },
            current: {
                type: Number,
                required: true
            },
            hideOnSinglePage: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                pages: this.getPages()
            }
        },
        components: {
            OwIcon
        },
        methods: {
            getPages() {
                return Utils.unique([
                    1, this.total, this.current,
                    this.current - 1, this.current - 2,
                    this.current + 1, this.current + 2
                ])
                    .filter((page) => 1 <= page && page <= this.total)
                    .sort((prevPage, nextPage) => prevPage - nextPage)
                    .reduce((prev, page, index, array) => {
                        prev.push(page)
                        index + 1 < array.length && array[index + 1] - array[index] > 1 && prev.push('...')
                        return prev
                    }, [])
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-pager {
    display: flex;
    align-items: center;
    &-item {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 6px;
        padding: 4px;
        min-width: $--pagination-button-width;
        min-height: $--pagination-button-height;
        color: $--color-white;
        background: $--color-bg;
        text-align: center;
        user-select: none;
        border-radius: $--border-radius-base;
        transition: all .5s;
        svg {
            fill: $--color-white;
        }
        &.active, &:hover {
            background: $--color-primary;
            box-shadow: 0 1px 4px $--color-primary;
        }
        &.disabled {
            background: $--pagination-button-disabled-color;
            &.active, &:hover {
                box-shadow: none;
            }
        }
    }
    &-current {
        background: $--color-primary;
    }
    &-separator {
        display: flex;
        align-items: center;
        background: none;
        color: $--color-bg;
        svg {
            fill: $--color-bg;
            transition: all .5s;
        }
        &.active, &:hover {
            box-shadow: none;
            color: $--color-primary;
            svg {
                fill: $--color-primary;
            }
        }
    }
}
</style>