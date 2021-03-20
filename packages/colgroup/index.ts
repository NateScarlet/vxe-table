import { App } from 'vue'
import VxeTableColgroupComponent from '../column/src/group'
import { dynamicApp } from '../dynamics'

export const Colgroup = Object.assign(VxeTableColgroupComponent, {
  install (app: App) {
    dynamicApp.component(VxeTableColgroupComponent.name, VxeTableColgroupComponent)
    app.component(VxeTableColgroupComponent.name, VxeTableColgroupComponent)
  }
})

export default Colgroup
