let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));
let c = parseInt(prompt("Nhập số nguyên c:"));
let d = parseInt(prompt("Nhập số nguyên d:"));

const timUCLN = (x, y) => y === 0 ? x : timUCLN(y, x % y);
const timBCNN = (x, y) => (x * y) / timUCLN(x, y);

let bcnnAB = timBCNN(a, b);
let bcnnCD = timBCNN(c, d);
let bcnnABCD = timBCNN(bcnnAB, bcnnCD);

console.log(`Bội chung nhỏ nhất của ${a}, ${b}, ${c}, và ${d} là: ${bcnnABCD}`);
