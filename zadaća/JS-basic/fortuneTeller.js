function isStringWithLettersOnly(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function fortuneTell() {
    let name = document.getElementById("inputName").value;
    let surname = document.getElementById("inputSurname").value;

    if (!isStringWithLettersOnly(name) || !isStringWithLettersOnly(surname)) {
        alert("Enter your name and surname using only letters!");
        return;
    }

    let user = name.toUpperCase() + " " + surname.toUpperCase();
    let odgovor = "your answer is:";
    let fortune = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Do not count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let fortuneText = document.getElementById("fortuneTextBox");

    fortuneText.innerText = user + " " + odgovor.toUpperCase() + " " + fortune[randomIndex].toUpperCase();
}