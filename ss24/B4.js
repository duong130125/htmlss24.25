let number = parseInt(prompt("Nhập một số nguyên dương bất kỳ:"));

if (isNaN(number) || number <= 0) {
    console.log("Vui lòng nhập vào một số nguyên dương hợp lệ.");
} else {
    let sum = 0;
    for (let i = 2; sum + i * i <= number; i += 2) {
        let square = i * i;
        sum += square;
        console.log(`Bình phương của ${i} là ${square}`);
    }
}
