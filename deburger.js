function Tafel(aantalGasten) {
    let tafel = this;

    tafel.gasten = [];
    tafel.rekening = rekening;

    activate();

    function activate() {
        let nieuweGasten = [];

        for (let i = 0; i < aantalGasten; i++) {
            nieuweGasten.push(new Gast());
        }

        tafel.gasten = nieuweGasten;
    }

    function rekening() {
        let totaal = 0;

        for (let i = 0; i < tafel.gasten.length; i++) {
            totaal += tafel.gasten[i].rekening();
        }

        return totaal;
    }
}

function Gast() {
    let gast = this;

    gast.bestelling = [],
        gast.rekening = rekening;

    function rekening() {
        let totaal = 0;

        for (let i = 0; i < gast.bestelling.length; i++) {
            totaal += gast.bestelling[i].prijs;
        }

        return totaal;
    }
}

function Item(type, prijs) {
    let item = this;

    item.type = "";
    item.prijs = 0;

    activate();

    function activate() {
        item.type = type;
        item.prijs = prijs;
    }
}

let tafel1 = new Tafel(2);
tafel1.gasten[0].bestelling.push(new Item("truffel", 10));
tafel1.gasten[0].bestelling.push(new Item("witte vedett", 3));
tafel1.gasten[1].bestelling.push(new Item("standaard", 7));
tafel1.gasten[1].bestelling.push(new Item("cola", 2));

///////////////////////////////////////////////////////////////

function Tafel(aantalGasten) {
    let nieuweGasten = [];

    for (let i = 0; i < aantalGasten; i++) {
        nieuweGasten.push(new Gast());
    }

    let tafel = {
        gasten: nieuweGasten,
        get rekening() {
            let totaal = 0;

            for (let i = 0; i < tafel.gasten.length; i++) {
                totaal += tafel.gasten[i].rekening;
            }

            return totaal;
        }
    };

    return tafel;
}

function Gast() {
    let gast = {
        bestelling: [],
        get rekening() {
            let totaal = 0;

            for (let i = 0; i < gast.bestelling.length; i++) {
                totaal += gast.bestelling[i].prijs;
            }

            return totaal;
        }
    };

    return gast;
}

function Item(type, prijs) {
    let item = {
        type: type,
        prijs: prijs
    };

    return item;
}

let tafel1 = new Tafel(2);
tafel1.gasten[0].bestelling.push(new Item("truffel", 10));
tafel1.gasten[0].bestelling.push(new Item("witte vedett", 3));
tafel1.gasten[1].bestelling.push(new Item("standaard", 7));
tafel1.gasten[1].bestelling.push(new Item("cola", 2));