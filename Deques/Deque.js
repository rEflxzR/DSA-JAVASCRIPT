class Node {
    constructor(val) {
        this.data = val
        this.next = null
        this.previous = null
    }
}

class Deque {
    constructor(size=Infinity) {
        this.head = null
        this.tail = null
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
        return this.head==null && this.tail==null
    }

    getFront() {
        if(this.isEmpty()) {
            return null
        }

        return this.head.data
    }

    getRear() {
        if(this.isEmpty()) {
            return null
        }

        return this.tail.data
    }

    removeSingleNode() {
        let temp = this.head
        this.head = null
        this.tail = null
        this.length--

        return temp
    }

    addFront(val) {
        if(this.isFull()) {
            console.log("No More Space, Deque is Full")
        }

        let newnode = new Node(val)
        if(!this.head) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            newnode.next = this.head
            this.head.previous = newnode
            this.head = newnode
        }
        this.length++
    }

    addRear(val) {
        if(this.isFull()) {
            console.log("No More Space, Deque is Full")
        }

        let newnode = new Node(val)
        if(!this.tail) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            newnode.previous = this.tail
            this.tail.next = newnode
            this.tail = newnode
        }
        this.length++
    }

    removeFront() {
        if(this.isEmpty()) {
            return "Deque is Empty"
        }
        if(this.head==this.tail) {
            return this.removeSingleNode()
        }

        let temp = this.head
        this.head = temp.next
        temp.next = null
        this.head.previous = null
        this.length--
        return temp
    }

    removeBack() {
        if(this.isEmpty()) {
            return "Deque is Empty"
        }

        if(this.head==this.tail) {
            return this.removeSingleNode()
        }

        let temp = this.tail
        this.tail = temp.previous
        this.tail.next = null
        temp.previous = null
        this.length--

        return temp
    }
}

module.exports.Node = Node
module.exports.Deque = Deque