onload = () => {
    document.body.classList.remove("container");

    // --- Crear alerta bonita con tu mensaje ---
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.innerHTML = `
        <h1>
            Mi cielo, mi amor, mi niña hermosa…<br><br>
            Quiero que sepas que cada uno de mis días tiene más sentido gracias a ti,
            porque tu presencia llena mi vida de luz y de alegría.
            Eres mi razón para sonreír, la calma en mis tormentas y la ternura que siempre soñé encontrar. <br><br>
            No hay palabras suficientes para expresar lo agradecido que estoy con la vida
            por cruzar nuestros caminos. Eres mi compañera, mi amor más puro,
            y cada instante contigo se convierte en un recuerdo que guardo en lo más profundo de mi corazón. <br><br>
            Te amo mucho mi amor 💙 <br><br>
            <span style="font-size: 18px;">Att: Alejandro</span>
        </h1>
        <button id="closeAlertBtn">Cerrar 💖</button>
    `;
    document.body.appendChild(alertBox);

    // Mostrar alerta
    alertBox.style.display = "block";

    // Botón para cerrarla
    document.getElementById("closeAlertBtn").onclick = () => {
        alertBox.style.display = "none";
    };
};
