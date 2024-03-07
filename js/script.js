function aviso() {
    // const nome = document.getElementById("nome");
    const nome = document.querySelector("#nome");
    const endereco = document.querySelector("#endereco");
    const telefone = document.querySelector("#telefone");
    const cpf = document.querySelector("#cpf");
    const senha = document.querySelector("#senha");
    
    // console.log(nome.value);

    // se o campo estiver vazio, dê um alert

    if (nome.value == "") {
        alert("erro: nome vazio!");
        return false;
    }
    if (endereco.value == "") {
        alert("erro: endereco vazio!");
        return false;
    }
    if (telefone.value == "") {
        alert("erro: telefone vazio!");
        return false;
    }
    if (cpf.value == "") {
        alert("erro: cpf vazio!");
        return false;
    }
    if (senha.value == "") {
        alert("erro: senha vazio!");
        return false;
    }

    alert("sucesso");
}