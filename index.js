// Array and Object 
// Araay 
let frutes = ['Apple', 'banana', 'mango', 'orange', 'grapes', 'watermelon'];
console.log(frutes);
// The Top Operation in Array
// 1. Push
frutes.push('pineapple');
console.log(frutes);
// 2. Pop
frutes.pop();
console.log(frutes);
// 3. Shift
let firtFrutes=frutes.shift();
console.log(firtFrutes);
console.log(frutes);
// 4. Unshift : Add the element in the first position
frutes.unshift('kiwi');
console.log(frutes);
// 5. IndexOf
let frutSearch = 'mango';
console.log(`The Index of "${frutSearch}" is :${frutes.indexOf(frutSearch)}`);
// 6. Splice
let index = frutes.indexOf('orange');
frutes.splice(index,1, 'papaya');
console.log(frutes);
// 7. Slice
let newFrutes = frutes.slice(1,3);
console.log(newFrutes);
// Object
console.log('----------------------------Object-----------------------------');

let perosn={
    name:'Rajesh',
    age: 25,
    city: 'Bangalore',
    isStudent: true,
}
// Access the Object with 2 ways @chebichebkheireddine
console.log(perosn.name);
console.log(perosn['age']);
console.log(perosn);
//  After this we Have The String Method : Like toUpperCase .... , || and Boolean Method : Boolean expression
// All this is Clear in Ja for Me You can find in my repo of JS cousr

