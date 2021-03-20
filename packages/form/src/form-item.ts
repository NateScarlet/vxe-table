import { defineComponent, h, onUnmounted, inject, ref, Ref, nextTick, PropType } from 'vue'
import { createItem, watchItem, destroyItem, assemItem } from './util'

import { VxeFormConstructor, VxeFormItemPropTypes } from '../../../types/all'

const itemProps = {
  title: String as PropType<VxeFormItemPropTypes.Title>,
  field: String as PropType<VxeFormItemPropTypes.Field>,
  span: [String, Number] as PropType<VxeFormItemPropTypes.Span>,
  align: String as PropType<VxeFormItemPropTypes.Align>,
  titleAlign: String as PropType<VxeFormItemPropTypes.TitleAlign>,
  titleWidth: [String, Number] as PropType<VxeFormItemPropTypes.TitleWidth>,
  className: [String, Function] as PropType<VxeFormItemPropTypes.ClassName>,
  titleOverflow: { type: [Boolean, String] as PropType<VxeFormItemPropTypes.TitleOverflow>, default: null },
  titlePrefix: Object as PropType<VxeFormItemPropTypes.TitlePrefix>,
  titleSuffix: Object as PropType<VxeFormItemPropTypes.TitleSuffix>,
  resetValue: { default: null },
  visibleMethod: Function as PropType<VxeFormItemPropTypes.VisibleMethod>,
  visible: { type: Boolean as PropType<VxeFormItemPropTypes.Visible>, default: null },
  folding: Boolean as PropType<VxeFormItemPropTypes.Folding>,
  collapseNode: Boolean as PropType<VxeFormItemPropTypes.CollapseNode>,
  itemRender: Object as PropType<VxeFormItemPropTypes.ItemRender>
}

export default defineComponent({
  name: 'VxeFormItem',
  props: itemProps,
  setup (props, { slots }) {
    const refElem = ref() as Ref<HTMLDivElement>
    const $xeform = inject('$xeform', {} as VxeFormConstructor)
    const formItem = createItem($xeform, props)
    formItem.slots = slots

    watchItem(props, formItem)

    nextTick(() => {
      assemItem($xeform, refElem.value, formItem)
    })

    onUnmounted(() => {
      destroyItem($xeform, formItem)
    })

    const renderVN = () => {
      return h('div', {
        ref: refElem
      })
    }

    return renderVN
  }
})
