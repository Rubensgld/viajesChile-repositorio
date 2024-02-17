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
});
