// What happens if I use `keyof ...` on an union type?
type MyUnion = 'received' | 'pre-processing' | 'pre-processed' | 'processing' | 'processed' | 'canceled' | 'cancel-requested' | 'approved'
type KeysOfMyUnion = keyof MyUnion

// Since 'keyof' is designed to operate on object types, and MyUnion contains only string's, 'keyof' is extracting
// members found in JS type 'string'
let myKeysOfMyUnionVar: KeysOfMyUnion = 'charAt'
console.log(myKeysOfMyUnionVar)
