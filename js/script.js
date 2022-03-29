// Lista persone
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

