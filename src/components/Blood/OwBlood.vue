<template>
    <div class="ow-blood">
        <div class="title">{{total}}/{{residual !== undefined ? residual : total}}</div>
        <ul class="ow-blood-items" :style="{width: width + 'px'}" :gutter="1">
            <li class="ow-blood-item"
                :class="{out: item > residual / 25}"
                :style="itemStyles"
                v-for="item in itemNum"
                :key="item">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "OwBlood",
        props: {
            total: {
                type: Number,
                default: 200
            },
            width: {
                type: Number,
                default: 240
            },
            residual: {
                type: Number
            }
        },
        computed: {
            itemNum() {
                return this.total / 25
            },
            itemStyles() {
                return {
                    width: this.width / this.itemNum - 2 + 'px'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-blood {
    &-items {
        display: flex;
        height: 20px;
    }
}

.ow-blood-item {
    display: inline-flex;
    vertical-align: top;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    transform: skew(25rad);
    transition: all .5s;
    &.out {
        background: rgba(255, 255, 255, 0.5)
    }
    & + & {
        margin-left: 2px;
    }
}
</style>