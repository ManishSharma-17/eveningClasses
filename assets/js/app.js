// 1. get p element
// 2. create function which increases the currnet value of p by 1
// 3. add that function to btn

// 1. get the addNum element
// 2. get the save button and store_value element
// 3. creating eventlisterner on click in savevalue element
// 4. in the eventlisterner passing the click and  function in the function passing the conditional statement that do all the neccessory tasks that we want
// a. putting the alert on 0 value submission
// b. creating the switch case which adds the the value and resets the previous value into 0
// i. adding the ", " also with the help of switch case.

const addValue = document.querySelector("#add_value");
const adding = document.querySelector("#addNum");
const saveValue = document.querySelector("#save_value");
const storeValue = document.querySelector("#store_value");

addValue.addEventListener("click", function () {
    adding.innerHTML = 1 + adding.innerHTML * 1;
});

saveValue.addEventListener("click", function () {
    // (adding.innerHTML == 0) ? alert("can't able to add zero value !"): storeValue.innerHTML + false;

    if (adding.innerHTML == 0) {
        alert("can't able to add zero value !")
        return;
    }
    // if (storeValue.innerHTML == "null :(") {
    //     storeValue.innerHTML = adding.innerHTML;
    //     adding.innerHTML = 0;
    //     console.log("hello");
    //     return;
    // }
    // if (storeValue.innerHTML = adding.innerHTML) {
    //     storeValue.innerHTML += ", " + adding.innerHTML;
    //     adding.innerHTML = 0;
    //     console.log("uhi")
    //     return;
    // }

    switch (storeValue.innerHTML) {
        case "null :(":
            storeValue.innerHTML = adding.innerHTML;
            adding.innerHTML = 0;
            break;

        default:
            storeValue.innerHTML += ", " + adding.innerHTML;
            adding.innerHTML = 0;
            break;
    }

});

console.log(adding.innerHTML);

/*function addNum() {

    // this one is for adding the given value
    adding.innerHTML = +adding.innerHTML + 1;

    // this one is for multiply the given value
    adding.innerHTML = 1 + adding.innerHTML * 1;
    console.log(adding.innerHTML);
};*/