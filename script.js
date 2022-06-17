function mensagem(exibi){
    console.log("Hoje esta muito frio");
}

mensagem()

function nome(nome){
    console.log(nome);
}

nome("Michelle")

function nome2(nome){
    return nome;
}

function dados(nome, idade, estiloMusical){
    console.log(nome, idade, estiloMusical);
}

dados("Michelle", "32", "Rock");

function gosto(filme, musica){
    console.log(`gosto do filme ${filme} e da música.${musica}`);
}

gosto("O Menino do Pijama Listrado", "trevo");

function triplo(numero){
    return numero *3
}
console.log(triplo(3));