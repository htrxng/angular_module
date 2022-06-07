let sum: number = 0;
let count: number = 0;
let preFibonacci1 = 0;
let preFibonacci2 = 0;
for (let i = 1;count < 20; i++) {
    if(i == 1 && count == 0) {
        preFibonacci2 = i;
        console.log(i);
        i--;
        sum += i ;
        count ++;
    } else if(i == (preFibonacci1+ preFibonacci2)){
         sum += i;
         preFibonacci1 = preFibonacci2;
         preFibonacci2 = i;
         count ++;
         console.log(i);
    }
}
console.log(sum);