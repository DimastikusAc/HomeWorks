let year = 1000;

if (year % 10 === 1) {
  console.log("Вам " + year + " рік");
} else if ((year % 10 === 2) || (year % 10 === 3) || (year % 10 === 4)) {
 console.log("Вам " + year + " роки");
} else {
    console.log("Вам " + year + " років")
}