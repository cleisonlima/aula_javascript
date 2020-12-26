
function clicou(){
   
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar!";
 //alert("Obrigado por clicar");
}
function trocar(elemento){
   // document.getElementById("mousemover").innerHTML = "Obrigado por passar o Mouse";

    //alert("trocar texto");
    elemento.innerHTML = "&#128567";

}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";

}
function load(){
    alert("Página carregada");

}
function funcaoChange(elemento){
console.log(elemento.value)
}



//var nome = "Cleison Lima";
//var idade = 33;

//alert(nome + " Tem " + idade + " anos");

/*var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log();

var nome = "Cleison Lima";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLocaleLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/