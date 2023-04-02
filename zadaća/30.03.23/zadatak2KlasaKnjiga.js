class Knjiga {
    constructor(id, naslov, autor, isbn) {
        this.id = id;
        this.naslov = naslov;
        this.autor = autor;
        this.isbn = isbn;
        this.korisnici = [];
    }

    addKorisnik(ime, prezime) {
        const korisnik = new Korisnik(ime, prezime, this);
        this.korisnici.push(korisnik);
    }

    toString() {
        return `${this.id} ${this.naslov} ${this.autor} ${this.isbn}`;
    }
}

class Korisnik {
    constructor(ime, prezime, knjiga) {
        this.ime = ime;
        this.prezime = prezime;
        this.knjiga = knjiga;
    }
}

const knjiga = new Knjiga(1, 'Insomnia', 'Stephen King', 'ISBN knjige');
knjiga.addKorisnik('Jasenko', 'Bozinovic');
console.log(knjiga.toString());
console.log(knjiga.korisnici);