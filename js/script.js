let userName = prompt('Come ti chiami?');
let saluto = 'Ciao';
document.getElementById('saluto').innerHTML = saluto + " " + userName + '!';

// primo esercizio
const emailList = ["elisa@gmail.it","google@yahoo.com","giulia@gmail.com","marco10@yahoo.it","alessiarossi@yahoo.it"];

let invio = document.getElementById('invio');
let nonesistente = document.getElementById('non esistente');
let trovata = false;
let accedi = document.getElementById('accedi');

invio.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    console.log(email);
    for (let i = 0; i < emailList.length; i++) {
        if (emailList[i] === email) {
            trovata = true;
        }
    }
    if (trovata) {
        accedi.innerHTML= 'Email esistente';
    } else {
        accedi.innerHTML= 'Email non esistente';
    }
})

// secondo esercizio
let gioca = document.getElementById('gioca');
let dadi = document.getElementById('dadi');

let utente = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;

dadi.addEventListener("click", function(){
if (utente > computer) {
  gioca.innerHTML = 'Hai vinto!'
} else {
  gioca.innerHTML = 'Ha vinto il computer'
  }
});

