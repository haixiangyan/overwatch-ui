<template>
    <div class="ow-col" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwCol",
        props: {
            span: {
                type: [Number, String]
            }
        },
        computed: {
            classes() {
                return [`ow-col-${this.span}`]
            }
        }
    }
</script>

<style scoped lang="scss">
// Grid System
@include gridSystem;

.ow-col {
    height: 100px;
    width: 50%;
    background: $--color-warning;
    border: 1px solid $--border-color-light;
}
</style>