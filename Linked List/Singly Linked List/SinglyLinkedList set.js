class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        let newnode = new Node(val)
        if(!this.head) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            this.tail.next = newnode
            this.tail = newnode
        }

        this.length++
    }

    pop() {
        if(!this.head) {
            return `Linked List is Empty`
        }
        else {
            let temp = this.head
            while(temp.next.next != null) {
                temp = temp.next
            }
            let lastnode = temp.next
            temp.next = null
            this.length--

            return lastnode
        }
    }

    shift() {
        if(!this.head) {
            return `Linked List is Empty`
        }
        else {
            let temp = this.head
            this.head = temp.next
            temp.next = null
            this.length--

            return temp
        }
    }

    unshift(val) {
        let newnode = new Node(val)
        if(!this.head) {
            this.head = newnode
            this.tail = newnode
        }
        else {
            newnode.next = this.head
            this.head = newnode
        }
        this.length++
    }

    set(n, val) {
        let i=1
        let temp = this.head
        while(i<n) {
            temp = temp.next
            i++
        }
        temp.data = val
        return temp
    }
}

let list = new SinglyLinkedList()
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("kEX")
list.push("PC")
console.log(list)
console.log("\n")

console.log("-----set Operation-----\n")
console.log(list.set(4, "toxjee"))
console.log(list)
console.log("\n")
console.log(list.set(1, "rEflxzR"))
console.log(list)