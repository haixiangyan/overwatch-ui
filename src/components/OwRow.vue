<template>
    <div :style="styles" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwRow",
        props: {
            gutter: {
                type: [String, Number],
                default: 0
            },
            rowAlign: {
                type: String,
                validator(rowAlign) {
                    return ['left', 'right', 'center'].indexOf(rowAlign) > -1
                }
            }
        },
        mounted() {
            // Pass gutter to OwCol components
            this.$children.forEach((child) => {
                child.gutter = this.gutter
            })
        },
        computed: {
            classes() {
                return [
                    'ow-row',
                    this.rowAlign && `ow-row-align-${this.rowAlign}`
                ]
            },
            styles() {
                return {
                    marginLeft: `${-this.gutter / 2}px`,
                    marginRight: `${-this.gutter / 2}px`
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-row {
    display: flex;
    flex-wrap: wrap;

    &-align-left {
        justify-content: flex-start;
    }
    &-align-right {
        justify-content: flex-end;
    }
    &-align-center {
        justify-content: center;
    }
}
</style>