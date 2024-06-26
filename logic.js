let img = null;
let text = null;
let opt = null

function redirectToOption(option) {
    switch(option) {
        case 1:
            img = "https://i.pinimg.com/originals/c9/02/0a/c9020a6e157290d997a93c037a47e281.gif";
            text = "¿Lo hacemos por el chiquito?";
            opt = "1";
            window.location.href = `opcion1.html?img=${encodeURIComponent(img)}&text=${encodeURIComponent(text)}&opt=${encodeURIComponent(opt)}`;
            break;
        case 2:
            img = "https://i.pinimg.com/originals/35/a5/a7/35a5a7cc6f96013d4a8dd8e0af571e7c.gif";
            text = "¿Me dejas ser Batman?";
            opt = "2";
            window.location.href = `opcion1.html?img=${encodeURIComponent(img)}&text=${encodeURIComponent(text)}&opt=${encodeURIComponent(opt)}`;
            break;
        case 3:
            img = "https://i.pinimg.com/originals/7d/cc/16/7dcc165beeef87e4b3f31f756ca61ce7.gif";
            text = "¿Me diras que quieres comer? hermosura ";
            opt = "3";
            window.location.href = `opcion1.html?img=${encodeURIComponent(img)}&text=${encodeURIComponent(text)}&opt=${encodeURIComponent(opt)}`;
            break;
        case 4:
            img = "https://i.pinimg.com/originals/4a/ed/d4/4aedd44ab39a02514290e2b05871555f.gif";
            text = "¿Vas a escojer la peli? ";
            opt = "4";
            window.location.href = `opcion1.html?img=${encodeURIComponent(img)}&text=${encodeURIComponent(text)}&opt=${encodeURIComponent(opt)}`;
            break;
        case 5:
            img = "https://i.pinimg.com/originals/0f/40/87/0f40879be74de324814cc98b2ad2a6ee.gif";
            text = "Sera salida sin alcohol? ";
            opt = "5";
            window.location.href = `opcion1.html?img=${encodeURIComponent(img)}&text=${encodeURIComponent(text)}&opt=${encodeURIComponent(opt)}`;
            break;
        default:
            console.error('Opción no válida');
            break;
    }
}

function selectRandomOption() {
    var randomNumber = Math.floor(Math.random() * 4) + 1; // Genera un número aleatorio entre 1 y 4
    redirectToOption(randomNumber);
}

