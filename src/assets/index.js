$(document).ready( function () {
    // TABLAS
    $('#ListaEdificios').dataTable({
        "language": {url: '//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json'},
        "responsive": true,
        "columnDefs": [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: -1 }
        ],
        "order": [[0, "desc"]]
    });
    $('#ListaDepartamentos').DataTable();

    // EFECTOS
    
    $("#titulo-banner").hover(function () {
        $(this).css("color", "white");
        $(this).css("border-color", "white");
        $(this).css("font-size", "80px");

    }, function () {
        $(this).css("color", "black");
        $(this).css("border-color", "black");
        $(this).css("font-size", "70px");
    }
    );
    $(".btn-alquilar").click(function () {
        swal("La opción alquilar aún no está disponible, gracias...!");
    });
    $(".ver-mas").hide();
    $("#btn-acerca").click(function () {
        $("#acerca").show(500);
        $(this).css("color", "blue");
    });
    $("#img-mision").click(function (e) { 
        $("#mision").toggle(2000);
        
    });
    $("#img-vision").click(function (e) { 
        $("#vision").toggle(2000);
    });
    $("#btn-verMas").click(function (e) { 
        $("#card-body").slideToggle();
    });
    $("#btn-verMas2").click(function (e) { 
        $("#card-body2").slideToggle();
    });
    $("#btn-verMas3").click(function (e) { 
        $("#card-body3").slideToggle();
    });
    $("#btn-verMas4").click(function (e) { 
        $("#card-body4").slideToggle();
    });
    $("#btn-verMas5").click(function (e) { 
        $("#card-body5").slideToggle();
    });
    $("#btn-verMas6").click(function (e) { 
        $("#card-body6").slideToggle();
    });
    $(".precio").mouseleave(function () {
        $(this).css("color", "gray","opacity:", "0.2");
    });

    $(".precio").mouseover(function () {
        $(this).css("color", "black","opacity:", "0.2");
    });

    $(".iconos").mouseleave(function () {
        $(this).animate({
            left: "50px",
            height: "50",
            width: "50px",
            opacity: "0.3"
        })
    });
} );
// LAS FUNCIONES VAN FUERA DE READY
function iconosleave(id){
    document.getElementById(id).style.width = "40px";
    document.getElementById(id).style.height = "40px";
}

function iconosover(id){
    document.getElementById(id).style.width = "50px";
    document.getElementById(id).style.height = "50px";
}