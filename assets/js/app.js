 // 1. get p element
 // 2. create function which increases the currnet value of p by 1
 // 3. add that function to button

 let addNum = document.getElementById('addNum'); //0

 function addNum() {
     addNum.innerHTML = +addNum.innerHTML + 1;
 }