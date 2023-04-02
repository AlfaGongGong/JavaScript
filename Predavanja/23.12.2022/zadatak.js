function brojVocki() {
    let brojVocaTekst = prompt("Unesi broj omiljenih voćki");
    let brojVoca = parseInt(brojVocaTekst);
    const fruits = [];
    for (let i = 0; i < brojVoca; i++) {
        let vocka = prompt("Unesi naziv voća");
        fruits[i] = vocka;
    }
        let imeVoca = "<ul>";
        for (let j = 0; j < fruits.length; j++) {
            imeVoca = imeVoca + "<li>" + fruits[j] + "</li>";
    }
    imeVoca = imeVoca + "</ul>";
    let lista = document.getElementById("listaVocki");
    lista.innerHTML = imeVoca;
    };
