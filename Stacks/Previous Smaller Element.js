let {Stack} = require('./Stack.js')

function previousSmallerElement(array) {

    let stack = new Stack()
    let arr = []
    stack.push(0)
    arr.push(-1)

    for(let i=1; i<array.length; i++) {
        while( !stack.isEmpty() && array[i]<= array[stack.top()] ) {
            stack.pop()
        }

        stack.isEmpty() ? arr.push(-1) : arr.push(array[stack.top()])
        stack.push(i)
    }

    console.log(arr)
}

previousSmallerElement([4, 6, 2, 7, 8, 15, 36, 32, 56])
console.log("\n")
previousSmallerElement([4, 6, 8, 15, 20, 23])
console.log("\n")
previousSmallerElement([44, 36, 22, 17, 8])