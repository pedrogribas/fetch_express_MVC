import fetch from 'node-fetch';
async function funcLerApi() {
    let data = []
    return fetch("https://www.googleapis.com/books/v1/volumes?q=+intitle&printType=books&maxResults=40")
    .then((response) => response.json())
    .then((responseData) => {
        return responseData;
    });

}
let x = []
await funcLerApi().then (response => x = response);
export default x;
