const array = [2, 4, 7, 5, 4, 3, 8];

const singleJs = array.filter((item, i) => {
  return array.indexOf(item) === i;
});

console.log(singleJs);


function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

if (leapYear(2020)) {
  console.log("2020は閏年です！");
} else {
  console.log("2020は閏年ではありません！");
}

if (leapYear(2021)) {
  console.log("2021は閏年です！");
} else {
  console.log("2021は閏年ではありません！");
}