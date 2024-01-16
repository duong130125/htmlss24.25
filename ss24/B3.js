let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));
if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập vào hai số nguyên hợp lệ.");
} else {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    console.log(`${a}^${b} = ${result}`);
}
