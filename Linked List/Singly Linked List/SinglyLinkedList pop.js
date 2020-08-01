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
        let newNode = new Node(val)
        if(this.head==null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if(this.head==null) {
            return `Empty List`
        }
        else {
            let temp = this.head
            while(temp.next.next != null) {
                temp = temp.next
            }
            let lastnode = temp.next
            temp.next = null
            this.tail = temp
            this.length--

            return lastnode
        }
    }
}

let list = new SinglyLinkedList()
console.log(list.pop())
console.log("\nInserting Nodes in the Linked List\n\n")
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("kEX")
console.log(list)
console.log("\n")

console.log(list.pop())
console.log("\n")
console.log(list.pop())
console.log("\n")
console.log(list)