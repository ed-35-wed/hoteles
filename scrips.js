// Función para mostrar más información sobre el Centro de Convenciones
function mostrarInformacion() {
    const info = document.getElementById("informacion-extra");
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Manejo de la reserva
document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const numPersonas = document.getElementById("num-personas").value;
    alert(`Reserva confirmada para ${nombre} en la fecha ${fecha} para ${numPersonas} personas.`);
});
