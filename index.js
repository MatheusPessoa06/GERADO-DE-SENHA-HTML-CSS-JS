# GERADO-DE-SENHA-HTML-CSS-JS
let slider = document.getElementById("slider")
let button = document.getElementById("button")
let resultado = document.getElementById("valor")
let senha = document.getElementById("senha")
let cont_senha = document.getElementById("container-password")
let caracteres = "abcdefghijklmnopqrstuvwxyzuiadsfhasdhfadfsuhABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha = ""

resultado.innerHTML = slider.value

slider.oninput = function(){
    resultado.innerHTML = this.value;
}

function gerarSenha(){
    
    let pass = ""
    for(let i = 0, n = caracteres.length; i < slider.value; ++i){
        pass += caracteres.charAt(Math.floor(Math.random()* n))
        
    }
    console.log(pass)
    
    cont_senha.classList.remove("hide")
    senha.innerHTML = pass;
    novaSenha = pass
}
function copySenha(){
    alert("Senha Copiada!!!")
    navigator.clippboard.writeText(novaSenha)
}
