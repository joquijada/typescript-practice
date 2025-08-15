/**
 * Here I was trying to find the proper way to omit from a union another union,
 * https://stackoverflow.com/questions/70109687/how-do-i-omit-a-value-in-typescript-union-type
 * I was trying to use Omit, but it wasn't working because Omit works on object types to omit keys from such an object.
 */
type MyUnion = 'received' | 'pre-processing' | 'pre-processed' | 'processing' | 'processed' | 'canceled' | 'cancel-requested' | 'approved'
type MyExtractedUnion = Extract<MyUnion, 'received'>
type MyExcludedUnion = Exclude<MyUnion, MyExtractedUnion>

let myUnionVar: MyUnion = 'approved'
let myExtractedUnionVar: MyExtractedUnion = 'received'
let myOmittedUnionVar1: MyExcludedUnion = 'canceled'

// Below gives TS compile error because 'received' was excluded in 'type MyExcludedUnion = Exclude<MyUnion, MyExtractedUnion>' type definition
// above
//let myOmittedUnionVar2: MyExcludedUnion = 'received'

console.log(myUnionVar, myExtractedUnionVar, myOmittedUnionVar1)
