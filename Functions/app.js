
// let a=10;
// let b=20;

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(a,b));

function sum1(){
    let marks1= 10;
    let marks2= 30;
    console.log(marks1+marks2);
}

sum1();
sum1();


function triple(marks3){ //parameter
    let marks1= 10;
    let marks2= 30;
    console.log(marks1+marks2+marks3);
}

triple(60); //argument
triple(120); //argument


function triple1(marks3=5){ //parameter
    let marks1= 10;
    let marks2= 30;
    console.log(marks1+marks2+marks3);
}

triple1(20);


//default parameterised function
function suum2(marks1 , marks2=40){ //parameter
    console.log(marks1);
    console.log(marks2);

}

suum2(20);
suum2(20,50);


//default parameterised function
function sum2(marks1=40 , marks2){ //parameter
    console.log(marks1);
    console.log(marks2);  //undefined

}

sum2(20);


//Grade calculator

function grade(marks){
    if(marks > 80){
        return 'O';
    }
    else if(marks > 60){
        return 'A';
    }
    else if(marks > 40){
        return 'B';
    }
    else if(marks > 20){
        return 'C';
    }
    else{
        return 'Fail';
    }
}

console.log(grade(87));
console.log(grade('gopal'));

//output
function summ(num1,num2){
    return num1+num2;
}

console.log(10+20);


function summ(num1,num2){
    return num1+num2;
}

// let ans = summ(10 , 'krishna');
// let ans = summ(10 , true);
// let ans = summ(10 , false);
let ans = summ('100' , true);
console.log(ans);
console.log(typeof(ans));



function suum2(){
    let num1 = 10;
    let num2 = 20;
    return (num1+num2);
}

console.log(suum2());


function fuc(num1 , num2){
    return num1+num2;
}
console.log(fuc(30));