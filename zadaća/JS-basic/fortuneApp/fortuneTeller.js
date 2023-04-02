function isStringWithLettersOnly(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function fortuneTell() {
    let name = document.getElementById("inputName").value;
    let surname = document.getElementById("inputSurname").value;
    if (!isStringWithLettersOnly(name) || !isStringWithLettersOnly(surname)) {
        alert("Enter your name and surname using only letters (A-Z)!");
        return;
    } else if (name === "" || surname === "") {
        alert("Enter your name and surname using only letters (A-Z)!");
        return;
    }
    let randomLoadingText = document.getElementById("fortuneTextBox");
    let loadingFortune = ["Consulting the spirits...", "Gazing deep in crystal ball...", "Looking far into the future...", "Clearing my chakras...", "Jumping into the time machine...", "I see... I see... difficult question that is, my young padawan...", "I am your father, Luke!"];
    let randomFortuneLoadingText = Math.floor(Math.random() * loadingFortune.length);
    let user = name.toUpperCase() + " " + surname.toUpperCase();
    let odgovor = "your answer is:";
    let fortune = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Do not count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let fortuneText = document.getElementById("fortuneTextBox");
    randomLoadingText.innerText = loadingFortune[randomFortuneLoadingText];
    fortuneText.innerHTML = "<p id='textBox'>" + randomLoadingText.innerText.toUpperCase() + "</p>";
    let timeoutId = setTimeout(() => {
        fortuneText.innerHTML = "<p id='textBox'>" + user + " " + odgovor.toUpperCase() + " " + fortune[randomIndex].toUpperCase() + "</p>";
    }, 5000);
    document.addEventListener("click", () => {
        clearTimeout(timeoutId);
        fortuneTell();
    });
};