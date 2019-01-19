# OwIcon

### Name

Set the name to select any icons you like

```html
<ow-icon name="setting"></ow-icon>
<ow-icon name="remove"></ow-icon>
<ow-icon name="user"></ow-icon>
```

### Color

In some cases, you may want to highlight the Icon. 

```html
<ow-icon name="setting" color="#aabbff"></ow-icon>
<ow-icon name="remove" color="#ffbbaa"></ow-icon>
<ow-icon name="user" color="#aaffbb"></ow-icon>
```

### Loading

The Icon will be rotated if you enable the loading state.

```html
<ow-icon name="loading" :is-loading="true"></ow-icon>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | Set name of OwIcon | String | 'setting' |
| color | Set stroke color of OwIcon | String | '000000' |
| is-loading | Set loading state of OwIcon | Boolean | false |
