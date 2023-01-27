const nome="Mauricio souza";
let nome2= "";
let pessoaDefault = {
    nome:"Mauricio",
    idade: "21",
    trabalho:"Programador"
}
let pessoasListaVazia = [];
let nomes=["Mauricio Souza" , "Maria Silva" , "Pedro Silva "];
let pessoas=[
    {
        nome:"Mauricio",
        idade: "21",
        trabalho:"Programador"
    },

    {
        nome:"Maria Silva",
        idade: "25",
        trabalho:"UX/UI Designer"
    }


];


function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);

}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);    

}

function AdicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("-----IMPRIMIR PESSOAS----");
    pessoas.forEach((item)=>{
        console.log("nome:");
        console.log(item.nome);
        
        console.log("idade:");
        console.log(item.idade);
    
        console.log("trabalho:");
        console.log(item.trabalho);
    })

}

imprimirPessoas();

AdicionarPessoa({
    nome:"Pedro Silva",
    idade:"28",
    trabalho:"Porteiro"
})

imprimirPessoas();


//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
    //nome:"Maria Silva",
    //idade: "25",
    //trabalho:"UX/UI Designer"
//})

//recebeEalteraNome("João Silva Perreira");
//recebeEalteraNome("Maria Silva");
//alterarNome();