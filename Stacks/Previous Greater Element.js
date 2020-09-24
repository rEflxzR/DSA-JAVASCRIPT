let {Stack} = require('./Stack.js')

function previousGreaterElement(array) {
    let stack = new Stack()
    let arr = []

    stack.push(0)
    arr.push(-1)

    for(let i=1; i<array.length; i++) {
        while( !stack.isEmpty() && array[i] >= array[stack.top()] ) {
            stack.pop()
        }

        stack.isEmpty() ? arr.push(-1) : arr.push(array[stack.top()])
        stack.push(i)
    }

    console.log(arr)   
}


previousGreaterElement([15, 10, 18, 12, 4, 6, 2, 8])
console.log("\n")
previousGreaterElement([8, 10, 12])
console.log("\n")
previousGreaterElement([18, 10, 2])