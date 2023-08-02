// 1.Da se prikazat site iminja na korisnicite  od https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(users=>{
  console.log(users)
  for (userId in users) {
    console.log(users[userId].name)
    }
  });

// 2. Da se kreira input pole, kopce i paragraf. Pri vnesuvanje na ime na grad vo poleto i klik na kopceto, vo paragrafot da se prikaze temperturata vo gradot

window.onload = function(){
   let input = document.createElement("input");
   input.setAttribute('placeholder', 'Enter city');
   document.body.appendChild(input);

   let button = document.createElement("button")
   button.innerHTML = "Submit"
   document.body.appendChild(button)

   let p = document.createElement("p")
   document.body.appendChild(p)

   button.addEventListener("click", fetchWeather);
};

async function fetchWeather() {
    let input = document.querySelector('input');
    let city = input.value;
    const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cd5799692e9625b7115ef06970bb8a6&units=metric`);
    const data = await result.json();
    let p = document.querySelector("p");
    p.innerHTML = `The current temperature in ${city} is ${data.main.temp} degrees.`;
};


