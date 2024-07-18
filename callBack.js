const fetchDataWithCallback = (callback) =>{
    setTimeout(() => {
        const data = {userId: 1, username: 'Tariq Sheikh'}
        callback(data)
    }, 2000);
}

const displayData = (data) =>{
    console.log(`User Id: ${data.userId}, Username: ${data.username}`);
}

fetchDataWithCallback(displayData);