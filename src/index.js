import { fetchBreeds } from "./cat-api";

const select = document.querySelector(`.breed-select`);
const loader = document.querySelector(`.loader`);
const error = document.querySelector(`.error`);
const catInfo = document.querySelector(`.cat-info`);

fetchBreeds().then(data => {
    select.innerHTML = data.map(element => `<option value="${element.id}">${element.name}</option>`).join(``);
})
.catch(() => paragraphError.remoteAttribute(`hiden`))
.finally(() => paragraphLoading.setAttribute(`hiden`, true))









