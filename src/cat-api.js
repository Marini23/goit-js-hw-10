import axios from "axios";
// axios.defaults.headers.common[`x-api-key`] = `live_78i5BMDbEVtvm4bF6CtHppjOH5FDijMJq91f3amTjvcMULPghgj1K1AAmwWlV7xq`;
// axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

// export function fetchBreeds() {
//     axios.get(`./breeds`).then(response => {
//         if (response.status !== 200) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
// }
console.log(`5`);

const options = {headers: {
    'x-api-key': `live_78i5BMDbEVtvm4bF6CtHppjOH5FDijMJq91f3amTjvcMULPghgj1K1AAmwWlV7xq`
}
}

export function fetchBreeds() {
return fetch(`https://api.thecatapi.com/v1/breeds`, options)
    .then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText)
    }
return response.json();
})}



