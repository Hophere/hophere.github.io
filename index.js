const input = document.getElementById("in");
const button = document.getElementById("btn");
const out = document.getElementById("out");
button.onclick = function(){
    num = parseInt(input.value);
    (isNaN(num) == false) ? out.textContent = num + 1: out.textContent = "Error";
}