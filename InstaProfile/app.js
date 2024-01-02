
// wrong way of doing

/*function step1(){
    setTimeout(function(){
        console.log('image select krna hai');
        return 'image';
    } , 4000)
}


function step2(image){
    setTimeout(function(){
        console.log(`making it ${image} beautiful`);
        return 'show it good';
    },2000);
}

function step3(filterImage){
    setTimeout(function(){
        console.log(`give good caption on ${filterImage}`);
        return 'caption for photo';
    },3000);
}


function step4(final){
    setTimeout(function(){
        console.log(`${final} uploaded`);
        
    },2000);
}

//calling

let image = step1();
let filterimage = step2();
let finalimage = step3(filterimage);
step4(finalimage);
*/


// better way

function step1(fn){
    setTimeout(function(){
        console.log('selecting image');
        // return 'image';
        fn('image');
    } , 4000);
}

function step2(image , cb){
    setTimeout(function(){
        console.log(`applying filter to ${image}`);
        // return 'filtered image';
        cb('filtered image');
    } , 2000);
}

function step3(filterImage , cb){
    setTimeout(function(){
        console.log(`give good caption on ${filterImage}`);
        // return 'caption for photo';
        cb('caption for photo');
    },3000);
}


function step4(final){
    setTimeout(function(){
        console.log(`${final} uploaded`);
        
    },2000);
}


step1(function(image){
    step2(image , function(filterImage){
        step3(filterImage , function(finalImage){
            step4(finalImage);
        })
    });
});