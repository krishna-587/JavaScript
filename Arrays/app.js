let arr = []

let arr1 = [1,2,3,4,5];
// console.log(arr1);
// console.log(arr1[3]);

// let arr2 = [1,2,3,'krishna','gopal', true , false, null,undefined];
// console.log(arr2);
// console.log(arr2[4]);

// console.log(arr2.length);
// console.log(typeof(arr2));

// console.log(10)
// console.log(20)
// console.log(30)

// console.log(10); console.log(20); console.log(30)

// nesting array
let arr3 = [1,2,'krishna','vikas','ayush',null,[10,'gopal',12,['sam',101,102]],true];
console.log(arr3[6][3][0]);

let arr4 = [10,20,30];
console.log(arr4);

arr4.push(40);
console.log(arr4);

let ans2=arr4.pop();
console.log(arr4);
console.log(ans2);

arr4.unshift(60);
console.log(arr4);

let ans =arr4.shift();
console.log(arr4);
console.log(ans);

let arr5 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr5.slice(2));
console.log(arr5.slice(2,4));


// console.log(arr5.splice(3));
// console.log(arr5.splice(3,5)); // (3 index se 5 length tk)
console.log(arr5.splice(3,5,'sam','labani',30));
console.log(arr5);

//split (non-destructive)
let url = 'https://www.google.com/about/careers/applications/jobs/results/129296660871160518-application-engineering-intern/';
let sp = url.split('/'); // returns array
console.log(sp);

// if want to join back

console.log(sp.join('/'));

//includes : for strings and array both
let str1 = 'I like to play cricket';
let str2 = 'like';
console.log(str1.includes(str2));
console.log(arr3.includes('vikas'));
// console.log(str1.includes(str2 , 3));

//concat : for strings and array both
let arrr = [10,20,30,40,50,60,70,80,90,100];
let arrr1 = ['krishna' , 'gopal', 'singh'];
console.log(arrr.concat(arrr1));
console.log(arrr1.concat(arrr));


let strr = 'krishna ';
let strr1 = 'gopal';
console.log(strr.concat(strr1));


//indexOf
console.log(arrr1.indexOf('gopal'));
console.log(strr.indexOf('s'));  // 3

//reverse -> destructive method
console.log(arrr1.reverse());
console.log(arrr1);  
