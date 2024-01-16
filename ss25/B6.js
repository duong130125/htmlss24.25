let n = parseInt(prompt("Nhập vào số nguyên dương n:"));

if (n < 0) {
    console.log("Vui lòng nhập số nguyên dương.");
} else {
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    console.log(`Số Fibonacci thứ ${n} là: ${b}`);
}
