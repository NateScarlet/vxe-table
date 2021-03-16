import { App } from 'vue'
import XEUtils from 'xe-utils'
import { setup } from './v-x-e-table'

import { Table } from './table'
import { Column } from './column'
import { Header } from './header'
import { Footer } from './footer'
import { Grid } from './grid'
import { Toolbar } from './toolbar'
import { Pager } from './pager'
import { Checkbox } from './checkbox'
import { Radio } from './radio'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'
import { Modal } from './modal'
import { Tooltip } from './tooltip'
import { Form } from './form'
import { Select } from './select'
import { Switch } from './switch'
import { List } from './list'
import { Pulldown } from './pulldown'

import { Icon } from './icon'
import { Filter } from './filter'
import { Menu } from './menu'
import { Edit } from './edit'
import { Export } from './export'
import { Keyboard } from './keyboard'
import { Validator } from './validator'

import zhCN from './locale/lang/zh-CN'

// 按需加载的组件
const components = [
  // 模块
  Column,
  Header,
  Footer,
  Grid,
  Toolbar,
  Pager,
  Checkbox,
  Radio,
  Input,
  Textarea,
  Button,
  Modal,
  Tooltip,
  Form,
  Select,
  Switch,
  List,
  Pulldown,

  // 扩展模块
  Icon,
  Filter,
  Menu,
  Edit,
  Export,
  Keyboard,
  Validator,

  // 核心
  Table
]

// 默认中文
setup({
  i18n: (key: string, args: any) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})

// 默认安装
export function install (app: App, options: any) {
  if (XEUtils.isPlainObject(options)) {
    setup(options)
  }
  components.forEach(component => component.install(app))
}

export * from './v-x-e-table'

export * from './column'
export * from './header'
export * from './footer'
export * from './grid'
export * from './menu'
export * from './toolbar'
export * from './pager'
export * from './checkbox'
export * from './radio'
export * from './input'
export * from './textarea'
export * from './button'
export * from './modal'
export * from './tooltip'
export * from './form'
export * from './select'
export * from './switch'
export * from './list'
export * from './pulldown'

export * from './icon'
export * from './filter'
export * from './edit'
export * from './export'
export * from './keyboard'
export * from './validator'
export * from './table'