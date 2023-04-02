function vrijeme() {
    let vrijeme = new Date().getHours();
    let minuta = new Date().getMinutes();
    if (vrijeme < 10) {
        alert(vrijeme + ":" + minuta + " " + "Dobro jutro!");
    } else if (vrijeme > 10 || vrijeme < 17) {
        alert(vrijeme + ":" + minuta + " " + "Dobar dan!");
    } else {
        alert(vrijeme + ":" + minuta + +" " + "Dobro veče!");
    }
};