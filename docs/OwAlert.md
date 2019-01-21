# OwAlert

This UI library provides a way to popup alert. First, you need to 
import it.

```javascript
import OwUI from 'overwatch-ui'

Vue.use(OwUI.plugins.$owAlert)
```

## Usage

Then you can make an alert in anywhere of your project.

```javascript
// xxx.vue 
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
```