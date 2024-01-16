const number = parseInt(prompt("Nhập vào một số bất kỳ:"));

if (isNaN(number)) {
    console.log("Vui lòng nhập một số.");
} else {
    let element = true;
    if (number <= 1) {
        element = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                element = false;
                break;
            }
        }
    }
    console.log(`${number} ${element ? 'là số nguyên tố.' : 'không là số nguyên tố.'}`);
}