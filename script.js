function calcularFase() {
    const respuestasSeleccionadas = document.querySelectorAll('input[type="radio"]:checked');
    const totalPreguntas = 20;
    let puntajeTotal = 0;
    let mensaje = "";

    if (respuestasSeleccionadas.length !== totalPreguntas) {
        alert("Por favor, responde todas las preguntas.");
        return;
    }

    respuestasSeleccionadas.forEach((respuesta) => {
        puntajeTotal += parseInt(respuesta.value);
    });

    if (puntajeTotal <= 20) {
        mensaje = "Fase: Anticipación.\nSugerencia: Trata de programar tu tiempo y anticipar tareas para reducir la incertidumbre. Técnicas de relajación como la respiración profunda pueden ser útiles.";
    } else if (puntajeTotal <= 32) {
        mensaje = "Fase: Activación.\nSugerencia: Intenta reducir los síntomas físicos de la ansiedad mediante ejercicios de respiración y pausas activas. Practicar deporte puede ayudar a aliviar el estrés.";
    } else if (puntajeTotal <= 44) {
        mensaje = "Fase: Evaluación.\nSugerencia: Evita la autocrítica excesiva durante el estudio. Enfócate en lo que estás logrando y permítete pausas cuando notes pensamientos negativos.";
    } else if (puntajeTotal <= 56) {
        mensaje = "Fase: Frustración.\nSugerencia: No te castigues por resultados inesperados. Reflexiona sobre las áreas de mejora y ajusta tus expectativas.";
    } else {
        mensaje = "Fase: Recuperación o Adaptación.\nSugerencia: Aprovecha el tiempo para recuperar la calma y ajustar tus métodos de estudio. Consultar a un profesional puede ser beneficioso.";
    }

    document.getElementById("mensajeResultado").innerText = mensaje;
    document.getElementById("resultado").style.display = "block";
}

//funcion separada para no generar confusion
const botonVolverArriba = document.getElementById("volverArriba");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botonVolverArriba.style.display = "block";
    } else {
        botonVolverArriba.style.display = "none";
    }
};

function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}