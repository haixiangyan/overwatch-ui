<template>
    <div id="app">
        <ow-nav :selected.sync="selected">
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

        <ow-nav :selected.sync="vselected" :isVertical="true" style="width: 200px">
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
            <ow-uploader
                name="file"
                action="https://upload-node-server.herokuapp.com/upload"
                method="POST"
                :getPreviewUrl="getPreviewUrl"
                :file-list.sync="fileList">
                <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
            </ow-uploader>
        </div>

        <div class="item">
            <ow-table
                    :sort-rules.sync="sortRules"
                    :strip="true"
                    :columns="columns"
                    :source="tableSource"
                    :selected.sync="tableSelected"
                    expand-field="description"
                    :is-show-index="true"
                    @update:sortRules="sortScore"
                    :selectable="true">
            </ow-table>
        </div>

        <div class="item">
            <ow-date-picker :value.sync="date" @input="date = $event" :range="range"></ow-date-picker>
        </div>

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
            <ow-collapse-group :selected.sync="selectedCollapse">
                <ow-collapse title="Title1" name="1"> <div>Content 1</div> </ow-collapse>
                <ow-collapse title="Title2" name="2"> <div>Content 2</div> </ow-collapse>
                <ow-collapse title="Title3" name="3"> <div>Content 3</div> </ow-collapse>
            </ow-collapse-group>
            <span>You select: {{selectedCollapse}}</span>
        </div>

        <div class="item">
            <ow-icon name="setting"></ow-icon>
            <ow-icon name="remove"></ow-icon>
            <ow-icon name="upload"></ow-icon>
            <ow-icon :is-loading="true" name="loading"></ow-icon>
        </div>

        <div class="item">
            <ow-input :disabled="true"></ow-input>
            <ow-input :readonly="true"></ow-input>
            <ow-input></ow-input>
        </div>

        <div class="item">
            <ow-pager :total="20" :current.sync="current"></ow-pager>
        </div>

        <div class="item">
            <ow-popover position="top">
                <template slot="content">
                    <div>Popover Content</div>
                </template>
                <ow-button>Pop It!</ow-button>
            </ow-popover>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                date: new Date(),
                range: [new Date(2019, 1), new Date(2019, 2)],
                vselected: 'home',
                selected: 'home',
                selectedTab: 'data',
                carouselSelected: '1',
                source: [ { name: 'CA', children: [ { name: 'Irvine', isLeaf: false, children: [ {name: 'UCI'}, {name: 'UCSB'}, {name: 'UCB'}, ] }, { name: 'LA', isLeaf: false, children: [ {name: 'UCLA'}, {name: 'UCB'}, {name: 'UCSD'}, ] }, ] }, { name: 'NY', children: [ {name: 'Col', isLeaf: true}, { name: 'NY', isLeaf: false, children: [ {name: 'NYU'}, {name: 'FU'}, {name: 'BC'}, ] }, ] } ],
                cascaderSelected: [],
                selectedCollapse: ['1', '2'],
                current: 5,
                columns: [
                    {label: 'Name', field: 'name', width: 300},
                    {label: 'Score', field: 'score'}
                ],
                tableSource: [
                    {id: 1, name: 'Jack', score: 100, description: 'Good Job'},
                    {id: 2, name: 'Marry', score: 200, description: 'Nice Job'},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
                ],
                sortRules: {
                    name: 'asc',
                    score: 'desc'
                },
                tableSelected: [],
                fileList: [
                    {name: 'README.md', size: 231, type: 'text/markdown', status: 'UPLOADING'},
                    {name: 'index.html', size: 333, type: 'text/html', status: 'UPLOADED'},
                    {name: 'styles.css', size: 876, type: 'text/css', status: 'FAIL'},
                ],
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
            },
            sortScore(newOrder) {
                this.tableSource = this.tableSource.sort((a, b) => {
                    if (newOrder.score === 'asc') {
                        return a.score - b.score
                    }
                    if (newOrder.score === 'desc') {
                        return b.score - a.score
                    }
                })
            },
            getPreviewUrl(response) {
                let responseJson = JSON.parse(response)
                return "https://upload-node-server.herokuapp.com/preview/" + responseJson.filename
            }
        }
    }
</script>

<style lang="scss">
    #app {
        position: relative;
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
