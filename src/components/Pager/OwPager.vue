<template>
    <div class="ow-pager">
        <span v-for="page in pages" class="ow-pager-page" :class="{active: page === current}">
            {{page}}
        </span>
    </div>
</template>

<script>
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
            let pages = Utils.unique([
                1, this.total, this.current,
                this.current - 1, this.current - 2,
                this.current + 1, this.current + 2
            ]).sort((a, b) => a - b).reduce((prev, page, index, array) => {
                prev.push(page)
                index + 1 < array.length && array[index + 1] - array[index] > 1 && prev.push('...')
                return prev
            }, [])

            return {
                pages
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-pager {
    &-page {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 4px;
        padding: 4px;
        min-width: 26px;
        color: $--color-white;
        background: $--color-bg;
        text-align: center;
        user-select: none;
        border-radius: $--border-radius-base;
        transition: all .5s;
        &.active, &:hover {
            background: $--color-primary;
            box-shadow: 0 1px 4px $--color-primary;
        }
    }
}
</style>