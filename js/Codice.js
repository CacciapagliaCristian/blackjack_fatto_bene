// Definizione della variabile balance
var balance = 0;

// Funzione per passare alla nuova pagina includendo il valore di balance come parametro nell'URL
function redirectToPage(pageUrl) {
    window.location.href = pageUrl + "?balance=" + encodeURIComponent(balance);
}

// Funzione per aggiornare il valore di balance
function updateBalance(newBalance) {
    balance = newBalance;
}

// Chiamate alle funzioni con la nuova URL specificata
function carica_denaro() {
    redirectToPage("../html/Carica_denaro.html");
}

function settings() {
    redirectToPage("../html/Settings.html");
}

function gioca() {
    redirectToPage("../html/Campo_da_gioco.html");
}

function home() {
    redirectToPage("../html/Home.html");
}
