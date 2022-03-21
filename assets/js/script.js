let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {

    let txt = document.querySelector('#txtNome')

    if (nome.value.length < 3){
        txt.innerHTML = "Nome Inválido";
        nome.style.border = "3px solid red"
        txt.style.fontsize = "12px"
    } else {
        txt.innerHTML = "Nome Válido";
        nome.style.border = "3px solid green"
        nomeOk = true
    }
}

function validaEmail() {

    let txt = document.querySelector('#txtEmail')
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

    if (email.value.match(regex)){
        txt.innerHTML = "E-mail Válido";
        email.style.border = "3px solid green"
        emailOk = true
    } else {
        txt.innerHTML = "E-mail Inválido";
        email.style.border = "3px solid red"
    }
}

function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txt.innerHTML = 'texto muito grande, digite no máximo 100 caracteres'
        assunto.style.border = "3px solid red"
        txt.style.display = 'block'
    } else {
        txt.style.display = 'none'
        assunto.style.border = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}

