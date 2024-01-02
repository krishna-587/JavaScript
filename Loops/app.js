
//for loop
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if(i==j){
            break;
        }
        console.log(`i = ${i} and j = ${j}`);
        
    }
    
}

//while
let num = 100;
while (num >= 0) {
    console.log(num);
    num = num - 10;
}

//for-in (objects)

let person = {
        name: 'sam',
        age: 21,
        isMale : true
}
for (let item in person) {
        console.log(`${item} ==> ${person[item]}`);
}

let arr = ['sam' , 'hardik', 'akshay' , 'sachin'];
//for-of

for(let item of arr){
    console.log(item);
}
