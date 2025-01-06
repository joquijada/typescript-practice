// Taken from https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
type GetReturnType<Type> = Type extends (args: any) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;

type Str = GetReturnType<(x: string) => string>;

type Booleans = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

const myBools: Booleans = null

// Taken from https://www.google.com/search?q=typescript+build+new+type+based+on+subset+of+union+type&rlz=1C5GCCM_en&oq=type&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg7MgYIAhBFGDsyDggDEEUYORhDGIAEGIoFMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1MzQ0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
type AgeOrName<T> = T extends "age" | "name" ? T : never;
interface Person {
  name: string;
  age: number;
  address: string;
}

type Result = AgeOrName<keyof Person>; // "age" | "name"
