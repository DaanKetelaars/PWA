import {
    renderData
} from "./renderData.js"
import {
    cleanData
} from "./cleanData.js";
import {
    getData,
} from "./getData.js"
import {
    routing
} from "./routing.js";
import {
    loading,
    hideLoading
} from "../loader/loader.js";

// zeroState text
const zeroState = document.querySelector('.zeroState');


const fetchData = () => {
    loading()

    const allArtWorks = document.querySelectorAll("section ul");

    allArtWorks.forEach(item => {
        item.remove()
    })

    let userInput = document.getElementById('textField').value;
    const apiKey = `https://www.rijksmuseum.nl/api/nl/collection?key=b5LmWYv7&q=${userInput}`
    fetch(apiKey)
        .then(response => {
            hideLoading()
            zeroState.classList.add('hide')
            return response.json();
        })
        .then(getData)
        .then(cleanData)
        .then(renderData)
        .then(routing)
        .catch(error => {
            console.log(`log ${error}`);
        });
}
export {
    fetchData
}