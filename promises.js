const fetchDataWithPromise = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const data = {userId: 1, username: 'Ali Abbasi'};
            resolve(data)
        }, 2000);
    });
};

fetchDataWithPromise()
.then(data =>{
    console.log(`User ID: ${data.userId}, ${data.username}`);
})

.catch(err =>{
    console.log('Error:', err);
})

