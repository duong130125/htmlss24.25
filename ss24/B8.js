const n = parseInt(prompt("Nhập vào số nguyên dương n:"));

if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    let elementFound = 0;
    let i = 2;
    while (elementFound < n) {
        let element = true;
        if (i <= 1) {
            element = false;
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    element = false;
                    break;
                }
            }
        }

        if (element) {
            console.log(i);
            elementFound++;
        }
        i++;
    }
}