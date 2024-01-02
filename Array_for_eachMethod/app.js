

// forEach methods (array)

let student = ['ankit','gopal','krishna','akshay','vikash'];

// student.forEach(function(item){
//     console.log(item);
// })

/*student.forEach(function(item , index){
    console.log(item);
})


student.forEach(function(item , index){
    console.log(`item is on index ${index}`);
})*/


// map() Method

let marks = [10 , 18 , 45 , 4 , 25 , 9 , 5 , 12];

/*let newmarks = marks.map(function(item , index){
    // return item*2;
    return [item*2 , index];
})
console.log(marks);
console.log(newmarks);*/


// filter()

let score = [1,2,3,4,5,6,7,8,9,10];

/*let filterScore = score.filter(function(item){
    if(item >= 5){
        return true;
    }
    return false;
})
console.log(score);
console.log(filterScore);*/


// sort()

let arr = [12 , 2 , 34 , 3 , 88 , 90 , 16 , 36 , 76];

let newArray = arr.sort(function(a,b){
    // return a-b;  // asc
    return b-a;  // des
});
console.log(newArray);