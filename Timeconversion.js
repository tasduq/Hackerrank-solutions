function timeConversion(time12h) {
  // Write your code here
  const modifier = time12h.slice(-2);
  const [time] = time12h.split(modifier);
  // console.log(time ,  "i am time")
  // console.log(modifier ,  "i am modifier")

  let [hours, minutes, seconds] = time.split(":");
  //  console.log(hours, minutes ,seconds ,  "i am splited")

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;
}
