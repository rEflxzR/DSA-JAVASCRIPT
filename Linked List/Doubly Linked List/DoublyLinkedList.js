class Node {
    constructor(val) {
        this.data = val
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
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
            newnode.previous = this.tail
            this.tail = newnode
        }
        this.length++
    }

    pop() {
        let newlastnode = this.tail.previous
        let temp = this.tail
        newlastnode.next = null
        temp.previous = null
        this.tail = newlastnode
        this.length--

        return temp
    }

    shift() {
        let newhead = this.head.next
        let temp = this.head
        newhead.previous = null
        temp.next = null
        this.head= newhead
        this.length--

        return temp
    }

    unshift(val) {
        let newnode = new Node(val)
        this.head.previous = newnode
        newnode.next = this.head
        this.head = newnode
        this.length++
    }

    get(n) {
        if(n<0 || n>this.length) {
            return `Invalid Index Provided`
        }
        else {
            let i = 1
            let temp = this.head
            while(i<n) {
                temp = temp.next
                i++
            }
            return temp
        }
    }

    set(n, val) {
        if(n<0 || n>this.length) {
            console.log("Invalid Index Position") 
        }
        else {
            let i=1
            let temp = this.head
            while(i<n) {
                temp = temp.next
                i++
            }
            temp.data = val
        }
    }

    insert(n, val) {
        let newnode = new Node(val)
        if(n<0 || n>this.length) {
            console.log(`Invalid Index Position`)
        }
        else if(n==1) {
            newnode.next = this.head
            this.head.previous = newnode
            this.head = newnode
            this.length++
        }
        else if(n==this.length) {
            this.tail.next = newnode
            newnode.previous = this.tail
            this.tail = newnode
            this.length++
        }
        else {
            let i = 1
            let temp = this.head
            while(i<n) {
                temp = temp.next
                i++
            }
            newnode.next = temp
            temp.previous.next = newnode
            newnode.previous = temp.previous
            temp.previous = newnode
            this.length++
        }
    }

    remove(n) {
        let temp = this.head

        if(n<0 || n>this.length) {
            return "Invalid Index Position"
        }
        else if(n==1) {
            this.head = temp.next
            this.head.previous = null
            temp.next = null
        }
        else if(n==this.length) {
            temp = this.tail
            this.tail = temp.previous
            this.tail.next = null
            temp.previous = null
        }
        else {
            let i=1
            while(i<n) {
                temp = temp.next
                i++
            }
            temp.previous.next = temp.next
            temp.next.previous = temp.previous
            temp.next = null
            temp.previous = null
        }
        this.length--

        return temp
    }

    print() {
        let temp = this.head
        if(!this.head) {
            console.log("Linked List is Empty")
        }
        else {
            while(temp != null) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }
}

let list = new DoublyLinkedList()
list.print()
console.log("\n--------Push Operation--------\n")
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("PC")
list.push("kEX")
list.print()
console.log("\n")
console.log("\n--------Pop Operation--------\n")
console.log(list.pop())
console.log("\n")
console.log(list)
console.log("\n--------Shift Operation--------\n")
console.log(list.shift())
console.log("\n")
console.log(list)
console.log("\n--------Unshift Operation--------\n")
list.unshift("rEflxzR")
list.print()
console.log("\n--------Get Operation--------\n")
list.print()
console.log("\n")
console.log(list.get(3))
console.log(list.get(1))
console.log(list.get(4))
console.log(list.get(7))
console.log("\n--------Set Operation--------")
list.set(1, "ReflxzR")
console.log("\n")
list.print()
console.log("\n--------Insert Operation--------\n")
list.insert(4, "Phantasy")
list.print()
console.log("\n--------Remove Operation--------")
console.log(list.remove(2))
console.log("\n")
console.log(list)
console.log("\n")
list.print()