import {encodeAndDecode} from './cipher.js';

let encodeButton = document.getElementById("encode");
let decodeButton = document.getElementById("decode");
let cleanButton = document.getElementById("clean-button")
let dataInput = document.getElementById("data-input");
const offsetInput = parseInt(document.getElementById("offset").value);


encodeButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    console.log(offsetInput.value)
    //document.getElementById("results").innerHTML = encodeAndDecode(offsetInput,dataInput);
})

// decodeButton.addEventListener("click", function(event) {
//     let dataInput = document.getElementById("data-input");
// let offsetInput = parseInt(document.getElementById("offset"));
//     event.preventDefault();
//     document.getElementById("results").innerText = encodeAndDecode(-offsetInput,dataInput)
// })

cleanButton.addEventListener("click", function() {
    document.getElementById("data-input").innerHTML="";
    document.getElementById("offset").innerHTML="";
    document.getElementById("results").innerHTML= "";
})


