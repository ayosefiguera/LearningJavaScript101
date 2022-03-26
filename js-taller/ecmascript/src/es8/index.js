// ECMAScript 8

// 13 entries

const data = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

// 14 object.values

const data2 = {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}
const values = Object.values(data2);
console.log(values);

//15 string.padStart

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '---'));

//Async await

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true) ? setTimeout(()=> resolve('Hello World'), 3000)
        :reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log('hello');
    } catch (error){
        console.log(error);
    }
};

anotherFunction();