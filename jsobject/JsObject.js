
function executor(resolve, reject) {
    console.log('executor');
    resolve("resolved value");
}
setTimeout(() => console.log('time out1'));
console.log("hi");


var onSuccess2 = (t) => {
    setTimeout(() => console.log('time out2'));
    console.log('onSuccess2', t);
    return t;
};

var onSuccess3 = (t) => {
    console.log('onSuccess3', t);
    return t;
};
var onSuccess4 = (t) => {
    setTimeout(() => console.log('time out3'));
    console.log('onSuccess4', t);
    return t;
};

var promise = new Promise(executor);
promise.then(onSuccess2).then(onSuccess4);
promise.then(onSuccess3)
setTimeout(() => console.log('time out4'));


// console.log('promise5', promise5);



// var isPromise = promise.catch( t => {console.log('on fail', t);
// return 'from catch1';
// });
// console.log('isPromis', isPromise);
// isPromise.then(t=> console.log('the2',t));
// isPromise.catch(t=> console.log('catch2', t));
// console.log("called after onsuccess");


// promise.then(t=> console.log('onSuccess', t));



// console.log(window.prop.asd);


// console.log(12 - 'asd');





// console.log(x);
// x=10; // it is similar to window.x=10. Hence is not hoisted.
// var y=20;




// var obj1 = {
//     prop:"asd"
// }

// var obj2 = Object.create(obj1);
// console.log(obj2)

// console.log(delete obj2.prop);

// console.log(obj2.prop)

// var output = (function() {
//     delete obj1.prop;
//     return obj1.prop;
// })();

// console.log(output)

// let fr = {
//     name:"Deva"
// }

// Object.freeze(fr);
// fr.name = 'Litu';
// console.log(fr.name);

// function dummy()
// {
//     return {
//         test:1
//     }
// }

// console.log(typeof dummy());

// // Promise.resolve().then(function(){
// //     console.log(2);
// // })
// // setTimeout(function(){
// //     console.log(3);
// // }, 0);


// console.log(4);

// function sayHello()
// {
//     return 
//     "Hello";
// }

// sayHello();
// console.log(10 + 20 + "hi" + 10 + 20);

// var bar = 1;
// foo = {};
// foo : {
//     bar:2;
//     baz : ++bar;
// }

// console.log(foo.baz);

// for(let i=0; i < 4 ; i++)
// {
//     setTimeout(function(j){
//         console.log(i)
//     }, 800);
// }


// // var prop = 'prop';
// // console.log(delete window.prop);
// // console.log(prop);

// // window.prop2 = 'prop2';
// // console.log(prop2);
// // console.log(delete window.prop2);
// // // console.log(prop2);

// // console.log(y);
// // console.log(x);

// // x=10;
// // var y = 10;