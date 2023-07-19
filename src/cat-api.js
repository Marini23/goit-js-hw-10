import axios from "axios";
// axios.defaults.headers.common[`x-api-key`] = `live_78i5BMDbEVtvm4bF6CtHppjOH5FDijMJq91f3amTjvcMULPghgj1K1AAmwWlV7xq`;
// axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

// export function fetchBreeds() {
//     axios.get(`/breeds`).then(response => {
//         if (response.status !== 200) {
//             throw new Error(response.status)
//         }
//         return response.data;
//     })
// }

// export function fetchCatByBreed(breedId) {
//     axios.get(`/images/search?breed_ids={breed.id}`)
//     .then((response) => {
//         if (!response.ok) {
//         throw new Error(response.statusText)
//     }
// return response.data;
// })
// }
// -----------

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

export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options)
    .then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText)
    }
return response.json();
})
}




