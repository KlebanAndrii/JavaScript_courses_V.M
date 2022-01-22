//==========================================  xhr  ==============================================//

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        xhr.send(JSON.stringify(body));
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const userA = {
    name: 'Andrii',
    age: 38
};

// sendRequest('POST', requestURL, userA)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//================================================   Fetch   ===================================================//

function sendFetchRequest(method, url, body = 0) {
    const headers = {
        'Content-Type': 'application/json'
    };

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(error => {
            const e = new Error('I am sorry');
            e.data = error;
            throw e;
        })
    })
}

// sendFetchRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


sendFetchRequest('POST', requestURL, userA)
    .then(data => console.log(data))
    .catch(err => console.log(err))