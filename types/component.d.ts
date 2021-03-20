import { App, ComponentPublicInstance } from 'vue'

export type SizeType = null | 'medium' | 'small' | 'mini';
export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T];

export type VXEComponent<P = {}, E = {}> = {
  new (): {
    $props: P & Partial<E>;
  };
} & {
  install(app: App): void;
}

export interface VxeComponentBase {
  xID: string;
}

export interface RecordInfo {
  [key: string]: any;
}

export interface RowInfo {
  [key: string]: any;
}

export interface VxeEvent {
  $event: Event;
  [key: string]: any;
}

export interface VNodeStyle {
  [key: string]: string | number
}
