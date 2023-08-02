// 1. Da se napishe programa za vnesuvanje na faktoriel za nekoj broj
// Num! = 1*2*3*4*5*...*Num primer 6! = 1*2*3*4*5*6

let num = Number(prompt("Vnesi broj"));
let faktoriel = 1;

for(i = 1; i <= num; i++)
    faktoriel *=i


console.log(`Faktoriel od brojot ${num} iznesuva ${faktoriel}`);

// 2. Vnesuvaj broevi vo niza se dodeka ne vneses karakter. Od vnesenite broevi odredi kolku od niv se dellivi so 5 i 3, koi samo so 5 i koi samo so 3

let value = Number(prompt("Vnesi broj za presmetka, vnesi karakter za izlez"));
let dellivoSo5i3 = 0;
let dellivoSo5 = 0;
let dellivoSo3 = 0;

while(!isNaN(value)) {
    value = Number(prompt("Vnesi broj za presmetka, vnesi karakter za izlez"));
if(value % 5 == 0 && value % 3 == 0) {
    dellivoSo5i3++
}
else if(value % 5 == 0) {
    dellivoSo5++
}
else if(value % 3 == 0) {
    dellivoSo3++
}
};

console.log(dellivoSo5i3);
console.log(dellivoSo5);
console.log(dellivoSo3);

// 3. Da se napishe programa koja na ekran ke gi ispecati site cetiri-cifreni broevi kaj koi zbirot na trite najmalku znacajni cifri e ednakov so najznacajnata cifra (5302->5=3+0+2;2310->4=3+1+0)

for(let i = 1000; i <= 9999; i++) {
    let fourDigit = i % 10; 
    let threeDigit = Math.trunc(i % 100 / 10);
    let twoDigit = Math.trunc(i % 1000 / 100);
    let oneDigit = Math.trunc(i / 1000);
    if (oneDigit == twoDigit + threeDigit + fourDigit){
        console.log(i) ;
    i++;
    }
};


// 4. Da se napise objekt koj ke sodrzi poveke kluc-vrednost parovi, kade sto vrednostite ke bidat od tip string, broj, niza i objekt. Da se ispecatat site svojstva na objektot vo sledniot format kluc:vrednost.  Dokolku vrednosta e niza da se napisat elementite od nizata vo nov red so prazni mesta pred elementot. Array.is.Array()

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

for (let key in akademija) {
    if (Array.isArray(akademija[key])) {
        console.log(key + ":" + '\n' + akademija[key].join('\n'))

    } else {
        console.log(key + ":" + akademija[key])
    }
};

// 5. Kreirajte niza od uchenici (ime, prezime, poeni) i presmetajte go prosechniot broj na poeni

let ucenici = [
    { ime: "Angela", prezime: "Antova", poeni: 100},
    { ime: "Irena", prezime: "Angelov", poeni: 85},
    { ime: "Sanja", prezime: "Kostovska", poeni: 92}, 
    { ime: "Dance", prezime: "Baceva", poeni: 99},
    { ime: "Tihana", prezime: "Cingarova", poeni: 88}
];

let zbirNaPoeni = 0;
brojNaUcenici = ucenici.length;

for(let ucenik of ucenici){
    zbirNaPoeni += ucenik.poeni
};

let prosekNaPoeni = zbirNaPoeni / brojNaUcenici;
    console.log(prosekNaPoeni);

// 6. y = x^n primer 125 = 5^3 

let x = prompt("Vnesi vrednost za x(x):");
let n = prompt("Vnesi vrednost za n(n):");
let y = 1;
for(let i = 0; i < n; i++) {
    y *= x;
};

console.log(`Brojot ${x} na ${n} e ${y}`);


// 7.Vnesuvajte broevi vo niza dodeka ne vnesete karakter

let input = prompt("Vnesi broj");
let niza = [];

if(isNaN(input)){
    console.log("Vneseniot input ne e broj")
}
else{
    while(!isNaN(input)){
        niza.push(Number(input))
 		input = prompt("Vnesi broj")
}
};

console.log(niza);

// bonus: Od vneseni broevi vo niza odredete koja e najgolemata max suma od dva posledovatelni broevi

let najgolemaVrednost = 0
for(let i = 0; i < niza.length-1; i++) {
    let suma = niza[i] + niza[i + 1]
    if(suma > najgolemaVrednost) {
        najgolemaVrednost = suma
    }
};

console.log(`Najgolemata vrednost od dva posledovatelni broja e ${najgolemaVrednost}`);

