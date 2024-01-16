let n = parseInt(prompt("Nhập vào một số nguyên dương n bất kỳ:"));
    
if (n <= 0 || isNaN(n)) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let reverse = 0;
    while (n > 0) {
        reverse = reverse * 10 + n % 10;
        n = n / 10 | 0;
    }
    console.log(`Số đảo ngược của số vừa nhập là ${reverse}.`);
}