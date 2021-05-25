export type ImmutableObject<T> = Readonly<
  {
    [K in keyof T]: Immutable<T[K]>;
  }
>;

export type Immutable<T> = T extends
  | string
  | number
  | boolean
  | null
  | undefined
  ? T
  : T extends any[] | object
  ? ImmutableObject<T>
  : never;
