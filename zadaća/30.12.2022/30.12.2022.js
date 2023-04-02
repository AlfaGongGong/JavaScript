function pdvIzracun () {
    const userInput = prompt('Unesite cijenu artikla');
    let inputPrice = parseInt(userInput);
    const pdv = 'PDV = 17%';
    let pdvInputPrice = (inputPrice / 100) * 17;
    let finalPdvPrice = inputPrice + pdvInputPrice;
    alert(`Cijena artikla: 
    IZNOS BEZ PDV-a = ${userInput}
    ${pdv} 
    IZNOS SA PDV-om = ${finalPdvPrice}`);
};
