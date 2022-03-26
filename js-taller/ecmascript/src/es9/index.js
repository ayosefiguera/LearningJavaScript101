
// es09
//Desestructuración mejorada
const obj = {
    name: 'ayose',
    age: '38',
    country: 'ES',
};



let {country, ...all} = obj;
console.log(all);

const base = {
    name: 'ayose',
    age: '38',
}

const obj1 = {
    ...base,
    country: 'ES'
}
console.log(obj1);


//02 - promise finally


const helloWorld = () =>{
    return new Promise((resolve, reject) =>
    {
        (true)?resolve('Hello'):reject(new Error);
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));

//regexData


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);