# OwInput

## Basic

Basic usage.

```html
<ow-input></ow-input>
```

## Hint

You can give a hint to OwInput, and set a type for it with any icons you like to emphasis it.

```html
<ow-input
    value="Password"
    placeholder="password"
    icon-name="cancel"
    hint="Error: Invalid Password."
    hintType="danger">
</ow-input>
<ow-input
    value="Password"
    placeholder="password"
    icon-name="warning"
    hint="Warn: Your password is easy to guess."
    hintType="warning">
</ow-input>
<ow-input
    value="Password"
    placeholder="password"
    icon-name="notification"
    hint="Info: Keep typing password."
    hintType="info">
</ow-input>
```

## Two-way Binding

```html
<ow-input
    v-model="text"
    placeholder="password">
</ow-input>

<p>{{text}}</p>
```

Define `pass` inside `data()`.

```javascript
new Vue({
    data() {
        return {
            text: 'Hello World'
        }
    }
})
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Set value of OwInput | String | "text" |
| iconName | Set name of an icon that along with OwInput | String | - |
| placeholder | Set placholder of OwInput | String | - |
| disabled | Set whether is disabled to OwInput | Boolean | false |
| readonly | Set whether is readonly to OwInput | Boolean | false |
| hint | Set a hin below OwInput | String | - |
| hintType | Set type of hint, can be `info`, `warning`, `danger` | String | - |
