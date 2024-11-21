function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
      return "Invalid Input";
    }
    
    // Difference between Incomes and Expense
    let difference = income - expenses;
    
    // tax 20 % 
    let tax = difference * 0.20;
    
    // Return the calculated tax
    return tax;
  }

  console.log(calculateTax(-5000, 2000));