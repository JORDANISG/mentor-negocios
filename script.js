// responses.js

// Respuestas predefinidas
const respuestas = {
    "¿qué es el branding?": "El branding es el proceso de construir una identidad única para tu marca, incluyendo nombre, logotipo, colores y mensajes clave.",
    "¿cómo elijo un nombre para mi negocio?": "Un buen nombre debe ser memorable, fácil de pronunciar y relacionado con tu mercado objetivo.",
    "¿qué incluye el branding?": "Incluye elementos visuales como logotipo, colores, tipografía, y mensajes clave como propuesta de valor y llamados a la acción.",
    "¿cómo defino mi propuesta de valor?": "Identifica lo que hace única a tu marca y cómo resuelve los problemas de tus clientes de manera diferente a la competencia."
};

// Función para procesar la pregunta y mostrar la respuesta
function getResponse() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const responseContainer = document.getElementById("responseContainer");

    // Mostrar un indicador de carga
    responseContainer.style.display = "block";
    responseContainer.textContent = "Pensando...";

    setTimeout(() => {
        let respuesta = "Lo siento, no tengo una respuesta para esa pregunta. Intenta con otra.";

        // Buscar palabras clave
        if (userInput.includes("branding")) {
            respuesta = "El branding incluye logotipos, colores, tipografías y mensajes clave para tu marca.";
        } else if (userInput.includes("nombre")) {
            respuesta = "Un buen nombre debe ser memorable, fácil de pronunciar y relacionado con tu mercado.";
        } else if (userInput.includes("valor")) {
            respuesta = "Tu propuesta de valor debe destacar cómo resuelves el problema de tus clientes mejor que la competencia.";
        }

        // Mostrar respuesta final
        responseContainer.textContent = respuesta;
    }, 1000); // Simula un retraso de 1 segundo
}
