# OwPopover

## Example

Here is the basic example.

```html
<ow-popover position="top">
    <template slot="content" slot-scope="{close}">
        <div>Popover Content</div>
    </template>
    <ow-button>Top</ow-button>
</ow-popover>
```

## Position

You can change position of how it shows up.

```html
<div>
    <ow-popover position="top">
        <template slot="content" slot-scope="{close}">
            <div>Popover Content, Hello World</div>
        </template>
        <ow-button>Top</ow-button>
    </ow-popover>
</div>
<div>
    <ow-popover position="bottom" @click="yyy">
        <template slot="content">
            <div>Popover Content, Hello World</div>
        </template>
        <ow-button type="primary">Bottom</ow-button>
    </ow-popover>
</div>
<div>
    <ow-popover position="left" @click="yyy">
        <template slot="content">
            <div>Popover Content, Hello World</div>
        </template>
        <ow-button type="info">Left</ow-button>
    </ow-popover>
</div>
<div>
    <ow-popover position="right" @click="yyy">
        <template slot="content">
            <div>Popover Content, Hello World</div>
        </template>
        <ow-button type="danger">Right</ow-button>
    </ow-popover>
</div>
```

## Trigger

You can also define the trigger of OwPopover. Default trigger is 'click'.

```html
<div>
    <ow-popover position="top">
        <template slot="content" slot-scope="{close}">
            <div>Popover Content, Hello World</div>
            <ow-button @click="close">Cancel</ow-button>
        </template>
        <ow-button>Top</ow-button>
    </ow-popover>
</div>
<div>
    <ow-popover trigger="hover" position="top" @click="yyy">
        <template slot="content">
            <div>Popover Content, Hello World</div>
        </template>
        <ow-button>Top</ow-button>
    </ow-popover>
</div>
```

## Close API

OwPopover exposes an API to close it.

```html
<div>
    <ow-popover position="top">
        <template slot="content" slot-scope="{close}">
            <div>Popover Content, Hello World</div>
            <ow-button @click="close">Cancel</ow-button>
        </template>
        <ow-button>Top</ow-button>
    </ow-popover>
</div>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| trigger | Trigger of showing OwPopover | String | "click" |
| position | Position of showing OwPopover: `left`, `right`, `top`, `bottom` | String | "left" |
| slot-scope.close | Close function to hide OwPopover | Function | - |
