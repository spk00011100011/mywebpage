document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;

    if (name) {
        document.getElementById("responseMessage").textContent = `¡Gracias, ${name}! 🌸 Tu mensaje ha sido enviado con éxito.`;
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").textContent = "Por favor, completa los campos. 💔";
    }
});
