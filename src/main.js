import * as components from './components'

const Vizor = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default Vizor

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vizor)
}