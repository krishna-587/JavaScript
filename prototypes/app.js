


let todo = {
    title : 'buy flowers',
    desc : function(){
        return `ypurs task is to ${this.title}`
    }
};

console.log(todo.title);
console.log(todo.desc());
// console.log(todo.valid);

console.log(todo.toString());