let a = +prompt("Nhập số nguyên dương a:");
let b = +prompt("Nhập số nguyên dương b:");
let odd = 0;
let even = 0;
if (a > b) {
    [a, b] = [b, a];
}
for (let i = a + 1 ; i < b; i++) {
    if (i % 2 !== 0) {
        odd += i;
    } else {
        even += i;
    }
}
console.log(`Tổng số lẻ nằm giữa từ ${a} đến ${b}: ${odd}`);
console.log(`Tổng số chẵn nằm giữa từ ${a} đến ${b}: ${even}`);
