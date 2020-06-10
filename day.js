// Returns the day of the week for the given date.

function dayName(today) {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfTheWeek[today.getDay()];
}


// Returns a greeting for the given date.

function greeting(today) {
  return `Hello, world! Happy ${dayName(today)}`;
}



// function greeting(date) {
//   if (dayName(date) === 'Tuesday') {
//     return "Happy Toozday";
//   } else {
//     return "Happy Not a Tuesday";
//     }
//   }


// let now = new Date();
// alert(greeting(now));
