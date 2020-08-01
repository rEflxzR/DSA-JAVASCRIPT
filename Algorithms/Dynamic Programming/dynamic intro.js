function Fibonacci(n, memo={}) {
    if(memo[n] != undefined) {
        return memo[n]
    }
    if(n==0 || n==1) {
        return n
    }
    let result = Fibonacci(n-1, memo) + Fibonacci(n-2, memo)
    memo[n] = result
    return result
}

console.log(Fibonacci(70))
console.log(Fibonacci(60))
console.log(Fibonacci(90))
console.log(Fibonacci(100))
