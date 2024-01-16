let n = parseInt(prompt("Nhập vào một số nguyên dương n:"));

if (n <= 0 || isNaN(n)) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let S = 0.0;
    for (let i = 1; i <= n; i++) {
        S += (1 /i**3);
    }

    console.log("Kết quả của biểu thức là: " + S.toFixed(5));
}