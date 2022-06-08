var sum = 0;
// let count: number = 0;
// let preFibonacci1: number = 0;
// let preFibonacci2: number = 0;
// let n = parseInt(prompt("nhập thứ tự fibonacci trong dãy để tìm số fibonacci tương ứng: "));
var n = 15;
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var fibonacciArr = [];
for (var i = 0; i < n; i++) {
    fibonacciArr.push(fibonacci(i));
}
for (var i = 0; i < fibonacciArr.length; i++) {
    sum += fibonacciArr[i];
    console.log("số fibonaci thứ " + (i + 1) + " :" + fibonacciArr[i]);
}
console.log("tổng " + n + " số fibonacci đầu tiên là : " + sum);
// for (let i = 1; count < 20; i++) {
//     if (i == 1 && count == 0) {
//         preFibonacci2 = i;
//         console.log(i);
//         i--;
//         sum += i;
//         count++;
//     } else if (i == (preFibonacci1 + preFibonacci2)) {
//         sum += i;
//         preFibonacci1 = preFibonacci2;
//         preFibonacci2 = i;
//         count++;
//         console.log(i);
//     }
// }
// console.log(sum);
