<template>
    <div class="ow-switch">
        <div class="ow-switch-indicator" @click="prev">
            <ow-icon color="white" name="left"></ow-icon>
        </div>
        <div @click="next" class="ow-switch-window">
            <div class="ow-switch-wrapper">
                <ow-switch-item
                        v-for="option in options"
                        :value="value"
                        :is-reverse="isReverse"
                        :key="option.value"
                        :name="option.value">
                    <div class="ow-switch-item-content">{{option.label}}</div>
                </ow-switch-item>
            </div>
        </div>
        <div class="ow-switch-indicator" @click="next">
            <ow-icon color="white" name="right"></ow-icon>
        </div>
    </div>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'
    import OwSwitchItem from './OwSwitchItem'
    export default {
        name: "OwSwitch",
        props: {
            options: {
                type: Array,
                required: true
            },
            value: {
                type: [String, Number, Boolean],
                required: true
            }
        },
        data() {
            return {
                isReverse: false
            }
        },
        computed: {
            items() {
                return this.$children.filter((child) => child.$options.name === 'OwSwitchItem')
            },
            currentIndex() {
                for (let i = 0; i < this.options.length; i++) {
                    if (this.options[i].value === this.value) {
                        return i
                    }
                }
                return -1
            }
        },
        components: { OwIcon, OwSwitchItem },
        methods: {
            prev() {
                console.log(this.currentIndex);
                let prevIndex = this.currentIndex - 1
                if (prevIndex < 0) {
                    return
                }
                this.isReverse = true
                console.log(this.options[prevIndex].value, 'prev');
                this.$emit('input', this.options[prevIndex].value)
            },
            next() {
                let nextIndex = this.currentIndex + 1
                if (nextIndex === this.options.length) {
                    return
                }
                this.isReverse = false
                console.log(this.options[nextIndex].value, 'next');
                this.$emit('input', this.options[nextIndex].value)
            },
            updateItems() {
                this.items.forEach(item => {
                    item.value = this.value
                })
            }
        },
        mounted() {
            this.updateItems()
        },
        updated() {
            this.updateItems()
        },
    }
</script>

<style scoped lang="scss">
.ow-switch {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: $--input-height;
    background: $--color-opacity-primary;
    &-window {
        flex-grow: 1;
        height: 100%;
        overflow: hidden;
    }
    &-wrapper {
        position: relative;
        height: 100%;
    }
    &-item-content {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    &-indicator {
        padding: 0 4px;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
