import {products} from "./data";
import template from "./devices-template.hbs";
console.log(template);

const listRef = document.querySelector(".people_list");

listRef.innerHTML = template({products})