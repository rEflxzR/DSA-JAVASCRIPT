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
            this.head = newnode
            this.tail = newnode
        }
        else {
            this.tail.next = newnode
            this.tail = newnode
        }

        this.length++
    }

    insert(n, val) {
        let newnode = new Node(val)

        if(n==1) {
            newnode.next = this.head
            this.head = newnode
            this.length++
        }
        else if(n > this.length || n < 0) {
            console.log("Invalid Index Provided")
        }
        else {
            let i=1
            let temp = this.head
            while(i<n-1) {
                temp = temp.next
                i++
            }
            newnode.next = temp.next
            temp.next = newnode
            this.length++
        }
    }

    print() {
        let i=1
        let temp = this.head
        while(i <= this.length) {
            console.log(temp.data)
            temp = temp.next
            i++
        }
    }
}

let list = new SinglyLinkedList()
// list.insert(5, "MaCxzR")
// console.log("\nInserting Nodes in the Linked List\n\n")
list.push("qLimAxz")
list.push("kEX")
list.push("PC")
console.log(list)
console.log("\n")

console.log("-----Insert Operation-----\n")
list.insert(3, "ReflxzR")
list.print()
console.log("\n")
list.insert(8, "XMYRbli")
console.log("\n")
list.insert(1, "jAnzWE")
list.print()
console.log("\n")
list.insert(5, "toxjee")
list.print()