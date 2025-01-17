export type Enum<T> = Record<keyof T, number | string> & { [k: number]: string };
export type EntityField<T> = string | number | boolean | Enum<T> | Date;

export type EntityProps<T> = {
  [P in keyof T]: T[P] extends EntityField<T> ? P & string : never;
}[keyof T];

export type EntityRelation<T> = {
  [P in keyof T]: T[P] extends EntityField<T> ? never : P;
}[keyof T];

export type ElementType<T> = T extends (infer U)[] ? U : T;
