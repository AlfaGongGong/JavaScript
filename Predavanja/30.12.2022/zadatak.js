function userText() {
    let tekst = prompt("unesi tekst");
    let tekstMala = tekst.toLowerCase();
    let modifikovaniTekst = tekstMala.indexOf("banana");
    alert("Pozicija riječi Banana je" + " " + modifikovaniTekst);
}