import axios from "axios";
axios.defaults.headers.common[`x-api-key`] = `live_78i5BMDbEVtvm4bF6CtHppjOH5FDijMJq91f3amTjvcMULPghgj1K1AAmwWlV7xq`;
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
    return axios.get(`/breeds`).then(response => {
        // if (!response.ok) {
        //     throw new Error(response.status);
        // }
        return response.data;
    })
}

export function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`)
        .then((response) => {
    //     if (!response.ok) {
    //         throw new Error(response.statusText);
    // }
    return response.data;
})
}





