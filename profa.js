function korisnickiUnos() {
    let unos = prompt("Unesi vrijednost sati i minuta 00-24");
    if (unos >= 18) {
        poruka = ("dobro veče");
        alert(poruka);
    }

    else if (unos <= 18) {
        poruka = ("dobar dan");
        alert(poruka);
    }
    console.log(poruka);
};






