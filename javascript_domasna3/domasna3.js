//1.Vnesete dvocifren broj preku prompt i ispecatete go brojot kako zbori. primer: 23-dva tri, 57- pet sedum
var num = prompt ("Vnesi dvocifren broj");
var numString = num.toString();

var firstNum = parseInt(numString[0]);
var secondNum = parseInt(numString[1]);

var numbers = ["nula", "eden", "dva", "tri", "cetiri", "pet", "sest", "sedum", "osum", "devet"];

if(num >=10 && num <=99) {
    console.log(numbers[firstNum]);
    console.log(numbers[secondNum]);
}else {
    console.log("Vnesovte pogresen broj")
};

//2.Kreirajte objekt koj ke sodrzi vrednosti koi se od tip string, broj, niza i objekt
let akademija = {
    akademijaIme: "Semos",
    pocetok: 2023,
    predmet: "javascript",
    ucenici: ["Angela", "Irena", "Bojan", "Damjan", "Dance", "Gjoko", "Gorazd", "Kosta", "Krunislas", "Maja", "Miso", "Sanja", "Tihana", "Vanja", "Viliam", "Vojdan"],
    casovi: 10, 
    predavanja: "sreda i petok",
    profesor: {
        ime: "Sanja",
        prezime: "Taskovska",
        email: "mail@gmail.com"
    },
    predavanjeOnline: true,
    kniga: "Osnovi na JavaScript",
    brojNaStranici: 250
}

console.log(akademija); //Pecati {akademijaIme: 'Semos', pocetok: 2023, predmet: 'javascript', ucenici: Array(16), casovi: 10, …}
console.log(akademija.profesor); //Pecati {ime: 'Sanja', prezime: 'Taskovska', email: 'mail@gmail.com'}



//3.Ispecatete gi vrednostite na objektot koj sto e vrednost na objektot od prethodnata zadaca
console.log(akademija.profesor.ime); //Pecati Sanja
console.log(akademija.profesor.prezime); //Pecati Taskovska
console.log(akademija.profesor.email); //Pecati mail@gmail.com
