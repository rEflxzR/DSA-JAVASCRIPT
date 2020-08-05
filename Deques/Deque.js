class Node {
    constructor(val) {
        this.data = val
        this.next = null
        this.previous = null
    }
}

class Deque {
    constructor(size=Infinity) {
        this.front = null
        this.rear = null
        this.size = size
        this.length = 0
    }

    size() {
        return this.length
    }

    isFull() {
        return this.length==this.size
    }

    isEmpty() {
        return this.front==null && this.rear==null
    }

    getFront() {
        if(this.isEmpty()) {
            return null
        }

        return this.front.data
    }

    getRear() {
        if(this.isEmpty()) {
            return null
        }

        return this.rear.data
    }

    removeSingleNode() {
        let temp = this.front
        this.front = null
        this.rear = null
        this.length--

        return temp
    }

    addFront(val) {
        if(this.isFull()) {
            return "No More Space, Deque is Full"
        }

        let newnode = new Node(val)
        if(!this.front) {
            this.front = newnode
            this.rear = newnode
        }
        else {
            newnode.next = this.front
            this.front.previous = newnode
            this.front = newnode
        }
        this.length++
    }

    addRear(val) {
        if(this.isFull()) {
            return "No More Space, Deque is Full"
        }

        let newnode = new Node(val)
        if(!this.rear) {
            this.front = newnode
            this.rear = newnode
        }
        else {
            newnode.previous = this.rear
            this.rear.next = newnode
            this.rear = newnode
        }
        this.length++
    }

    removeFront() {
        if(this.isEmpty()) {
            return "Deque is Empty"
        }
        if(this.front==this.rear) {
            return this.removeSingleNode()
        }

        let temp = this.front
        this.front = temp.next
        temp.next = null
        this.front.previous = null
        this.length--
        return temp
    }

    removeBack() {
        if(this.isEmpty()) {
            return "Deque is Empty"
        }

        if(this.front==this.rear) {
            return this.removeSingleNode()
        }

        let temp = this.rear
        this.rear = temp.previous
        this.rear.next = null
        temp.previous = null
        this.length--

        return temp
    }
}

module.exports.Node = Node
module.exports.Deque = Deque
