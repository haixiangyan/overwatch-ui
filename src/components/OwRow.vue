<template>
    <div class="ow-row" :style="styles">
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
            }
        },
        mounted() {
            // Pass gutter to OwCol components
            this.$children.forEach((child) => {
                child.gutter = this.gutter
            })
        },
        computed: {
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
}
</style>