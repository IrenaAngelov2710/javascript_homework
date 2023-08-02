// 1. Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
// output во конзолата :
// #
// ##
// ###
// ####
// #####
// ######

for (let i = 1; i <= 6; i++) {
    let tower = " ";
    for (let j = 1; j <= i; j++) {
      tower += "#";
    }
    console.log(tower);
  };
  
// 2. Имате две низи:направете нова низа во која што ќе ги ставите сите имиња кои двете низи ги делат (Jill, Kate)
// var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
// var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
// var Mutual = []

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var Mutual = [];

for ( let i = 0; i < JohnFollowers.length; i++) {
        if(JohnFollowers[i] == JaneFollowers[i]) {
            Mutual.push(JohnFollowers[i])
        }
    };

console.log(Mutual);

// 3.  креирајте функција која се вика exclaim.
// Оваа функција прима еден параметар, кој е стринг. Кога ќе ја повикате, оваа функција треба да го врати тој стринг и на неговиот крај да додаден извичник. Пример za резултат во конзолата : Javascript!

function exclaim(str){
    let string = prompt("Vnesi string");
    console.log(string+"!")
};

exclaim();

// 4.  Креирајте низа наречена books. Нека има пет објекти, во кој ќе има три properties:
// Title -> име на книгата //string
// Author -> име на авторот //string
// Price -> цена на книгата //number
// Цел на задачата: вратете ги книгите кој се поевтини од 400 денари во нова низа, наречена filteredBooks

let books = [
    { Title: "Gospodin voobrazen", Author: "Vaj Kilend", price: 294},
    { Title: "Deteto", Author: "Sebastijan Ficek", price: 343},
    { Title: "Patnik 23", Author: "Sebastijan Ficek", price: 450},
    { Title: "Tajnata na soprugot", Author: "Lien Moriarti", price: 273},
    { Title: "Site stravovi na svetot", Author: "Aleks Finlej", price: 490}
];

// Prvo resenie
// let filteredBooks = [];

// for( let i = 0; i < books.length; i++){
//     if(books[i].price < 400){
//         filteredBooks.push(books[i])
//     }
// }

// console.log(filteredBooks)

// Vtoro resenie
let filteredBooks = books.filter(book=>book.price<400);
console.log(filteredBooks);

// 5. Креирајте функција која се вика LargestNumber.
// Оваа функција прима еден параметар: низа од бројки. Вратете го најголемиот број од таа низа.

let numbers = [2,5,7,13,42,74,56,14,17];

function LargestNumber(numbers) {
    return Math.max(...numbers)
  };

  console.log(LargestNumber(numbers));
