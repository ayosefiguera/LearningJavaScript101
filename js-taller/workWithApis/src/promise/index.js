const someThingWillHappen = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups..!!!')
        }
    });
};


someThingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const someThingWillHappen2 = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True')
            },2000)
        }else {
            const error = new Error('whooops!');
            reject(error);
        }
    });
};

someThingWillHappen2()
    .then(response => console.log(response))
    .catch((err)=>console.error(err));


//
Promise.all([someThingWillHappen(), someThingWillHappen2()])
    .then(response =>{
        console.log('Array of result', response)
    })
    .catch(err => {
        console.error(err)
    })