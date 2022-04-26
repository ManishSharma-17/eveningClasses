 // 1. get p element
 // 2. create function which increases the currnet value of p by 1
 // 3. add that function to button

 let adding = document.getElementById('addNum'); //0

 function addNum() {
     adding.innerHTML = +adding.innerHTML + 1;
 }