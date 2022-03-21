import {
    fetchData
} from "./data/fetchData.js";
import {
    ScrollJacking
} from './SmoothScroll/ScrollJacking.js';


// smooth scrolling
ScrollJacking();

// on submit show results
const form = document.querySelector("form");


form.addEventListener("submit", event => {
    event.preventDefault();
    fetchData()
})