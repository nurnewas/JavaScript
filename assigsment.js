function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    return "Invalid Input";
  }
  let difference = income - expenses;
  let tax = difference * 0.2;

  return tax;
}
// 222222222222222222222222222222222
function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  let parts = email.split("@");

  let username = parts[0];
  let domain = parts[1];

  return `${username} sent you an email from ${domain}`;
}

// 3333333333333333333333333
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

// 44444444444444444444

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  }

  const { name, testScore, schoolGrade, isFFamily } = obj;


  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }


  if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }

  return finalScore >= 80;
}

// 55555555555555555555
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }


  if (serialNumber <= waitingTimes.length) {
    return "Invalid Input";
  }

  const totalTime = waitingTimes.reduce((acc, time) => acc + time, 0);
  const averageTime = Math.round(totalTime / waitingTimes.length);
  const peopleAhead = serialNumber - 1 - waitingTimes.length;
  const waitingTimeForIsrat = peopleAhead * averageTime;
  return waitingTimeForIsrat;
}
