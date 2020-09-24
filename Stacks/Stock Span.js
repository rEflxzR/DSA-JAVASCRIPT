/*
    FOR EACH DAY, PRINT FOR HOW MANY CONTINUOUS PREVIOUS DAYS, TODAYS STOCK VALUE IS GREATER
    For day-1, it is always 1. We store the maximum Stock value in the stack before the current Stock value
    If any day, Stock value becomes max, We remove all values that are smaller than it in the Stack to Update the New Maximum
*/

let {Stack} = require('./Stack.js')

function stocksSpan(array) {

    let stack = new Stack()
    stack.push(0)
    console.log(1)

    for(let i=1; i<array.length; i++) {
        while( !stack.isEmpty() && array[i]>=array[stack.top()] ) {
            stack.pop()
        }

        if(stack.isEmpty()) {
            console.log(i+1)
        }
        else {
            console.log(i-stack.top())
        }

        stack.push(i)
    }
}


stocksSpan([15, 13, 12, 14, 16, 8, 6, 4, 10, 30])
console.log("\n")
stocksSpan([10, 20, 30, 40, 50])
console.log("\n")
stocksSpan([80, 74, 62, 32, 5])