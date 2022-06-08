let sum: number = 0;

// let n = parseInt(prompt("nhập thứ tự fibonacci trong dãy để tìm số fibonacci tương ứng: "));
 let n: number = 15;

function fibonacci( n : number) : number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

let fibonacciArr : number[] = [];

for (let i= 0;i<n;i++) {
    fibonacciArr.push(fibonacci(i));
}
for (let i=0; i< fibonacciArr.length;i++) {
    sum += fibonacciArr[i];
    console.log("số fibonaci thứ " + (i+1) + " :" + fibonacciArr[i]);
}
    console.log("tổng " + n + " số fibonacci đầu tiên là : " + sum );

