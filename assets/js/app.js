 // 1. get p element
 // 2. create function which increases the currnet value of p by 1
 // 3. add that function to button

 let adding = document.getElementById('addNum'); //0 
 console.log(adding.innerHTML);

 function addNum() {

     // this one is for adding the given value
     adding.innerHTML = +adding.innerHTML + 1;

     // this one is for multiply the given value
     adding.innerHTML = 1 + adding.innerHTML * 1;
     console.log(adding.innerHTML);

 };