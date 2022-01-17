
function validaString() {
    var input = document.getElementById("teste")
    var strinIner = input.value;

    if(/[a-z]/gm.test(strinIner)){
        document.querySelector('body').append("O string possui: Letras minusculas | ")
    } else {
        document.querySelector('body').append(" ")
    }
    if(/[0-9]/gm.test(strinIner)){
        document.querySelector('body').append("Possui numeros | ")
      } else {
        document.querySelector('body').append(" ")
      }
    if(/[A-Z]/gm.test(strinIner)){
        document.querySelector('body').append("Possui letras MAIUSCULAS | ")
    } else {
        document.querySelector('body').append(" ")
    }
    if(/[!@#$%*()_+^&{}}:;?.]/gm.test(strinIner)){
        document.querySelector('body').append("Possui caracteres especiais | ")
    } else {
        document.querySelector('body').append(" ")
    }

}

document.getElementById('btn').addEventListener('click', validaString, false)
