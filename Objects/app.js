


let person = {name:'krishna',  //property 1
                 age:20,        //property 2
                 isMale: true,  //property 3
                 favColor : 'blue'      //property 4
};
// console.log(person);
console.log(person.name);
console.log(person.favColor);
console.log(person['name']);


//objects are also passed by reference

// person.name= 'coding';
// console.log(person.name);

let person2 = person;
console.log(person2.age);

person2.name= 'gopal';
console.log(person2.name);
console.log(person.name);

