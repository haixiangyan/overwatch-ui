# OwTabs

## Example

You can define a tab navigator with `OwTabs`.

```html
<ow-tabs :selected="selectedTab">
    <ow-tabs-head>
        <ow-tabs-item name="social">Data</ow-tabs-item>
        <ow-tabs-item name="career">Career</ow-tabs-item>
        <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
    </ow-tabs-head>

    <ow-tabs-body>
        <ow-tabs-pane name="data">Data</ow-tabs-pane>
        <ow-tabs-pane name="career">Career</ow-tabs-pane>
        <ow-tabs-pane name="avatar">Avatar</ow-tabs-pane>
    </ow-tabs-body>
</ow-tabs>
```

## Action

You can place any elements in the right hand side with `<template>`.

```html
<ow-tabs :selected="selectedTab">
    <template>
        <ow-button>Setting</ow-button>
    </template>
    <ow-tabs-head>
        <ow-tabs-item name="social">Data</ow-tabs-item>
        <ow-tabs-item name="career">Career</ow-tabs-item>
        <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
    </ow-tabs-head>

    <ow-tabs-body>
        <ow-tabs-pane name="data">Data</ow-tabs-pane>
        <ow-tabs-pane name="career">Career</ow-tabs-pane>
        <ow-tabs-pane name="avatar">Avatar</ow-tabs-pane>
    </ow-tabs-body>
</ow-tabs>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | Name of OwTabsItem and OwTabsBody | String | - |
| selected | Set active item and pane with given selected name | String | | - |
