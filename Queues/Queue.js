class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class Queue {
    constructor(maxsize=Infinity) {
        this.first = null
        this.last = null
        this.maxsize = maxsize
        this.length = 0
    }

    isEmpty() {
        return this.first==null && this.last==null
    }

    isFull() {
        return this.length==this.maxsize
    }

    size() {
        return this.length
    }

    front() {
        if(this.isEmpty()) {
            return null
        }
        return this.first
    }

    back() {
        if(this.isEmpty()) {
            return null
        }
        return this.last
    }

    removeSingleNode() {
        let temp = this.first
        this.first = null
        this.last = null
        this.length--

        return temp
    }

    enqueue(val) {
        if(this.isFull()) {
            return "Queue is Full"
        }

        let newnode = new Node(val)
        if(this.isEmpty()) {
            this.first = newnode
            this.last = newnode
        }
        else {
            this.last.next = newnode
            this.last = newnode
        }
        this.length++
        return newnode
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Queue is Empty"
        }

        let temp = this.first

        if(this.first==this.last) {
            return this.removeSingleNode()
        }
        else {
            this.first = temp.next
            temp.next = null
            this.length--

            return temp
        }
    }
}


module.exports.Node = Node
module.exports.Queue = Queue
