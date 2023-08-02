// 1.Vnesete koordinati na edna tochka i kazete vo koj kvadrant se naoga
let oskaX = prompt("Vnesi koordinati po x-oska");
let X = Number(oskaX);
let oskaY = prompt("Vnesi koordinati po y-oska");
let Y = Number(oskaY);
 
if(X==0 && Y==0) {
    console.log("Tockata e vo centarot na koordinatniot sistem")
}else if(X>0 && Y>0) {
    console.log("Tockata e vo prviot kvadrant")
}else if(X<0 && Y>0){
    console.log("Tockata se naoga vo vtoriot kvadrant")
}else if(X<0 && Y<0) {
    console.log("Tockata se naoga vo tretiot kvadrant")
}else if(X>0 && Y<0) {
    console.log("Tockata se naoga vo cetvrtiot kvadrant")
}else if(X>0 && Y==0) {
    console.log("Tockata se naoga na pozitivniot del od X-oskata")
}else if(X==0 && Y>0) {
    console.log("Tockata se naoga na pozitivniot del od Y-oskata")
}else if(X<0 && Y==0) {
    console.log("Tockata se naoga na negativniot del od X-oskata")
}else if(X==0 && Y<0) {
    console.log("Tockata se naoga na negativniot del od Y-oskata")
};

// 2.Napravete lista od omileni knigi
let omileniKnigi = ["Ejmi ja nema", "Gospodin voobrazen", "Nikade bez kerka mi", "Patnik 23", "Pacientot"];
console.log(omileniKnigi); //Pecati ['Ejmi ja nema', 'Gospodin voobrazen', 'Nikade bez kerka mi', 'Patnik 23', 'Pacientot']
console.log(omileniKnigi.length); //Pecati dolzina na niza //Pecati 5

let lastElement = omileniKnigi.pop(); //se brise posledniot element bez da se zacuva
console.log(lastElement); //Pecati Pacientot

omileniKnigi.push("Solja caj"); //dodava element na kraj od nizata
console.log(omileniKnigi); //Pecati ['Ejmi ja nema', 'Gospodin voobrazen', 'Nikade bez kerka mi', 'Patnik 23', 'Solja caj']

let firstElement = omileniKnigi.shift(); //go brise prviot element od nizata
console.log(omileniKnigi); //Pecati ['Gospodin voobrazen', 'Nikade bez kerka mi', 'Patnik 23', 'Solja caj']

omileniKnigi.unshift("Devojkata so biserka obetka");//dodava element na pocetok na nizata
console.log(omileniKnigi); //Pecati ['Devojkata so biserka obetka', 'Gospodin voobrazen', 'Nikade bez kerka mi', 'Patnik 23', 'Solja caj']

console.log(omileniKnigi.slice(1,4)); //Pecati ['Gospodin voobrazen', 'Nikade bez kerka mi', 'Patnik 23'] //gi prikazuva elementite od index 1 do index 4(bez 4ot element) bez da gi izbrise
console.log(omileniKnigi); //Pecati ['Devojkata so biserka obetka', 'Gospodin voobrazen', 'Nikade bez kerka mi', 'Patnik 23', 'Solja caj']

console.log(omileniKnigi.splice(1,1)); //Pecati ['Gospodin voobrazen'] //brise kolku sto ke definirame elementi pocnuvajki od onoj index koj ke go definirame kako prv parametar
console.log(omileniKnigi); //Pecati ['Devojkata so biserka obetka', 'Nikade bez kerka mi', 'Patnik 23', 'Solja caj']
