let number = +prompt('Nhập vào số nguyên dương:');
let sum = 0;
let m = 1;
if (!isNaN(number) && number > 0) {
    for (; sum + m < number; m++) {
        sum += m;
    }
    console.log(`Số nguyên dương ${m-1} là số lớn nhất có tổng nhỏ hơn ${number}`);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
