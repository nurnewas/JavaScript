const name = 'Md,Nur,Newas,Jr';
const part =name.slice(3, 7);
// console.log(part);

const part2 =name.slice(0, name.length);
// console.log(part2);


const short = name.split(' ');
// console.log(short);
const n = name.split(',')

console.log(n.join());
console.log(n.join("-"));

const firstName = "Nur";
const lastName = "Newas";
const fullName = firstName+ " "+lastName;
console.log(fullName);

console.log(firstName.concat(" ").concat(lastName));

console.log(fullName.includes("N"));
console.log(fullName.includes("X"));
