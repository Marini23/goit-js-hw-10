import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const select = document.querySelector(`.breed-select`);
const loader = document.querySelector(`.loader`);
const error = document.querySelector(`.error`);
const div = document.querySelector(`.cat-info`);




fetchBreeds().then(data => {
    console.log(`fetchBreeds`)
    select.innerHTML = data.map(element => `<option value="${element.id}">${element.name}</option>`).join(``);
})
.catch(() => error.remoteAttribute(`hidden`))
.finally(() => loader.setAttribute(`hidden`, true))


select.addEventListener(`change`, onChangeBreed);

function onChangeBreed(e) {
    // loader.removeAttribute(`hidden`);
    let breedId = e.target.value;
    // console.log(breedId);
    fetchCatByBreed(breedId)
        .then(data => {
            console.log(`fetchCatByBreed`)
            console.log(data);
            div.innerHTML = data.map(element =>
                `<div><img src="${element.url}" alt="photo cat" width="500" height="400"/></div>`).join(``)
            data.map(el => el.breeds.forEach(cat => {
                const array = [cat];
                const findCat = array.find(option => option.id === breedId);
                // console.log(findCat.description);
                const makrup = `<h2>${findCat.name}</h2>
                <p>${findCat.description}</p>
                <h3>Temperament</h3>
                <p>${findCat.temperament}</p>`
                div.insertAdjacentHTML(`beforeend`, makrup)
            }))
        })
        .catch(() => {
        error.removeAttribute(`hidden`)
        })
        .finally(() => {
        loader.setAttribute(`hidden`,true)
    })
}




