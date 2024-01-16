let n = parseInt(prompt("Nhập vào một số nguyên:"));
let check  = n < 0 ? -n : n;
console.log(`Các chữ số chẵn trong số ${n} là:`);
while (check > 0) {
    const chuSo = check % 10;
    if (chuSo % 2 === 0) {
        console.log(chuSo);
    }
    check = (check - chuSo) / 10;
}
