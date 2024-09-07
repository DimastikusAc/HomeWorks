let year = 2024;

if (year % 400 === 0) {
    console.log(year + " - це високосний рік");
} else if (year % 100 === 0) {
    console.log(year + "  - це не високосний рік");
} else if (year % 4 === 0) {
    console.log(year + " - це високосний рік");
} else {
    console.log(year + " - це не високосний рік");
}