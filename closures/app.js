


/*function func(){
    let username = 'einstein';
    function printName(){
        console.log(username);
    }
    return printName;
}

let returnedValue = func();
returnedValue();*/
// console.log(returnedValue);


/*function anything(){
    let naam = 'krishna';

    function giveName(){
        console.log(naam);
    }
    // giveName();

    return giveName;
}

let fun = anything();

fun();*/


// real life use

/*unction counter(){
    let count = 0;

    function getCount(){
        return count;
    }
    return getCount;
}

let counter1 = counter();
console.log(counter1());*/





/*function counter(){
    let count = 0;

    return {
        getCount : function(){
            return count;
        }
    };
}

let counter1 = counter();
console.log(counter1.getCount());*/


// application small

function counter(){

    let count = 0;

    return {
        getcount : function(){
            return count;
        },
        increment : function(){
            count+=1;
        },
        decrement : function(){
            count-=1;
        },
        reset : function(){
            count=0;
        }
    };
}

let counter1 = counter();
console.log(counter1.getcount());
counter1.increment();
counter1.increment();
console.log(counter1.getcount());
counter1.decrement();
console.log(counter1.getcount());
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.getcount());
counter1.reset();
console.log(counter1.getcount());