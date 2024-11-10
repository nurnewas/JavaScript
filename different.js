for(let i = 0; i < 10; i ++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for(let i = 0; i < 20; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

for(let i = 0; i < 20; i ++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}