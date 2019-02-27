<template>
    <div class="ow-blood">
        <div class="ow-blood-title">
            <span :style="{color: totalTextColor}" class="ow-blood-title-total">
                {{total}}
            </span>
            /
            <span :style="{color: residualTextColor}" class="ow-blood-title-residual">
                {{residual !== undefined ? residual : total}}
            </span>
        </div>
        <div class="ow-blood-items" :style="{width: width + 'px'}" :gutter="1">
            <span class="ow-blood-item"
                :style="getItemStyles(item)"
                v-for="item in itemNum"
                :key="item">
            </span>
        </div>
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
            },
            residualColor: {
                type: String,
                default: 'rgba(255, 255, 255, 0.8)'
            },
            goneColor: {
                type: String,
                default: 'rgba(255, 255, 255, 0.5)'
            },
            residualTextColor: {
                type: String,
                default: 'black'
            },
            totalTextColor: {
                type: String,
                default: 'black'
            }
        },
        computed: {
            itemNum() {
                return this.total / 25
            },
        },
        methods: {
            getItemStyles(item) {
                return {
                    width: this.width / this.itemNum - 2 + 'px',
                    background: (item >= this.residual / 25) ? this.goneColor : this.residualColor
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-blood {
    display: inline-block;
    vertical-align: top;
    &-title {
        &-total {
            font-size: 1.5em;
        }
    }
    &-items {
        display: flex;
        height: 20px;
    }
}

.ow-blood-item {
    display: inline-flex;
    vertical-align: top;
    height: 100%;
    transform: skew(25rad);
    transition: all .5s;
    border-radius: $--blood-border-radius;
    & + & {
        margin-left: 2px;
    }
}
</style>