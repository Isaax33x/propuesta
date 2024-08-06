const messages = [
    "¡Vamos, solo dilo ya! 😄",
    "¿En serio vas a decir que no? 😔",
    "Te prometo que es una buena idea. 😊",
    "No me hagas rogar más. 😩",
    "Sé que quieres decir sí. 😉",
    "¿No me vas a dar una oportunidad? 🤔",
    "Estoy esperando tu respuesta. ⏳",
    "No puedo esperar más, di sí. 😅",
    "Este es el momento perfecto. ✨",
    "Solo un pequeño sí, por favor. 🙏",
    "¡Vamos, solo un sí! 😁",
    "¿En serio quieres decir no? 😟",
    "No te arrepentirás, di sí. 🤗",
    "Sé que quieres decir sí. 😌",
    "¿Qué tienes que perder? 🤷‍♂️",
    "Estoy aquí esperando. 🕒",
    "No me dejes esperando. 😞",
    "Di sí, y todo estará bien. 🌟",
    "Es solo un sí, nada más. 🥺",
    "¿No puedes decir sí? 😕",
    "Te prometo que será genial. 😍",
    "Solo un sí, por favor. 🙇‍♂️",
    "No te arrepentirás, di sí. 💪",
    "Es una propuesta simple. 🥰",
    "Vamos, no tardes más. ⏰",
    "¿Por qué no decir sí? 🤷‍♀️",
    "¡Solo un sí, por favor! 🥺",
    "Estoy esperando ansioso. 😓",
    "Di sí, y seremos felices. 💖",
    "Es una oportunidad única. ✨",
    "¡No me hagas esperar más! 😫",
    "Tu sí hará que mi día. 😊",
    "Vamos, solo un sí, por favor. 🥺",
    "¡Vamos, ya es hora de decidir! 😃",
    "No quiero seguir esperando. 🙄",
    "Solo un sí, no es mucho pedir. 🙌",
    "Hazme un favor y di sí. 😍",
    "Estamos tan cerca, solo un sí. 😅",
    "Este es el momento perfecto para decir sí. 💫",
    "No te arrepentirás, lo prometo. 🤝",
    "¡Vamos, di sí y hazme feliz! 😁",
    "¿Aún estás pensando en ello? 🤔",
    "¿Por qué no simplemente decir sí? 🤗",
    "Vamos, solo un pequeño sí. 😊",
    "Es solo una palabra, pero significa mucho. 💖",
    "Solo un sí, y todo será perfecto. 🌟",
    "¡No me hagas esperar más! 😫",
    "Tu respuesta es muy importante. 🥺",
    "Dime sí y harás que mi día. 😄",
    "¡Hazme feliz, solo di sí! 😊",
    "Solo un sí y todo cambiará. 🌈",
    "¿Qué tal un sí para hacerme sonreír? 😁",
    "Tu sí será la mejor decisión. 💡",
    "Vamos, no te arrepentirás. ✨",
    "Solo un sí para alegrar el día. 😄",
    "Di sí y todo será perfecto. 💖",
    "Solo un pequeño sí, por favor. 🥺",
    "¿No puedes decir sí, por favor? 😢",
    "Tu sí significa mucho para mí. 💕"
];

const maxScaleYes = 1.5; // Límite máximo de escala para el botón Sí
const maxScaleNo = 1.2; // Límite máximo de escala para el botón No
const maxScaleContainer = 1.3; // Límite máximo de escala para el cuadro

const scaleIncrementYes = 0.05; // Incremento de escala para el botón Sí
const scaleIncrementNo = 0.03; // Incremento de escala para el botón No
const scaleIncrementContainer = 0.02; // Incremento de escala para el cuadro

const soundUrl = 'sounds/fnaf_celebration.mp3'; // Ruta del sonido
const audio = new Audio(soundUrl);

let attempt = 0;

function decline() {
    attempt++;
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');
    const container = document.querySelector('.container');

    if (attempt >= messages.length) {
        document.getElementById('message').innerText = "¡Por favor, solo di sí! 😔";
        return;
    }

    document.getElementById('message').innerText = messages[attempt];

    // Calcular el nuevo tamaño con límite
    const newScaleYes = Math.min(1 + scaleIncrementYes * attempt, maxScaleYes);
    const newScaleNo = Math.min(1 + scaleIncrementNo * attempt, maxScaleNo);
    const newScaleContainer = Math.min(1 + scaleIncrementContainer * attempt, maxScaleContainer);

    yesButton.style.transform = `scale(${newScaleYes})`;
    noButton.style.transform = `scale(${newScaleNo})`;
    container.style.transform = `scale(${newScaleContainer})`;

    // Añadir efecto brilloso al botón Sí
    if (newScaleYes === maxScaleYes) {
        const brillianceLevel = Math.min(Math.floor(attempt / 10) + 1, 3);
        yesButton.classList.remove('brilliant-1', 'brilliant-2', 'brilliant-3');
        yesButton.classList.add(`brilliant-${brillianceLevel}`);
    }
}

function accept() {
    const container = document.querySelector('.container');
    const yesButton = document.querySelector('.yes');
    const noButton = document.querySelector('.no');
    
    // Reemplazar el contenido del cuadro con el mensaje de agradecimiento
    document.getElementById('message').innerText = "¡Gracias por decir que sí! 🎉";

    // Eliminar los botones
    yesButton.remove();
    noButton.remove();

    // Reproducir el sonido de celebración
    audio.play();
}
