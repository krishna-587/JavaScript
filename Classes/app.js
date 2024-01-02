

// Constructor function
/*function Person(firstname ,last, email){
    this.firstName = firstname
    this.lastname = last;
    this.email = email;
}

Person.prototype.print = function(){
    console.log(`My name is ${this.firstName} ${this.lastname}`)
}


Person.prototype.getName = function(){
    return (`name is ${this.firstName} ${this.lastname}`)
}

let person1 = new Person('krishna' , 'gopal', 'krishnagopalsingh587@gmail.com');
console.log(person1);
console.log(person1.email);
console.log(person1.getName());
console.log(person1.print());*/




// class syntax


class Person{

    constructor(firstname , last , email){
        this.firstName = firstname
        this.lastname = last;
        this.email = email;
    }

    getName(){
        return `My name is ${this.firstName} ${this.lastname} `
    }

    printName(){
        console.log(`My first name is ${this.firstName}`)
    }
}

class student extends Person{
    constructor(firstname , last , email , groupNo){
        super(firstname ,last , email);     // to access parent derived property
        this.grpNo = groupNo;
    }
    getName(){
        return `Name is ${this.firstName} ${this.lastname} `
    }
}


let student1 = new student('Bill' , 'Gates' , 'billgates@gmail.com' , 25);
console.log(student1);
console.log(student1.getName());





// let person2  = new Person('M S' , 'dhoni' , 'msd@gmail.com');
// console.log(person2);
// console.log(person2.getName());
// console.log(person2.printName());

