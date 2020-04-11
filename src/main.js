import Vue from 'vue'
import App from './App.vue'

// Import components to register them globally
import * as components from './components'

for (let componentArray of Object.entries(components)) {
  for (let component of Object.entries(componentArray[1])) {
    Vue.component(component[1].name, component[1])
  }
}

export * from './components'
// End of globally registered components

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
