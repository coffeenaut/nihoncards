/**
 * general reusable tool functions (*mostly stolen from the web)
 */
export function isObjectEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
  
    return true;
}
export function DiceRoll(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function Timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function isFunction (obj) {
  if (typeof obj === 'function')
    return true
  else
    return false
}
export function IntToHex(intVal) {
  return intVal.toString(16)
}
export function HexToInt(hexVal) {
  return parseInt(hexVal, 16)
}
export function isSameObject(obj1, obj2) {
  // let samsies = false
  return JSON.stringify(obj1) === JSON.stringify(obj2) 
}
export function isObject(obj) {
  return typeof x === 'object' && !Array.isArray(x) && x !== null
}
/* Fisher-Yates Shuffle*/
export function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}