let number = +prompt("Nhập vào số nguyên dương bất kỳ:");
for(let i=1; i<=number; i++){
    if(i%2==0){
        let core = i**2;
        console.log(`Bình phương ${i} = ${core}.`);
    }
}