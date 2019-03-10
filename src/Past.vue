<template>
    <div class="past">
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

        <div class="item">
            <div>
                <ow-hero hero="mccree"></ow-hero>
                <ow-hero url="https://avatars2.githubusercontent.com/u/16954378?s=64&v=4"></ow-hero>
                <ow-hero :is-active="true" hero="hanzo"></ow-hero>
            </div>
            <div>
                <ow-hero @click="onClick" size="small" hero="mccree"></ow-hero>
                <ow-hero hero="genji"></ow-hero>
                <ow-hero size="large" hero="hanzo"></ow-hero>
            </div>
        </div>

        <div class="item">
            <ow-blood class="blood-item" :total="150"></ow-blood>
            <ow-blood class="blood-item" :total="200" :residual="blood"></ow-blood>
            <ow-blood class="blood-item" :total="250"></ow-blood>
            <ow-blood class="blood-item" :total="500" :residual="100"></ow-blood>
            <ow-blood class="blood-item" total-text-color="red" residual-text-color="yellow" :total="600"></ow-blood>
            <ow-blood class="blood-item" :total="200" :residual="100" residual-color="red" gone-color="green"></ow-blood>
        </div>

        <div class="item">
            <ow-badge class="badge-item" title="99+">
                <span>LOOTBOX</span>
            </ow-badge>

            <ow-badge class="badge-item" :is-dot="true">
                <span>LOOTBOX</span>
            </ow-badge>
            <ow-badge title="MESSAGE"></ow-badge>
        </div>

        <div class="item">
            <ow-select v-model="value" :options="options"></ow-select>
        </div>

        <div class="item">
            <ow-slider v-model="sliderValue" :max="100"></ow-slider>
            <p>{{sliderValue}}</p>
        </div>

        <div class="item">
            <ow-switch v-model="switchValue" :options="switchOptions" :width="150"></ow-switch>
            <p>{{value}}</p>
        </div>

        <div class="item">
            <ow-label title="GRAPHICS QUALITY">
                <ow-select :width="300" v-model="labelValue1" :options="labelOptions1"></ow-select>
            </ow-label>
            <ow-label v-model="labelValue2" :wrappable="true" title="FIELD OF VIEW">
                <ow-slider :width="300" v-model="labelValue2"></ow-slider>
            </ow-label>
            <ow-label :wrappable="true" title="DISPLAY MODE">
                <ow-switch :width="300" v-model="labelValue3" :options="labelOptions3"></ow-switch>
            </ow-label>
            <ow-label :wrappable="true" title="NAME">
                <ow-input rect :width="300"></ow-input>
            </ow-label>
        </div>

        <div class="item">
            <ow-button @click="isOpen = true">Open</ow-button>
            <ow-modal :is-open.sync="isOpen">
                <template slot="header">
                    ADD A NEW FRIEND
                </template>
                <p style="margin-bottom: 12px">PUT A GAME ID OR EMAIL ADDRESS</p>
                <ow-input placeholder="Game ID or Email Address" :width="300"></ow-input>
                <template slot="footer">
                    <ow-button @click="isOpen = false">BACK</ow-button>
                    <ow-button type="warning">SEND REQUEST</ow-button>
                </template>
            </ow-modal>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Past",
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
                blood: 30,
                options: [
                    {
                        value: 'genji',
                        label: 'Genji',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
                    }, {
                        value: 'hanzo',
                        label: 'Hanzo',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'mccree',
                        label: 'McCree',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
                    }, {
                        value: 'tracer',
                        label: 'Tracer',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'zarya',
                        label: 'Zarya',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
                    },
                ],
                value: 'genji',
                sliderValue: 20,
                switchValue: 'genji',
                switchOptions: [
                    {
                        label: 'Genji',
                        value: 'genji'
                    },
                    {
                        label: 'Hanzo',
                        value: 'hanzo'
                    },
                    {
                        label: 'McCree',
                        value: 'mccree'
                    },
                ],
                labelValue1: 'tracer',
                labelOptions1: [
                    { value: 'genji', label: 'Genji', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png', },
                    { value: 'hanzo', label: 'Hanzo', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png', },
                    { value: 'mccree', label: 'McCree', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png', },
                    { value: 'tracer', label: 'Tracer', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png', },
                    { value: 'zarya', label: 'Zarya', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png', }
                ],
                labelValue2: 18,
                labelValue3: 'medium',
                labelOptions3: [
                    {
                        label: 'EPIC',
                        value: 'epic'
                    },
                    {
                        label: 'MEDIUM',
                        value: 'medium'
                    },
                    {
                        label: 'LOW',
                        value: 'low'
                    }
                ],
                isOpen: false
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
            },
            onClick() {
                console.log('jjj');
            }
        }
    }
</script>

<style scoped lang="scss">
.past {
    .item {
        padding: 10px 0;
        .box {
            height: 300px;
            background: $--color-warning;
        }
    }
}
</style>
