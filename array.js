const num = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const name = ["nur1", "nur2", "nur3", "nur4", "nur5"];
const mix =  [12, "nur", true, false, 1];

console.log(num +" " + name);
console.log(name.length +"&" +num.length );
console.log(name.length +" " + num.length +" " +  mix.length);

mix[3] = true;

console.log(mix);
// console.log(`${num} and ${name}`);