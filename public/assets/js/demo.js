// // for of loop

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// for (const iterator of alphabet) {
//     console.log(iterator);
// }


// // for in loop

// const object = [{
//     name: "manish",
//     class: 13,
//     id: 20
// }, {
//     name: "dhruv",
//     class: 2,
//     id: 3
// }];

// for (const name in object) {
//     if (Object.hasOwnProperty.call(object, name)) {
//         const element = object[na me];

//     }
// }


const el = document.querySelector('#user');

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = '1960-10-03';
// Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// Result on HTML: <div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth="1960-10-03">John Doe</div>

delete el.dataset.dateOfBirth;
// Result on JS: el.dataset.dateOfBirth === undefined
// Result on HTML: <div id="user" data-id="1234567890" data-user="johndoe">John Doe</div>

if ('someDataAttr' in el.dataset === false) {
    el.dataset.someDataAttr = 'mydata';
    // Result on JS: 'someDataAttr' in el.dataset === true
    // Result on HTML: <div id="user" data-id="1234567890" data-user="johndoe" data-some-data-attr = "mydata">John Doe</div>
}