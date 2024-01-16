let n = +prompt('Nhập vào số nguyên dương n:');
let S = 0;
let factorial = 1;

if (!isNaN(n) && n > 0) {
    let i = 1;
    while (i <= n) {
        factorial *= i;
        S += factorial;
        i++;
    }
    console.log('Giá trị của biểu thức S là:', S);
} else {
    console.log('Vui lòng nhập một số nguyên dương.');
}
