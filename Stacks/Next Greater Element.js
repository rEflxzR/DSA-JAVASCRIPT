let {Stack} = require('./Stack.js')

function nextGreaterElement(array) {

    let stack = new Stack()
    let arr = []
    stack.push(array.length-1)
    arr.push(array[array.length-1])

    for(let i=array.length-2; i>=0; i--) {
        while(!stack.isEmpty() && array[i] >= array[stack.top().data] ) {
            stack.pop()
        }

        stack.isEmpty() ? arr.push(-1) : arr.push(array[stack.top().data])
        
        stack.push(i)
    }

    arr.reverse()
    arr.pop()
    arr.push(-1)
    console.log(arr)
}

nextGreaterElement([5, 15, 10, 8, 6, 12, 3, 18])
console.log("\n")
nextGreaterElement([5, 10, 15, 20, 25, 30, 50])
console.log("\n")
nextGreaterElement([85, 75, 60, 48, 36, 22, 13, 8])