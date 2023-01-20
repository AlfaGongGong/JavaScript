function myFunction() {
    const userName = prompt("Unesite ime");
    const userSurname = prompt("Unesite prezime");
    let message = ("divna si osoba i hvala što si se zabavljala s nama,mnogo mi znači to. Nooooojiiii!!!");
    let finalMessage = userName + " " + userSurname + " " + message;
    alert(finalMessage);
    console.log(finalMessage);
}