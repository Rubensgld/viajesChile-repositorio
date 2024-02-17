$(document).ready(function () {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $(".card-img-top").on("click", function () {
        $(".card-body").toggle();
    })

    $(".btn").click(function () {
        alert("Tu mensaje fue enviado correctamente")
    })

    $("#plane").on("dblclick", function () {
        $(this).css("color", "#fff")
        console.log("click")

    })

    $("#mountain").on("dblclick", function () {
        $(this).css("color", "#fff")
    })

    $("#route").on("dblclick", function () {
        $(this).css("color", "#fff")
    })
    console.log("ready!");

    let form = document.querySelector("#form")
    let btn = document.querySelector("#bottom")

    function validar() {
        let deshabilitar = false

        if (form.exampleFormControlInput1.value == "") {
            deshabilitar = true
        }
        if (form.escribelElAsunto.value == "") {
            deshabilitar = true
        }
        if (form.exampleFormControlTextarea1.value == "") {
            deshabilitar = true
        }
        if (deshabilitar == true) {
            btn.disabled = true
        } else {
            btn.disabled = false
        }
    }


    form.addEventListener("keyup", validar)






})
