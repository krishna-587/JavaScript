

// let obj = {
//     OS :90,
//     CN : 90,
//     Web : 100,
//     ds : 100,
//     total : function(){        //methods
//         return(90 + 90 + 100 + 100);
//     },
//     call : function(){
//         return('call me');
//     }
// }


//by using this keyword
let obj1 = {
    name : 'krishna',
    OS :90,
    CN : 90,
    Web : 100,
    ds : 100,
    total : function(){        //methods
        return(this.OS + this.CN + this.Web + this.ds);
    },
    call : function(){
        return(`call ${this.name}`);
    }
}

console.log(obj1.total());
console.log(obj1.call());