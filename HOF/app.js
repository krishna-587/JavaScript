

// cond. 1

function a(fn){  //hof
    console.log('hi i am inside a');
    fn();
}

function b(){
    console.log('hi i am inside b');
}

a(b);


// cond. 2

function A(){
    console.log('A is great');

    function B(){
        console.log('B is great');
    }

    return B;
}

let temp = A();
console.log(temp);


// real life example

// function getString(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof item === 'string'){
//             result.push(item);
//         }
//     }
//     return result;
// }
// function getNumber(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof item === 'number'){
//             result.push(item);
//         }
//     }
//     return result;
// }
// function getBoolean(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof item === 'boolean'){
//             result.push(item);
//         }
//     }
//     return result;
// }

// let arr = ['krishna' , 'sam' , 10 , 20 , true , false , true];
// console.log(getBoolean(arr));
// console.log(getString(arr));
// console.log(getNumber(arr));

// optimised HOF way

// check type
function getBoolean(item){
    return typeof item === 'boolean';
}
function getString(item){
    return typeof item === 'string';
}
function getNumber(item){
    return typeof item === 'number';
}

//loop and result append krna

function get(array , fn){
    let result = [];
    for(let item of array){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}

let arr = ['krishna' , 'sam' , 10 , 20 , true , false , true];
console.log(get(arr , getBoolean));
console.log(get(arr , getString));
console.log(get(arr , getNumber));

