function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }

  // Difference between Incomes and Expense
  let difference = income - expenses;

  // tax 20 %
  let tax = difference * 0.2;

  // Return the calculated tax
  return tax;
}

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  let parts = email.split("@");

  let username = parts[0];
  let domain = parts[1];

  return `${username} sent you an email from ${domain}`;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (/\d/.test(name[i])) {
      return true;
    }
  }
  return false;
}

console.log(checkDigitsInName("Raj123")); // Output: true
console.log(checkDigitsInName("n9ayeem")); // Output: true
console.log(checkDigitsInName("e1mu3")); // Output: true
console.log(checkDigitsInName("Suman")); // Output: false
console.log(checkDigitsInName("Name2024")); // Output: true
console.log(checkDigitsInName("!@#")); // Output: false
console.log(checkDigitsInName(["Raj"])); // Output: Invalid Input
