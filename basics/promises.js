const myPromise = new Promise((resolve,reject)=>{ //resolve tab chalega jab api call sucessful hogi or reject taj jab uncessful hogi
    if (true) {
        setTimeout(()=>{
            resolve("I have sucedded");
        },1000);
    } else {
        reject('i have failed');
    }
});

myPromise.then(value=>console.log(value)).catch(rejectValue => console.log(rejectValue) ); //ab yha value resolve bhi ho sakti ya reject bhi or vo my promise pe depend krega ki ky avalue di hai usne