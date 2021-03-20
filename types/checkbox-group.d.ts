import { SetupContext, RenderFunction, ComponentPublicInstance, DefineComponent } from 'vue'
import { VXEComponent, VxeComponentBase, SizeType, VxeEvent, ValueOf } from './component'
import { VxeCheckboxEvents } from './checkbox'

/**
 * 组件 - 复选框组
 */
export const CheckboxGroup: VXEComponent<VxeCheckboxGroupOptions & VxeCheckboxGroupEventProps>;

export type VxeCheckboxGroupInstance = ComponentPublicInstance<VxeCheckboxGroupOptions, VxeCheckboxGroupConstructor>;

export interface VxeCheckboxGroupConstructor extends VxeComponentBase, VxeCheckboxGroupMethods {
  props: VxeCheckboxGroupOptions;
  context: SetupContext<VxeCheckboxGroupEmits>;
  renderVN: RenderFunction;
}

export interface VxeCheckboxGroupOptions extends VxeCheckboxGroupProps, VxeCheckboxGroupListeners { }

export type VxeCheckboxGroupProps = {
  size?: SizeType;
  /**
   * 绑定值
   */
  modelValue?: any[];
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

export interface CheckboxGroupMethods {
  dispatchEvent(type: ValueOf<VxeCheckboxGroupEmits>, params: any, evnt: Event): void;
}
export interface VxeCheckboxGroupMethods extends CheckboxGroupMethods { }

export interface CheckboxGroupPrivateMethods {
  handleChecked(params: { checked: boolean, label: any }, evnt: Event): void;
}
export interface VxeCheckboxGroupPrivateMethods extends CheckboxGroupPrivateMethods { }

export type VxeCheckboxGroupEmits = [
  'update:modelValue',
  'change'
]

export namespace VxeCheckboxGroupDefines {
  interface CheckboxGroupEventParams extends VxeEvent {
    $checkboxGroup: VxeCheckboxGroupConstructor;
  }

  export type ChangeParams = {
    checklist: any[];
  }
  export interface ChangeEventParams extends CheckboxGroupEventParams, ChangeParams { }
}

export type VxeCheckboxGroupEventProps = {
  onChange?: VxeCheckboxGroupEvents.Change;
}

export interface VxeCheckboxGroupListeners {
  change?: VxeCheckboxGroupEvents.Change;
}

export namespace VxeCheckboxGroupEvents {
  export type Change = (params: VxeCheckboxGroupDefines.ChangeEventParams) => void;
}
