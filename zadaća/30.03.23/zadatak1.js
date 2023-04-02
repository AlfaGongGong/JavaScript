/* ZADATAK 1
napraviti klasu korisnik koja sadrži slijedeća pollja:
 - id
 - ime korisnika
 - prezime korisnika
  - datum rođenj korisnika
 - jmbg korisnika 
 - email korisnika
mora posjedovati parametrizovani konstruktor i mora posjedovato .toString()
 kod:
*/
/*function Korisnik(id, ime, prezime, datumRodjenja, jmbg, email) {
    this.id = id;
    this.ime = ime;
    this.prezime = prezime;
    this.datumRodjenja = datumRodjenja;
    this.jmbg = jmbg;
    this.email = email;
    this.toString = toString;
}

function toString() {
    return this.Id + " " + this.Ime + " " + this.Prezime + " " + this.datumRodjenja + " " + this.Jmbg + " " + this.Email;
}
*/
class Korisnik {
    constructor(id, ime, prezime, datumRodjenja, jmbg, email) {
        this.id = id,
        this.ime = ime,
        this.prezime = prezime,
        this.datumRodjenja = datumRodjenja,
        this.jmbg = jmbg,
        this.email = email,
        this.toString = toString
    }
}

function toString() {
    return this.id + " " + this.ime + " " + this.prezime + " " + this.datumRodjenja + " " + this.jmbg + " " + this.email;
};
const korisnikJasa = new Korisnik(23, 'Jasenko', 'Bozinovic', '14.04.1982.', 1122345678910, 'nekimail@mail.com');

console.log(korisnikJasa.toString());
console.log(korisnikJasa);
