var countnum1 = 9;
var countnum2 = 12;
var countnum3 = 9;
//var num = document.querySelector(".likeme");
var newnum1 = document.querySelector("#counter1");
var newnum2 = document.querySelector("#counter2");
var newnum3 = document.querySelector("#counter3");

//console.log(num);
//console.log(newnum);
function increment1() {
  countnum1++;
  newnum1.innerHTML = countnum1;
}
function increment2() {
  countnum2++;
  newnum2.innerHTML = countnum2;
}
function increment3() {
  countnum3++;
  newnum3.innerHTML = countnum3;
}
