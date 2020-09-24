let {Stack} = require('./Stack.js')

function nextSmallerElement(array) {

    let stack = new Stack()
    let arr = []

    stack.push(array[array.length-1])
    arr.push(-1)

    for(let i=array.length-2; i>=0; i--) {
        while( !stack.isEmpty() && array[i] <= stack.top()) {
            stack.pop()
        }

        stack.isEmpty() ? arr.push(-1) : arr.push(stack.top())
        stack.push(array[i])
    }

    arr.reverse()
    console.log(arr)
}


nextSmallerElement([90, 86, 66, 53, 35, 23])
nextSmallerElement([99, 186, 366, 553, 735, 923])
nextSmallerElement([384, 7833,234, 598, 25, 123])