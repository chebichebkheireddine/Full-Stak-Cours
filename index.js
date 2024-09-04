// function and scope Exampoles 
const sun= function(a,b){
    return a+b;
}

console.log(sun(2,3));

// this is multply function
const multiply = (a,b)=>a*b;
console.log(multiply(2,3));

// local scope and global scope
console.log('local scope and global scope');

let globalVar = 'This is global variable';

function scopeChack(){
    let localVar = 'This is local variable';
    console.log(globalVar);
    console.log(localVar);
    console.log('End of scopeChack function');
}
scopeChack();
// console.log(globalVar);
// console.log(localVar); // this will give error because localVar is local variable