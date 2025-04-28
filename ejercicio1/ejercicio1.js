const butOnClick = function(){
    const inputNombre = document.getElementById("nombre")
    const inputCorreo = document.getElementById("correo")
    const inputMensaje = document.getElementById("mensaje")
    
    // Validación de vacios
    if(inputNombre.value == "" || inputCorreo.value == "" || inputMensaje.value == ""){
        console.error("No ha llenado todos los datos")
        const divMensaje = document.getElementById("texto_mensaje")
        divMensaje.setAttribute("class", "alert alert-danger centrado")
        divMensaje.innerText = "No ha llenado todos los datos"
        return
    }
    
    // Validación de correo
    if(!inputCorreo.value.includes("@") || !inputCorreo.value.includes(".") ){
        console.error("No utiliza un formato de email valido")
        const divMensaje = document.getElementById("texto_mensaje")
        divMensaje.setAttribute("class", "alert alert-danger centrado")
        divMensaje.innerText = "No utiliza un formato de email valido"
        return
    }

    console.log("Formulario enviado correctamente")
    const divMensaje = document.getElementById("texto_mensaje")
    divMensaje.setAttribute("class", "alert alert-success centrado")
    divMensaje.innerText = "Formulario enviado correctamente"
}

const main = function(){
    const but = document.getElementById("but_enviar")
    but.addEventListener("click", butOnClick)
}

main()