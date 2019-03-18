# overwatch-ui

![Overwacht](https://img.shields.io/badge/ui--lib-overwatch-FFC429.svg)
[![npm version](https://badge.fury.io/js/overwatch-ui.svg)](https://badge.fury.io/js/overwatch-ui)
[![Build Status](https://travis-ci.org/Haixiang6123/overwatch-ui.svg?branch=master)](https://travis-ci.org/Haixiang6123/overwatch-ui)
![](https://img.shields.io/npm/dm/overwatch-ui.svg)
![License: MIT](https://img.shields.io/github/stars/Haixiang6123/overwatch-ui.svg?style=social)

Overwatch UI library for Web APP, built with Vue.js.

## Documentation

[Documentation](https://haixiang6123.github.io/overwatch-ui-doc/#/)

![Doc](./screenshot/home.png)

## Install
```bash
$ yarn install overwatch-ui

or

$ npm install overwatch-ui --save
```

## Import
Then you need to import its components and plugins in *main.js*.

```javascript
// main.js
// Import the library
import OwUI from 'overwatch-ui'
import 'overwatch-ui/dist/overwatch-ui.css'

// Use some plugins
Vue.use(OwUI.plugins.$owAlert)

// Register components that you need in the root component
new Vue({
    components: {
        ...OwUI.Components
    },
    router,
    render: h => h(App)
}).$mount('#app')
```

## Usage
Now, let's place some components in your Web APP!

```html
<ow-button type="info">Info</ow-button>
<ow-button type="primary">Primary</ow-button>
<ow-button type="success">Success</ow-button>
<ow-button type="warning">Warning</ow-button>
<ow-button type="danger">Danger</ow-button>

<ow-popover position="top">
    <template slot="content">
        <div>Hello, Overwatch UI!</div>
    </template>
    <ow-button>Pop It!</ow-button>
</ow-popover>
```

If you wanna explore more usages, here's a playground on [CodeSandBox.io](https://codesandbox.io/s/r093528ny4).

## Note

This UI library will reset some styles as followed. 
I strongly recommend you to add these styles to all of your projects for saving time to find CSS bugs :)

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## Copyright Statement

I love to play Overwatch, so I built this just for fuu but not for commercial purpose. **Please note: some images, logos are from Overwatch made by Blizzard Entertainment. If you want to use this lib for commercial purpose, you have to obey those licences and place a proper licence for your project.**
