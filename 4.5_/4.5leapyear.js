function check(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("It is indeed a leap year");
      } else {
        console.log("This is not a leap year.");
      }
    } else {
      console.log("It is indeed a leap year");
    }
  } else {
    console.log("This is not a leap year.");
  }
}
// check(2012);
// check(2100);
// check(2400);
