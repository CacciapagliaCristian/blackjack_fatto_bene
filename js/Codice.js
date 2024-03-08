let mazzo;
let mano;
var balance = 0;

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
function genera_mazzo(){
    let i = 0;
    for (i = 0; i < 48; i++)
    {
        mazzo[i] = ;  //random
    }
}
function controllo(mano){
    let conteggio = 0, i=0;
    let ununo, dueuno, treuno, quattrouno;
    let esci;

    do {
        conteggio = conteggio + mano[i];
        if (mano[i] == 1 && ununo== false){
            ununo = true;
        }
        else{
            if (mano[i] == 1 && quattrouno == false && treuno == false)
        }
    }while(esci)
}