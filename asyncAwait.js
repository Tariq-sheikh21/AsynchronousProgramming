//3. Async/Await with Arrow Functions
const fetchDataWithPromise = () =>{
return new Promise((resolve, reject) =>{
    setTimeout(() => {
        const data = {userID: 1, username: 'Ahmad Khan'}
        resolve(data)
    }, 1000);
})
}

const displayData = async () =>{
try {
    const data = await fetchDataWithPromise();
    console.log(`UserId: ${data.userID}, Username: ${data.username}`);
} catch (error) {
    console.log('Error', error);
}
}

displayData();