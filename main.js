
// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:


let osudi = [];

//mám vygenerované osudí od 1 do 48. přidávám čísla do pole pomocí push
for (let i = 1; i <= 49; i = i++) {
    osudi.push(i);
}

// nebo také můžeme zapsat let buttonLosuj = "";
// a pak ho definovat na Addeventlistener buttonLosuj.Addeventlistener (click, losuj());

function losuj() {

    // z osudí vyberu 7 náhodných čísel

    let tazenaCisla = [];
    vyherniCisla.innerHTML = "";

    for (let i = 0; i < 7; i = i + 1) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];

        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);

        console.log(tazenaCisla);
        console.log(osudi);
    }

    //vypis do html

    let vyherniCisla = document.querySelector('#vyherni-cisla');

    for (let j = 0; j < tazenaCisla.length; j++) {
        vyherniCisla.Cisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
    }
}