// Obtener referencia a la música
const music = document.getElementById("bg-music");
music.volume = 0.3;

// Iniciar música al presionar "Start"
document.getElementById("start-btn").addEventListener("click", function() {
    music.play().catch(error => console.log("Autoplay bloqueado:", error));
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("name-screen").classList.remove("hidden");
});

// Variables para intentos
let nameAttempts = 0;
let passwordAttempts = 0;

// Validación del Nombre
document.getElementById("name-btn").addEventListener("click", function() {
    const nameInput = document.getElementById("name-input").value.toLowerCase();
    if (nameInput === "gabriela") {
        document.getElementById("name-screen").classList.add("hidden");
        document.getElementById("password-screen").classList.remove("hidden");
    } else {
        nameAttempts++;
        if (nameAttempts >= 2) document.getElementById("name-hint").classList.remove("hidden");
    }
});

// Validación de Contraseña
document.getElementById("password-btn").addEventListener("click", function() {
    const passwordInput = document.getElementById("password-input").value;
    if (passwordInput === "teamo") {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("message-screen").classList.remove("hidden");
    } else {
        passwordAttempts++;
        document.getElementById("password-input").value = "";
        if (passwordAttempts >= 2) document.getElementById("password-hint").classList.remove("hidden");
    }
});

// Botón de Continuar
document.getElementById("continue-btn").addEventListener("click", function() {
    document.getElementById("message-screen").classList.add("hidden");
    document.getElementById("final-screen").classList.remove("hidden");
});

// Botón "Sí"
document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("final-screen").classList.add("hidden");
    document.getElementById("love-message").classList.remove("hidden");
    document.body.style.background = "#ff66b2";
});

// Botón "No" se mueve más lejos
document.getElementById("no-btn").addEventListener("mouseover", function() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    this.style.transform = `translate(${x}px, ${y}px)`;
});
