

let menu = ['palak panner' , 'chole chawal' , 'Chicken dhatura' , 
'panner butter masala' , 'manchirian' , 'pizza' , 'Egg burji' , 'soda'];

function isVeg(food){
    if(food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1){
        return false;
    }
    return true;
}

let newMenu = menu.filter(isVeg);
console.log(menu);
console.log(newMenu);