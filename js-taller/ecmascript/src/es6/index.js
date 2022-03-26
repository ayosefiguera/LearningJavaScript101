// ECMAScript 6

//01 - Default params
function newFunction(name, age, country) {
  var name = name || "ayose";
  var age = age || 38;
  var country = country || "ES";
  console.log(name, age, country);
}

//--es6--
function newFunction2(name = "ayose", age = 38, country = "ES") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Jorge", 21, "FR");

//02 - Template literals

let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world + "!";
console.log(epicPhrase);

//--es06--

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//03 - Multiline strings.

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
  "Donec id velit sollicitudin nisi elementum dictum. Nulla vel arcu " +
  "vel leo laoreet condimentum ";
console.log(lorem);

//--es06--

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Donec id velit sollicitudin nisi elementum dictum. Nulla vel arcu
vel leo laoreet condimentum. Fusce quam tellus, pellentesque id ornare a, 
vehicula sit amet erat. Aenean cursus eleifend dolor, id rhoncus felis scelerisque vel.`;
console.log(lorem2);

//04 - Desectructuración
let person = {
  name: "ayose",
  age: 38,
  country: "ES",
};

console.log(person.name, person.age, person.country);

//--es06--
let {name, age, country } = person;
console.log(name, age, country);

//05 - Spread Operator
let team1 = ["Maria", "Israel", "Efrain"];
let tema2 = ["Carlos", "Juan", "Beli"];

let superEquipo = [
  "ayose",
  "Maria",
  "Israel",
  "Efrain",
  "Carlos",
  "Juan",
  "Beli",
];
console.log(superEquipo);
//es06
let superEquipo2 = ["ayose", ...team1, ...tema2];
console.log(superEquipo2);

//06 -Object Params
let name = "ayose";
let edad = 32;

obj = { name: name, edad: edad };
console.log(obj);

//--es6--
obj2 = { name, edad };
console.log(obj2);

//06 - arrow Function

const names = [
  { name: "Maria", age: 39 },
  { name: "ayose", age: 38 },
];

let listOfNames = names.map(function (item){
    console.log(item.name)
})

//--es6--

let listOfNames2 = names.map(item => console.log(item.name));


const listOfNames3 = (name,age,contry)=>{
    ...
};


const listOfNames4 = name =>{
    ...
};

// en este caso nos retorna el valor.
const square = num => num * num;

//07 - Promesas

const helloPromise = () =>{
  return new Promise((resolve, reject) =>{
    if(false){
      resolve('Hey!');
    }else{
      reject('Ups!!');
    }
  });
}


helloPromise()
  .then(response => console.log(response))
  .then(()=>console.log('El resultado fue true'))
  .catch(error => console.log(error))
  .then(()=>console.log('El resultado fue error.'));

//08 - Clases

class Calculator{
    constructor(){
      this.valueA = 0;
      this.valueB = 0;
    }

    sum(valueA, valueB){
      this.valueA = valueA;
      this.valueB = valueB
      return this.valueA + this.valueB;
    }
}
const calc = new Calculator;
console.log(calc.sum(7, 5));


//09 - importación

import { hello } from './modules';
hello();


//10 - Generadores
function* helloWorld(){
  let a = 0;
  while (true){
    a ++;
    yield a;
  }
};
const genereatorHello = helloWorld();
console.log(genereatorHello.next().value);
console.log(genereatorHello.next().value);
console.log(genereatorHello.next().value);


