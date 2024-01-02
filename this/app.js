


// 1. regular invocation

function fun(){
    console.log(this); // in this case this points to window
}
fun();


// 2. method invocation

/*let obj = {
    number : 2,
    fun : function(){
        console.log(this)
    }
}

obj.fun();*/  //this is pointing to the object over which it is called



// question:

let obj = {
    number : 2,
    fun : function(){
        console.log(this)
    }
}

let myFun = obj.fun;
myFun();


// question :
let obj1 = {
     num : 20 ,
     fn : function(){
        function calculate(){
            console.log(this);
        }
        calculate();  //regular calling
     }

}

obj1.fn();


// 3. constructor function calling

function CreateObj(){
    this.X = 20;

}
CreateObj.prototype.kl = function(){
    console.log('i am good');
}

let obj2 = new CreateObj();
console.log(obj2);
console.log(obj2.X);
obj2.kl();
// point to newly created object



// 4. Indirect calling -->  .call() , .apply() , .bind()

let obje = {
    a : 20,
    fn : function(a,b,c){
        console.log(this , a , b , c);
    }
}
let ob = {
    a : 50,
    b : 100
}

let obj3 = {
    name : 'krishna'
}

// obje.fn();
// ob.fn();  //error
// obje.fn.call(ob);
// obje.fn.apply(ob);

obje.fn.call(ob , 1,2,3);
obje.fn.call(obj3 , 1,2,3);
obje.fn.apply(obj3 , [1,2,3]);

// jab bhi tum .call() method ka istamal kr rhe hote ho tb jo app call ke ander mention krte ho , apka this usse point krta hai


// bind


let vj = {
    fn : function(){
        console.log(this);
    }
}

let myfu = vj.fn.bind(vj);  //context of this
myfu();

