const butOnClick = function(){
    const p = document.getElementById("parrafo")
    p.innerText = "Texto modificado"
}

const main = function(){
    const button = document.getElementById("but")
    button.addEventListener("click", butOnClick)
}

main()