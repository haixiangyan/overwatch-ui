# OwCollapse

## Example

```html
<ow-collapse-group :selected.sync="selectedCollapse" :multiSelect="true">
    <ow-collapse title="Title1" name="1"> <div>Content 1</div> </ow-collapse>
    <ow-collapse title="Title2" name="2"> <div>Content 2</div> </ow-collapse>
    <ow-collapse title="Title3" name="3"> <div>Content 3</div> </ow-collapse>
</ow-collapse-group>
<span>{{selectedCollapse}}</span>
```

```javascript
data() {
    return{
        selectedCollapse: ['1', '2']
    } 
}
```

## Single Select

You can enable only one OwCollapse to expand. 
You can't define the `selected` array that has more than 1 element.

```html
<ow-collapse-group :selected.sync="selectedCollapse" :multiSelect="false">
    <ow-collapse title="Title1" name="1"> <div>Content 1</div> </ow-collapse>
    <ow-collapse title="Title2" name="2"> <div>Content 2</div> </ow-collapse>
    <ow-collapse title="Title3" name="3"> <div>Content 3</div> </ow-collapse>
</ow-collapse-group>
<span>{{selectedCollapse}}</span>
```

```javascript
data() {
    return{
        selectedCollapse: ['1']
    } 
}
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| selected | Array of selected items | Array | - |
| multiSelect | If multiple OwCollapse can expand | Boolean | - |
