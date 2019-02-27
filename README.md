# overwatch-ui

![Overwacht](https://img.shields.io/badge/ui--lib-overwatch-FFC429.svg)
[![npm version](https://badge.fury.io/js/overwatch-ui.svg)](https://badge.fury.io/js/overwatch-ui)
[![Build Status](https://travis-ci.org/Haixiang6123/overwatch-ui.svg?branch=master)](https://travis-ci.org/Haixiang6123/overwatch-ui)
![](https://img.shields.io/npm/dw/overwatch-ui.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A UI library of game Overwatch, built with Vue.js.

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

**This UI library will reset some styles as followed. 
I strongly recommend you to add these styles to all of your projects for saving time to find CSS bugs :)**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## Things going to do...

I'm still working on these components:

* UI Component
    * HeroAvatar
    * Blood
    * PlayerAvatar
    * Ult
* Form Component
    * Modal
    * Input
    * Slider
    * Swiper
    * Dropdown

## Change Logs

* v0.2.0
    * Add OwButton
    * Add OwButtonGroup
* v0.3.0
    * Add OwIcon
    * Split scss variables to global.scss
* v0.4.0
    * Add OwInput
    * Add travis CI integration test
* v0.5.0
    * Add grid system
    * Add layout system
* v0.6.0
    * Add OwAlert
    * Add plugin function
* v0.7.0
    * Add OwPopover
* v0.8.0
    * Add OwCollapse
* v0.9.0
    * Update to vue-cli 3
    * Add OwCascader
* v1.0.0
    * Add OwCarousel
* v1.1.0
    * Add OwNav
* v1.2.0
    * Integrate Karma to vue cli 3
    * Add OwValidate
* v1.3.0
    * Add OwPager
    * Add OwSticky
* v1.4.0
    * Add OwUploader
    * Ow OwTable
* v1.5.0
    * Add OwScroll
    * Add OwDatePicker