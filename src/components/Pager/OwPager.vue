<template>
    <div v-show="!(hideOnSinglePage && total <= 1)" class="ow-pager">
        <span class="ow-pager-item"
              :class="{disabled: current === 1}"
              @click="onClickPage(current -1)">
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
                <span class="ow-pager-item ow-pager-indicator" @click="onClickPage(page)">{{page}}</span>
            </template>
        </template>
        <span class="ow-pager-item"
              :class="{disabled: current === total}"
              @click="onClickPage(current + 1)">
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
        computed: {
            pages() {
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
        },
        components: {
            OwIcon
        },
        methods: {
            onClickPage(page) {
                if (1 <= page && page <= this.total) {
                    this.$emit('update:current', page)
                }
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
        min-width: $--pager-button-width;
        min-height: $--pager-button-height;
        color: $--pager-button-color;
        background: $--pager-button-fill;
        text-align: center;
        user-select: none;
        border-radius: $--pager-border-radius;
        transition: all .5s;
        svg {
            fill: $--pager-button-color;
        }
        &.active, &:hover {
            background: $--pager-hover-fill;
            box-shadow: 0 1px 4px $--pager-hover-fill;
        }
        &.disabled {
            background: $--pager-button-disabled-color;
            &.active, &:hover {
                box-shadow: none;
            }
        }
    }
    &-current {
        background: $--pager-button-fill;
    }
    &-separator {
        display: flex;
        align-items: center;
        background: none;
        color: $--pager-button-color;
        svg {
            fill: $--pager-button-color;
            transition: all .5s;
        }
        &.active, &:hover {
            box-shadow: none;
            color: $--pager-hover-color;
            svg {
                fill: $--pager-hover-color;
            }
        }
    }
}
</style>