

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

// console.log(obj.Web);
// console.log(obj.total());
// console.log(obj.call());



// another way

let obj = {
    OS :90,
    CN : 90,
    Web : 100,
    ds : 100,
    total : function(){        //methods
        return(obj.OS + obj.CN + obj.Web + obj.ds);
    },
    call : function(){
        return('call me');
    }
}


console.log(obj.total());
console.log(obj.call());