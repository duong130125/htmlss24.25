let long = parseInt(prompt("Nhập chiều dài của hình chữ nhật:"));
let weight = parseInt(prompt("Nhập chiều rộng của hình chữ nhật:"));

let square = 0;

while (long > 0 && weight > 0) {
    if (long > weight) {
        square += long / weight | 0;
        long %= weight;
    } else {
        square += weight / long | 0;
        weight %= long;
    }
}
console.log(`Số hình vuông tối thiểu có thể cắt từ hình chữ nhật là: ${square}`);
