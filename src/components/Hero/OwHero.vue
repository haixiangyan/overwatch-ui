<template>
    <div class="ow-hero" :class="heroClasses">
        <div class="ow-hero-avatar" :class="avatarClasses" :style="avatarStyles"></div>
    </div>
</template>

<script>
    export default {
        name: "OwHero",
        props: {
            hero: {
                type: String,
            },
            size: {
                type: String,
                validator(size) {
                    return ['small', 'middle', 'large'].includes(size)
                }
            },
            isActive: {
                type: Boolean,
                default: false
            },
            url: {
                type: String
            }
        },
        computed: {
            heroClasses() {
                return {active: this.isActive}
            },
            avatarStyles() {
                return {
                    backgroundImage: `url(${this.url ? this.url : `https://d1u1mce87gyfbn.cloudfront.net/hero/${this.hero}/icon-portrait.png`})`
                }
            },
            avatarClasses() {
                return [this.size]
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-hero {
    display: inline-flex;
    background: $--hero-background;
    border: $--hero-border;
    border-radius: $--hero-border-radius;
    overflow: hidden;
    transform: skew(25rad);
    transition: all .5s;
    &:hover, &.active {
        transform: scale(1.2) skew(25rad);
        box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 1);
    }
    &-avatar {
        &.large {
            width: 60px;
            height: 75px;
        }
        &.small {
            width: 40px;
            height: 50px;
        }
        width: 50px;
        height: 62.5px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        transform: skew(-25rad);
    }

    & + & {
        margin-left: $--hero-margin-left;
    }
}
</style>