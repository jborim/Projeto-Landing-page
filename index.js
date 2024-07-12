var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
varsetadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

/*Aqui alteramos o css com uma funcinalidade em javascript na parte do carrossel */

function RolarParaDireita() {
    /*display: none; faz desaparecer para o usuario e display: flex; faz aparecer  */ 
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    samantha.style = "display:flex"
    setaesquerda.style = "display: flex; margin-top: 55px" 
    setadireita.style = "display: none"
}

function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:flex"
    samantha.style = "display:none"
    setaesquerda.style = "display: none"
    setadireita.style = "display: flex; margin-top: 55px;"

}