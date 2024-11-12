// const myName = " saweN ruN ma I ||&&|| I am Nur Newas";

let reverse = "";
for (let letter of myName) {
  // console.log(letter);
  reverse = letter + reverse;
}

console.log(reverse);

//
let rev = "";
for (let i = 0 ; i <= myName.length; i++){
// for (let i = myName.length - 1; i >= 0; i--) {
  const letter= myName[i];
  rev = rev + myName;
}

console.log(rev);

// ShortCute
// const revers =myName.split('').reverse().join('')
// console.log(revers);

const myName = " saweN ruN ma I ||&&|| I am Nur Newas";
const revers = myName.split('').reverse().join('');
console.log(revers);