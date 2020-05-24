import {encodeAndDecode} from './cipher.js';

let encodeButton = document.getElementById("encode");
let decodeButton = document.getElementById("decode");
let cleanButton = document.getElementById("clean-button")
let dataInput = document.getElementById("data-input");
const offsetInput = document.getElementById("offset");


encodeButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("results").innerHTML = encodeAndDecode(Number(offsetInput.value),dataInput.value);
})

decodeButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("results").innerText = encodeAndDecode(-Number(offsetInput.value),dataInput.value)
})

cleanButton.addEventListener("click", function() {
    document.getElementById("data-input").innerHTML="";
    document.getElementById("offset").innerHTML="";
    document.getElementById("results").innerHTML= "";
})



