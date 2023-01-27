const myModal = new bootstrap.Modal("#register-modal");

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession =  document.getElementById("session-check").checked;

    const account= getAccount(email);

    if(!account){
        alert("Opps! Verifique o usuário ou a senha.");
        return;
    }

    if(account){
        if(account.password !== password);
        alert("Opps! Verifique o usuário ou a senha.");
        return;
        
        saveSession(email,checkSession);

    };

    window.location.href = "home.html";
});






//CRIAR CONTA 

document.getElementById("create-form").addEventListener("submit", function(e) {
e.preventDefault();
    
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length<5){
        alert("Preencha o campo com email válido.");
        return;
    }

    if(password.length<4){
        alert("Preencha a senha com no mínimo 4 dígitos.");
        return;
    }

    saveAccount({
        login: email,
        password:password,
        transactions:[]
    });

    myModal.hide();
    alert("Conta criada com sucesso.");

}); 

function saveAccount(data){
localStorage.setItem(data.login, JSON.stringify(data));

}


function saveAccount(data,saveAccount){
    if(saveAccount){
        localStorage.getItem("session",data);
    }

    sessionStorage.getItem("logged",data);
}

function getAccount(key){
    const account= localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return"";

}
