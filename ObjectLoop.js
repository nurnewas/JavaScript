const mobile = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    year: 2021,
    displaySize: 6.7,
    color: 'Black',
    operatingSystem: 'Android',
    camera: {
        primary: '12 MP',
        secondary: '8 MP',
    },
    battery: {
        capacity: 4500,
        type: 'Li-Ion',
    },
    storage: {
        internal: '128GB',
        external: '256GB',
    },
}

// For Of: Array
// For In: Object  
for(const props in mobile){
    console.log(props);
}

