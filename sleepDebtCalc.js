const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 9;
      break;
    default:
      return "Error";
  }
};

//gets total  sleep hours
const getActualSleepHours = () => {
  const sum =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("THURSDAY") +
    getSleepHours("FriDay") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  return sum;
};

// define ideal sleep hours
const getIdealSleepHours = (idealHour) => {
  return idealHour * 7;
};

// calculates sleep debt
const calculateSleepDebt = (h) => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);

  if (actualSleepHours === idealSleepHours) {
    return "You got perfect amount of sleep";
  } else if (actualSleepHours > idealSleepHours) {
    return `You got more sleep: ${actualSleepHours - idealSleepHours} hours!`;
  } else {
    return `You should get more sleep: ${idealSleepHours - actualSleepHours
      } hours!`;
  }
};
console.log(calculateSleepDebt());
