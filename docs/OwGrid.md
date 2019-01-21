# OwGrid

This UI library provides a Grid System.

## Example 

```html
<ow-row>
    <ow-col>
       <div class="col-item"></div>
    </ow-col>
    <ow-col>
        <div class="col-item"></div>
    </ow-col>
</ow-row>
```

## Gutter

You can assign a value to `gutter` to give more space between each element.

```html
<ow-row>
    <ow-col>
       <div class="col-item"></div>
    </ow-col>
    <ow-col>
        <div class="col-item"></div>
    </ow-col>
</ow-row>
```

## Span and Offset

You can define width for each OwCol or add an offset.

```html
<ow-row>
    <ow-col :pc="{span: 2, offset: 2}">
       <div class="col-item"></div>
    </ow-col>
    <ow-col :pc="{span: 4, offset: 4}">
        <div class="col-item"></div>
    </ow-col>
</ow-row>
```

## Responsive

To make it responsive, this UI library is built for Mobile-First.
You can specify different styles for 3 device: PC, Tablet and Phone.

```html
<ow-row>
    <ow-col :pc="{span: 2}" :tablet="{span: 12}" :phone="{span: 24}">
       <div class="col-item"></div>
    </ow-col>
</ow-row>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| pc | Set span and offset for PC device | Object | - |
| tablet | Set span and offset for tablet device | Object | - |
| phone | Set span and offset for phone device | Object | - |
| span | Set span of OwCol | Object | - |
| offset | Set offset of OwCol | Object | - |
