
// link Data base
URL = 'https://storage-epets.herokuapp.com/usuario';

//GET login

function loginUser(){
    fetch(URL)
    .then(res => res.json())
    .then(usuario =>{
        let email_in = document.getElementById('in_email').value;
        let password_in = document.getElementById('in_password').value;
        password_in.toString;

        var validar_email = new Boolean ();
        var validar_senha = new Boolean();
        
        for(i = 0; i<usuario.length; i++){            
            validar_email = (verificaEmail(email_in, usuario[i].email));
            console.log(email_in, validar_email);
            if(validar_email == true){
                break;
            }                        
        }
        
        for(i = 0; i<usuario.length; i++){            
            validar_senha = (verificaSenha(password_in, usuario[i].password));
            console.log(email_in, validar_senha);
            if(validar_senha == true){
                break;
            }                        
        }    

        if(validar_email == true && validar_senha == true){
            window.open("../pag/dados_clinica.html");
        }else{
            alert("Login invalido");
        } 
    }); 
}


function verificaEmail(email, emailBD){
    if(email == emailBD){
        return true;
    }
    return false;
}
function verificaSenha(password, passwordBD){
    if(password  == passwordBD){
        return true;
    }
    return false;
}


//POST Cadastro de usuarios
const cadastroForm = document.getElementById('login-form');

function createUser(){
    console.log("passando");
    const usuario = JSON.stringify({
        id: Math.floor(Math.random() * 10),
        email: document.getElementById('email').value,
        cep: document.getElementById('cep').value,
        cnpj: document.getElementById('cnpj').value,
        password: document.getElementById('password').value,
        opcao: document.getElementById('opcao').value           
    })

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: usuario
    })
    .then(res => res.json())
    .then(() =>location.reload);
}