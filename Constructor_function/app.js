


function fun(){

}

let result = fun();
console.log(result);



// constructor

// function user(){

//     this.username = 'krishna';
//     this.emal = 'krishnagopalsingh587@gmail.com';

// }

// let user1 = new user();
// console.log(user1);




/*function User(user , mail){

    this.username = user;
    this.emal = mail;
    this.description = function(){
        return `My name is ${this.username}`;
    }
}

let user1 = new User('krishna', 'krishnagopalsingh587@gmail.com');
let user2 = new User('gopal', 'gopalsingh123@hotmail.com');
console.log(user1);
console.log(user1.description());
console.log(user2);
console.log(user2.description());*/





function User(user , mail){

    this.username = user;
    this.emal = mail;
    
}

User.prototype.description = function(){
    return `My name is ${this.username}`;
}

let user1 = new User('krishna', 'krishnagopalsingh587@gmail.com');
let user2 = new User('gopal', 'gopalsingh123@hotmail.com');
console.log(user1);
console.log(user1.description());
console.log(user2);
console.log(user2.description());