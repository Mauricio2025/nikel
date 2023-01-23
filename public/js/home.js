const myModal= new bootstrap.Modal{"#transction-modal"};
let logged=sessionStorage.getItem{"logged"};
const session = localStorage.getItem{"session"};

let data = {
    transctions:[]
}

document.getElementById("button-logout").addEventListener("click,logout");
document.getElementById("transctions-button").addEventListener("click,function(){
    window.location.href = "transction.html"
    )

//ADICIONAR LANÇAMENTO
document.getElementById("transction-form").addEventListener("submit,function(e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value; 
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name"type-input"] ;checked").value;
    







    "})