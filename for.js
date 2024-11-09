for (let num = 0; num <= 1; num++) {
  //< less than because > is alwes 0 in fust and less then 0
  console.log(num);
}

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//even Numbers
for (let i = 0; i <= 5; i = i + 2) {
  console.log(i);
}

//Odd Numbers
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    // (i % 2  !== 0)
    console.log(i);
  }
}

// using for dum 1   = 9
let sum = 0;
for (let i = 0; i <= 9; i++) {
    sum = sum + i;
}
console.log(sum); 
