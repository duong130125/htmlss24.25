let number = +prompt("Nhập vào số nguyên dương bất kỳ:");
let sum = 0;

if (!isNaN(number) && number > 0) {
    for (let i = 1; i <= number; i++) {
        if ((number % 4 === 0 && i <= number - 2) || (number % 4 === 3 && i <= number - 1) || (number % 4 !== 0 && number % 4 !== 3)) {
            sum += i;
            console.log(i);
        }
    }
    console.log('Tổng: ' + sum);
} else {
    console.log("Số nhập vào không phải số nguyên dương.");
}