import { setFields, addFields, addResolver, removeField, removeOtherFields, reorderFields, deprecateFields, extendField } from './TypeComposer'
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}



export {
  compose,
  setFields,
  addFields,
  removeField,
  extendField,
  removeOtherFields,
  reorderFields,
  deprecateFields,
  addResolver
}









