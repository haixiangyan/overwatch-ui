<template>
    <div id="app">
        <h1>Tabs</h1>
        <div class="item">
            <ow-tabs :selected="selectedTab">
                <ow-tabs-head>
                    <ow-tabs-item name="data">Data</ow-tabs-item>
                    <ow-tabs-item name="career">Career</ow-tabs-item>
                    <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
                    <template slot="actions">
                        <ow-button>Setting</ow-button>
                    </template>
                </ow-tabs-head>

                <ow-tabs-body>
                    <ow-tabs-pane name="data">Data Pane</ow-tabs-pane>
                    <ow-tabs-pane name="career">Career Pane</ow-tabs-pane>
                    <ow-tabs-pane name="avatar">Avatar Pane</ow-tabs-pane>
                </ow-tabs-body>
            </ow-tabs>
        </div>

        <h1>Alert</h1>
        <div class="item">
            <div class="buttons">
                <ow-button class="button" @click="showAlert('success')" type="success">Show Alert</ow-button>
                <ow-button class="button" @click="showAlert('warning')" type="warning">Show Alert</ow-button>
                <ow-button class="button" @click="showAlert('loading')" type="primary">Show Alert</ow-button>
                <ow-button class="button" @click="showAlert('danger')" type="danger">Show Alert</ow-button>
                <ow-button class="button" @click="showAlert('info')" type="primary">Show Alert</ow-button>
            </div>
        </div>

        <h1>Icon</h1>
        <div class="item">
            <div class="buttons">
                <ow-icon class="button" name="setting"></ow-icon>
                <ow-icon class="button" name="remove"></ow-icon>
                <ow-icon class="button" name="user"></ow-icon>
                <ow-icon class="button" name="loading" :is-loading="true"></ow-icon>
            </div>
        </div>

        <h1>Button</h1>
        <div class="item">
            <div class="buttons">
                <ow-button class="button" type="primary">Primary</ow-button>
                <ow-button class="button" type="warning">Warning</ow-button>
                <ow-button class="button" type="info">Info</ow-button>
                <ow-button class="button" type="danger">Danger</ow-button>
                <ow-button class="button" type="success">Success</ow-button>
            </div>
        </div>

        <h1>Input</h1>
        <div class="inputs">
            <ow-input
                class="input"
                value="Password"
                placeholder="password"
                icon-name="cancel"
                hint="Error: Invalid Password."
                hintType="danger">
            </ow-input>
            <ow-input
                class="input"
                value="Password"
                placeholder="password"
                icon-name="warning"
                hint="Warn: Your password is easy to guess."
                hintType="warning">
            </ow-input>
            <ow-input
                class="input"
                value="Password"
                placeholder="password"
                icon-name="notification"
                hint="Info: Keep typing password."
                hintType="info">
            </ow-input>
            <ow-input
                class="input"
                value="Password"
                placeholder="password"
                icon-name="notification"
                hint="Success: Valid password."
                hintType="success">
            </ow-input>
        </div>

        <h1>Popover with Click Trigger</h1>
        <div class="item">
            <div class="popover">
                <ow-popover position="top">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button @click="close">Cancel</ow-button>
                    </template>
                    <ow-button>Top</ow-button>
                </ow-popover>
            </div>
            <div class="popover">
                <ow-popover position="bottom">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button type="primary" @click="close">Cancel</ow-button>
                    </template>
                    <ow-button type="primary">Bottom</ow-button>
                </ow-popover>
            </div>
            <div class="popover">
                <ow-popover position="left">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button type="info" @click="close">Cancel</ow-button>
                    </template>
                    <ow-button type="info">Left</ow-button>
                </ow-popover>
            </div>
            <div class="popover">
                <ow-popover position="right">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button type="danger" @click="close">Cancel</ow-button>
                    </template>
                    <ow-button type="danger">Right</ow-button>
                </ow-popover>
            </div>
        </div>
        <h1>Popover with Hover Trigger</h1>
        <div class="item">
            <div class="popover">
                <ow-popover trigger="hover" position="top">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button @click="close">Cancel</ow-button>
                    </template>
                    <ow-button>Top</ow-button>
                </ow-popover>
            </div>
            <div class="popover">
                <ow-popover trigger="hover" position="bottom">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button type="primary" @click="close">Cancel</ow-button>
                    </template>
                    <ow-button type="primary">Bottom</ow-button>
                </ow-popover>
            </div>
            <div class="popover">
                <ow-popover trigger="hover" position="left">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button type="info" @click="close">Cancel</ow-button>
                    </template>
                    <ow-button type="info">Left</ow-button>
                </ow-popover>
            </div>
            <div class="popover">
                <ow-popover trigger="hover" position="right">
                    <template slot="content" slot-scope="{close}">
                        <div>Popover Content, Hello World</div>
                        <ow-button type="danger" @click="close">Cancel</ow-button>
                    </template>
                    <ow-button type="danger">Right</ow-button>
                </ow-popover>
            </div>
        </div>

        <h1>Layout</h1>
        <div class="layout-wrapper">
            <ow-layout class="layout" style="height: 300px;">
                <ow-header class="header">Header</ow-header>
                <ow-content class="content">Content</ow-content>
                <ow-footer class="footer">Footer</ow-footer>
            </ow-layout>

            <ow-layout class="layout" style="height: 300px">
                <ow-sider class="sider">Sider</ow-sider>
                <ow-layout>
                    <ow-header class="header">Header</ow-header>
                    <ow-content class="content">Content</ow-content>
                    <ow-footer class="footer">Footer</ow-footer>
                </ow-layout>
            </ow-layout>
        </div>

        <h1>Grid</h1>
        <ow-row class="row-item" gutter="20">
            <ow-col :pc="{span: 12}"> <div class="col-item"></div> </ow-col>
            <ow-col :pc="{span: 12}"> <div class="col-item"></div> </ow-col>
        </ow-row>
        <ow-row class="row-item" gutter="20">
            <ow-col :pc="{span: 4}"> <div class="col-item"></div> </ow-col>
            <ow-col :pc="{span: 20}"> <div class="col-item"></div> </ow-col>
        </ow-row>
        <ow-row class="row-item" gutter="20">
            <ow-col :pc="{span: 20}"> <div class="col-item"></div> </ow-col>
            <ow-col :pc="{span: 4}"> <div class="col-item"></div> </ow-col>
        </ow-row>
        <ow-row class="row-item" gutter="20">
            <ow-col :pc="{span: 6, offset: 4}"> <div class="col-item"></div> </ow-col>
            <ow-col :pc="{span: 4, offset: 8}"> <div class="col-item"></div> </ow-col>
        </ow-row>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                visible: true,
                selectedTab: 'data'
            }
        },
        methods: {
            showAlert(type) {
                this.$owAlert({
                    type: type,
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
        }
    }
</script>

<style lang="scss">
    #app {
        padding: 20px 150px;
        background: url("./assets/images/ow-bg.jpg") center center;
        .item {
            display: flex;
            margin: 30px 0;

            .popover, .button {
                margin: 0 30px;
            }
        }

        .inputs {
            display: flex;
            > .input {
                margin: 0 30px;
            }
        }

        .col-item {
            height: 50px;
            background: $--color-danger;
        }
        .row-item {
            margin: 20px 0;
        }

        .layout-wrapper {
            text-align: center;
            .layout {
                color: white;
                margin: 20px 0;
                .header, .footer {
                    background: $--color-primary;
                }
                .sider {
                    @include hvFlexCenterMx(flex);
                    width: 100px;
                    background: $--color-danger;
                }
                .content {
                    @include hvFlexCenterMx(flex);
                    background: $--color-warning;
                }
            }
        }
    }
</style>
