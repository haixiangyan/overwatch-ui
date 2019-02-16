<template>
    <div id="app">
        <ow-nav :selected.sync="selected1" :isVertical="true" style="width: 200px">
            <ow-nav-item name="home">Home</ow-nav-item>
            <ow-sub-nav name="about">
                <template slot="title">About</template>
                <ow-nav-item name="team">Team</ow-nav-item>
                <ow-nav-item name="developer">Developer</ow-nav-item>
                <ow-sub-nav name="company">
                    <template slot="title">Company</template>
                    <ow-nav-item name="baidu">Baidu</ow-nav-item>
                    <ow-sub-nav name="tencent">
                        <template slot="title">Tencent</template>
                        <ow-nav-item name="sports">Sports</ow-nav-item>
                        <ow-nav-item name="ant">Ant</ow-nav-item>
                    </ow-sub-nav>
                </ow-sub-nav>
            </ow-sub-nav>
            <ow-nav-item name="career">Career</ow-nav-item>
        </ow-nav>
        Hello You Hello YOu Hello You Hello YOu Hello You Hello YOu Hello You Hello YO
        <br>
        <br>
        <ow-nav :selected.sync="selected2">
            <ow-nav-item name="home">Home</ow-nav-item>
            <ow-sub-nav name="about">
                <template slot="title">About</template>
                <ow-nav-item name="team">Team</ow-nav-item>
                <ow-nav-item name="developer">Developer</ow-nav-item>
                <ow-sub-nav name="company">
                    <template slot="title">Company</template>
                    <ow-nav-item name="baidu">Baidu</ow-nav-item>
                    <ow-sub-nav name="tencent">
                        <template slot="title">Tencent</template>
                        <ow-nav-item name="sports">Sports</ow-nav-item>
                        <ow-nav-item name="ant">Ant</ow-nav-item>
                    </ow-sub-nav>
                </ow-sub-nav>
            </ow-sub-nav>
            <ow-nav-item name="career">Career</ow-nav-item>
        </ow-nav>
        Hello You Hello YOu Hello You Hello YOu Hello You Hello YOu Hello You Hello YO
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                selected1: ['home'],
                selected2: ['home']
            }
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 10px 15px;
        background: url("./assets/images/ow-bg.jpg") center center;
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3em;
            height: 200px;
            background: #ddd;
        }
    }
</style>
