//01 - Ejemplo de uso de callback

function sum(num1, num2){
    return num1 + num2;
}

//Función con argumento callback.
function calc(num1, num2, callback){
    return callback(num1,num2);
}

console.log(calc(2,6,sum));

//02 - Ejemplo de uso de callback.

function printDate(dateNow){
    console.log(dateNow);
}
//Función con argumento callback.
function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000);
}

date(printDate);