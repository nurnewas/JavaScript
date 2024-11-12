const person = {
    name: "sodor Uddin",
    age: 19,
    pro:" Developer",
    sallary: 30,
    married: true,
    'Favorites placement': ['bandar bon', 'pana bon']
}

// Dot mathorders
console.log(person.pro);
const sallary = person.sallary;
console.log(sallary);
// console.log(person.Favorites placement); // Not working (spech or other symboles)

// bracket mathorders
console.log(person['age']);
console.log(person['Favorites placement']);