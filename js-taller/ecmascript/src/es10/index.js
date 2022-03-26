// flat

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));
//console.log(array.flat(2)); //siendo 2 el nivel de profundidad, default 1.

//mapear el array y añadir más funcionalidad
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));


//trimStart

let hello = '                hello world!        ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());


//simplificar bloque try catch

try{

}catch{
    error // no es necesario implementarlo.
}


// Transformar array a objetos.


let entries = [["name","ayose"],["age",38]];
console.log(Object.fromEntries(entries));

//descripción elementos simbolo

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);