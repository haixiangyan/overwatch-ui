<template>
    <div id="app">
        <ow-nav :selected.sync="selected">
            <ow-nav-item name="home">Home</ow-nav-item>
            <ow-nav-item name="team">Team</ow-nav-item>
            <ow-nav-item name="developer">Developer</ow-nav-item>
            <ow-nav-item name="career">Career</ow-nav-item>
        </ow-nav>

        <ow-tabs :selected="selectedTab">
            <ow-tabs-head>
                <ow-tabs-item name="data">Data</ow-tabs-item>
                <ow-tabs-item name="career">Career</ow-tabs-item>
                <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
            </ow-tabs-head>

            <ow-tabs-body>
                <ow-tabs-pane class="pane" name="data">Data</ow-tabs-pane>
                <ow-tabs-pane class="pane" name="career">Career</ow-tabs-pane>
                <ow-tabs-pane class="pane" name="avatar">Avatar</ow-tabs-pane>
            </ow-tabs-body>
        </ow-tabs>

        <div class="item">
            <ow-button type="primary" @click="showAlert">Alert it</ow-button>
        </div>

        <div class="item">
            <ow-button type="primary">Primary</ow-button>
            <ow-button type="warning">Warning</ow-button>
            <ow-button type="info">Info</ow-button>
            <ow-button type="danger">Danger</ow-button>
        </div>

        <div class="item">
            <ow-carousel :selected.sync="carouselSelected">
                <ow-carousel-item name="1">
                    <div class="box">1</div>
                </ow-carousel-item>
                <ow-carousel-item name="2">
                    <div class="box">2</div>
                </ow-carousel-item>
                <ow-carousel-item name="3">
                    <div class="box">3</div>
                </ow-carousel-item>
            </ow-carousel>
        </div>

        <div class="item">
            <ow-cascader
                    :source.sync="source"
                    :selected.sync="cascaderSelected"
                    placeholder="Click to Select">
            </ow-cascader>
        </div>

        <div class="item">
            <ow-date-picker :value.sync="date" @input="date = $event" :range="range"></ow-date-picker>
        </div>
        <p>Hello</p>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                date: new Date(),
                range: [new Date(2019, 1), new Date(2019, 2)],
                selected: 'home',
                selectedTab: 'data',
                carouselSelected: '1',
                source: [ { name: 'CA', children: [ { name: 'Irvine', isLeaf: false, children: [ {name: 'UCI'}, {name: 'UCSB'}, {name: 'UCB'}, ] }, { name: 'LA', isLeaf: false, children: [ {name: 'UCLA'}, {name: 'UCB'}, {name: 'UCSD'}, ] }, ] }, { name: 'NY', children: [ {name: 'Col', isLeaf: true}, { name: 'NY', isLeaf: false, children: [ {name: 'NYU'}, {name: 'FU'}, {name: 'BC'}, ] }, ] } ],
                cascaderSelected: [],
            }
        },
        methods: {
            showAlert() {
                this.$owAlert({
                    type: 'success',
                    title: 'SEARCHING FOR GAME',
                    message: 'ESTIMATE TIME: 0:0:2',
                    closeButton: {
                        text: 'OK',
                        callback(vm) {
                            console.log('Yes')
                        }
                    }
                })
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    #app {
        position: relative;
        height: 100vh;
        padding: 100px 100px;
        background: url("./assets/images/bg.png");
        .item {
            padding: 10px 0;
            .box {
                height: 300px;
                background: $--color-warning;
            }
        }
    }
</style>
