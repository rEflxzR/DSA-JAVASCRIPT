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
        if(this.head==null) {
            newnode.data = val
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
        let temp = this.head
        if(this.head==null) {
            return `Linked List is Empty`
        }
        else {
            while(temp.next.next!=null) {
                temp = temp.next
            }
            let lastnode = temp.next
            this.tail = temp
            temp.next = null
            this.length--

            return lastnode
        }
    }

    shift() {
        if(this.head==null) {
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
}

let list = new SinglyLinkedList()
console.log(list.shift())
console.log("\nInserting Nodes in the Linked List\n\n")
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("kEX")
list.push("CAMPO")
console.log(list)
console.log("\n")

console.log("-----Shift Operation-----\n")
console.log(list.shift())
console.log("\n")
console.log(list.shift())
console.log("\n")
console.log(list)