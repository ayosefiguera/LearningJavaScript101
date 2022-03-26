// es11 importación dinamica


const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});



//BigInt 

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);


//Promesas

//allSettled no importa si alguna promesa es rechazada, espera que terminen todas y regresa información.
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response=>console.log(response));

//globalThis

console.log(linux);
console.log(globalThis);

//Nullist coalescing operator

const foo = null ?? "default string";
console.log(foo);


//optionanl chainning

const user = {};
console.log(user?.profile?.email);