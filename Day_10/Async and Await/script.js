// ----- Async programming -----

// console.log("One");
// console.log("two");
// console.log("three");

// // setTimeout()
//  function hello(){
//     console.log("Hello");
//  }
//  setTimeout(hello,3000);

//  console.log("four");
//  console.log("five");

// //  Callbacks 

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(10,20,sum);

// ----- Callback hell -----

async function getData(dataID,getCallback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataID);
            resolve("Success.....");
            // reject("Some Error ocuured during fetching");
            if(getCallback){
                getCallback();
            }
        },5000);
    })
}

// getData(1,()=>{
//     console.log("Getting data2....");
//     getData(2,()=>{
//         console.log("Getting data3....");
//         getData(3,()=>{
//             console.log("Getting data4....");
//             getData(4);
//         })
//     })
// })

// ----- Promises -----
 const  asyncFunction1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("Success....");
        },3000);
    })
}
const asyncFunction2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("Success....");
        },3000);
    })
}

// const p1 = asyncFunction1();
// p1.then((res)=>{
//     console.log(res);
// });

// const p2 = asyncFunction2();
// p2.then((res)=>{
//     console.log(res);
// });

// Alternative for above code

// ------ Promise Chaining -----
        // console.log("Fetching data1.....");
        // asyncFunction1().then((res)=>{
        //     // console.log(res);
        //     console.log("Fetching data2.....");
        //     asyncFunction2().then((res)=>{
        //         // console.log(res);
        //     })
        // });

        // console.log("Fetching data1.....");
        // asyncFunction1().then((res)=>{
        //     console.log(res);
        //     console.log("Fetching data2....");
        //     return asyncFunction2();
        // }).then((res)=>{
        //     console.log(res);
        // })

// let promise  = new Promise((resolve,reject)=>{
//     // console.log("Hello World");
//     //resolve("Satisfied....");
//     reject("Some error ocuured");  
// });

// promise.then((res)=>{
//     console.log("Need fullfilled",res);
// });


// promise.catch((err)=>{
//     console.log("Rejcted",err);
// });

// let getPromise = getData(1);
// console.log(getPromise);

// ------ Async-await ------

// async function hello() {
//     setTimeout(()=>{
//         console.log("Data1");
//     },3000);
// }

// async function callHello() {
//     await hello();
// }

// callHello();

async function callGetData() {
    console.log("Fetching Data 1.....");
    await getData(1).then((res)=>{
        console.log(res);
    });
    console.log("Fetching Data 2.....");
    await getData(2);
    console.log("Fetching Data 3.....");
    await getData(3);
    console.log("Fetching Data 4.....");
    await getData(4);
    console.log("Fetching Data 5.....");
    await getData(5);
}

// ------ IIFE ------

(async function () {
    console.log("Fetching Data 1.....");
    await getData(1).then((res)=>{
        console.log(res);
    });
    console.log("Fetching Data 2.....");
    await getData(2);
    console.log("Fetching Data 3.....");
    await getData(3);
    console.log("Fetching Data 4.....");
    await getData(4);
    console.log("Fetching Data 5.....");
    await getData(5);
})();
