document.addEventListener("DOMContentLoaded", () => {
    // Selección de botones de cuartos
    const roomButtons = document.querySelectorAll(".btn.room");
    const roomModal = new bootstrap.Modal(document.getElementById("roomModal"));
    const roomTitle = document.getElementById("roomTitle");
    const roomView = document.getElementById("roomView");
    const roomPrice = document.getElementById("roomPrice");
    const roomAmenities = document.getElementById("roomAmenities");
    const whatsappBtn = document.getElementById("whatsappBtn");

    // Datos de cuartos
    const roomData = {
        "401": { view: "Vista a la calle", price: 350, amenities: "Luz, agua, cable, internet cableado, intercomunicador" },
        "402": { view: "Vista interior", price: 300, amenities: "Luz, agua, cable, internet cableado, intercomunicador" },
        "301": { view: "Vista a la calle", price: 350, amenities: "Luz, agua, cable, internet cableado, wifi" },
        "302": { view: "Vista interior", price: 300, amenities: "Luz, agua, cable, internet cableado" },
        "303": { view: "Vista interior", price: 300, amenities: "Luz, agua, cable, wifi, intercomunicador" },
        "201": { view: "Vista interior", price: 300, amenities: "Luz, agua, cable, wifi" },
        "202": { view: "Vista a la calle", price: 350, amenities: "Luz, agua, cable, internet cableado, wifi" }
    };

    // Evento para cada botón de cuarto
    roomButtons.forEach(button => {
        button.addEventListener("click", () => {
            const roomNumber = button.getAttribute("data-room");
            const data = roomData[roomNumber];

            // Actualizar contenido del modal
            roomTitle.textContent = `Información del Cuarto ${roomNumber}`;
            roomView.textContent = data.view;
            roomPrice.textContent = data.price;
            roomAmenities.textContent = data.amenities;

            // Configurar enlace de WhatsApp dinámico
            whatsappBtn.href = `https://wa.me/+51965608494?text=¡Hola!%20Estoy%20interesado%20en%20el%20cuarto%20${roomNumber}.`;

            // Mostrar modal
            roomModal.show();
        });
    });
});
