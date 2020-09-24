let {Queue} = require('./Queue.js')

let queue = new Queue()

function printNumbers(array, n, queue) {
    queue.enqueue(array[0])
    queue.enqueue(array[1])
    let count = 0
    while(count<=n) {
        let num = queue.dequeue()
        queue.enqueue(Number(String(num)+String(array[0])))
        queue.enqueue(Number(String(num)+String(array[1])))
        console.log(num)
        count++
    }
}

printNumbers([5, 6], 10, queue)