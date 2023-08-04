function bye (element){
    var disappear = document.querySelector('.join');
    disappear.remove();
}

var countnum = 0;
var newnum1 = document.querySelector("#counter1");
var newnum2 = document.querySelector("#counter2");
var newnum3 = document.querySelector("#counter3");


function increment1() {
  countnum++;
  newnum1.innerHTML = countnum;
}
function increment2() {
  countnum++;
  newnum2.innerHTML = countnum;
}
function increment3() {
  countnum++;
  newnum3.innerHTML = countnum;
  //countnum =0;
}