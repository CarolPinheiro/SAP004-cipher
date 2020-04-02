import cipher from './cipher.js';

let encodeButton = document.getElementById("encode");
let decodeButton = document.getElementById("decode");


encodeButton.addEventListener("click", function(event) {
    event.preventDefault();
    let dataInput = document.getElementById("data-input").value;
    let offsetInput = parseInt(document.getElementById("offset").value);
    document.getElementById("results").innerHTML = cipher.encode(offsetInput,dataInput);
})

decodeButton.addEventListener("click", function(event) {
    event.preventDefault();
    let dataInput = document.getElementById("data-input").value;
    let offsetInput = document.getElementById("offset").value;
    document.getElementById("results").innerText = cipher.decode(offsetInput,dataInput)
})


