// The array implementation of Queue is very easy however, the Dequeue operation here is O(n) which makes the Linked List implementation more suitable

class Queue {
    constructor(size=Infinity) {
        this.queue = []
        this.length = 0
        this.size = size
    }

    isEmpty() {
        return this.queue.length==0
    }

    isFull() {
        return this.length>=this.size
    }

    size() {
        return this.queue.length
    }

    front() {
        return this.queue[0]
    }

    back() {
        return this.queue[this.queue.length-1]
    }

    enqueue(val) {
        if(this.isFull()) {
            return "Queue is Full"
        }
        this.length++
        return this.queue.push(val)
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Queue is Empty"
        }
        this.length--
        return this.queue.shift()
    }
}