console.log('hello');

const URL = 'https://jsonplaceholder.typicode.com/users';
const getData = (URL) =>
    new Promise((resolve, reject) => {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((error) => reject(error));
    });

getData(URL)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


