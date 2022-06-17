var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elMan = document.querySelector(".man");
var elBicycle = document.querySelector(".bicycle");
var elCar = document.querySelector(".car");
var elPlane = document.querySelector(".plane");
var elSpan = document.querySelector(".span");


var MAN_SPEED = 3.6;
var BICYCLE_SPEED = 20.1;
var CAR_SPEED = 70;
var PLANE_SPEED = 800;

function checkSpeed (masofa, tezlik){
  var soat = Math.floor(masofa / tezlik);
  var minut = Math.floor((masofa / tezlik - soat) * 60);

  if(soat == 0){
    return (minut + "minut");
  }
  else if(minut == 0){
    return (soat + "soat" );
  }
  else{
    return (soat + ":" + minut + "soat");
  }
}

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var elinputVal = +elInput.value;
  elInput.value = " ";

  if (elinputVal <= 0 || isNaN(elinputVal)) {
    elSpan.textContent = "Qiymat 0 dan katta va son bo'lishi kerak!";
    elMan.textContent = "";
    elBicycle.textContent = "";
    elCar.textContent = "";
    elPlane.textContent = "";
    return;
  } else {
    elSpan.textContent = "";
  }
  elMan.textContent = checkSpeed(elinputVal, MAN_SPEED);
  elBicycle.textContent = checkSpeed(elinputVal, BICYCLE_SPEED);
  elCar.textContent = checkSpeed(elinputVal, CAR_SPEED);
  elPlane.textContent = checkSpeed(elinputVal, PLANE_SPEED);

});


























// var elForm = document.querySelector(".form");
// var elInput1 = document.querySelector(".input1");
// var elInput2 = document.querySelector(".input2");
// var elSpan = document.querySelector(".men");

// elForm.addEventListener("submit" , function(e){
//   e.preventDefault();

//   var elInputVal1 = +elInput1.value;
//   var elInputVal2 = +elInput2.value;
//   var result = elInputVal1 > elInputVal2 ? "Son1 kotta" : "Son2 kotta";

//   elSpan.textContent = result;
// });

// var s1 = 7;
// var s2 = 5;


// console.log 

// function son(num){
//   if(num % 15 == 0){
//     return "FizzBuzz";
//   }
//   if(num % 5 == 0){
//     return "Fizz";
//   }
//   if(num % 3 == 0){
//     return "Buzz";
//   }
//   else{
//     return "Ikkalasiga ham bo'linmaydi";
//   }
// }


// function add(a,c,b){
//   if(c == '+'){
//     return a+b;
//   }
//   else if(c == '-'){
//     return a-b;
//   }
//   else if(c == '*'){
//     return a*b;
//   }
//   else{
//     return a/b;
//   }
// }
// console.log(add(6, '/' , 3));
// function add(a,b){
//   return 6-3;
// }
// console.log(add(a,b));
// function add(a,b){
//   return 6*3;
// }
// console.log(add(a,b));
// function add(a,b){
//   return 6/3;
// }
// console.log(add(a,b));



// function son(num){
//   if(num % 15 == 0){
//     return "FizzBuzz";
//   }
//   if(num % 5 == 0){
//     return "Fizz";
//   }
//   if(num % 3 == 0){
//     return "Buzz";
//   }
//   else{
//     return "Ikkalasiga ham bo'linmaydi";
//   }
// }console.log(son(15));