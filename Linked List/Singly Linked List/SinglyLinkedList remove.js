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

    remove(n) {
        if(n<=this.length && n>0) {

            let temp = this.head

            if(n==1) {
                this.head = temp.next
                temp.next = null
            }
            else if(n==this.length) {
                while(temp.next.next != null) {
                    temp = temp.next
                }
                let newlastnode = temp
                temp = temp.next
                newlastnode.next = null
                this.tail = newlastnode
            }
            else {
                let i=1
                while(i<n-1) {
                    temp = temp.next
                    i++
                }
                let currnode = temp
                currnode.next = temp.next.next
                temp.next = null
            }
            this.length--
            return temp
        }
        else {
            return `Invalid Index value`
        }
    }
}

let list = new SinglyLinkedList()
list.push("ReflxzR")
list.push("jAnzWE")
list.push("rEplan")
list.push("qLimAxz")
list.push("kEX")
console.log(list)
console.log("\n")

console.log("------Remove Operation--------\n")
console.log(list.remove(5))
console.log("\n")
console.log(list.remove(1))
console.log("\n")
console.log(list.remove(3))
console.log("\n")
console.log(list.remove(7))
console.log("\n")
console.log(list)