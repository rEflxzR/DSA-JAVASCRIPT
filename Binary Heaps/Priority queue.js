
class Node {
    constructor(pri, val) {
        this.priority = pri
        this.data = val
    }
}

class PriorityQueue {
    constructor() {
        this.list = []
    }

    enqueue(pri, val) {
        let newnode = new Node(pri, val)
        this.list.push(newnode)

        while(true) {
            let cindex = this.list.indexOf(newnode)
            let pindex = Math.floor((cindex-1)/2)

            if(pindex<0 || this.list[cindex].priority>this.list[pindex].priority) {
                break
            }

            [this.list[cindex], this.list[pindex]] = [this.list[pindex], this.list[cindex]]
        }
    }

    dequeue() {
        [this.list[0], this.list[this.list.length-1]] = [this.list[this.list.length-1], this.list[0]]
        let newroot = this.list[0]
        let rootnode = this.list.pop()

        while(true) {
            let p = this.list.indexOf(newroot)
            let c1 = 2*p+1
            let c2 = 2*p+2

            if(this.list[c1] && this.list[c2] && (this.list[c1].priority<this.list[p].priority || this.list[c2].priority<this.list[p].priority)) {
                if(this.list[c1].priority < this.list[c2].priority) {
                    [this.list[p], this.list[c1]] = [this.list[c1], this.list[p]]
                }
                else {
                    [this.list[p], this.list[c2]] = [this.list[c2], this.list[p]]
                }
            }
            else if(this.list[c2]==undefined && this.list[c1]) {
                if(this.list[c1].priority<this.list[p].priority) {
                    [this.list[p], this.list[c1]] = [this.list[c1], this.list[p]]
                }
                else {
                    break
                }
            }
            else {
                break
            }
        }

        return rootnode
    }

    // dequeue() {
    //     [this.list[0], this.list[this.list.length-1]] = [this.list[this.list.length-1], this.list[0]]
    //     let rootnode = this.list.pop()
    //     this.list.sort((a, b) => {
    //         return a.priority-b.priority
    //     })

    //     return rootnode
    // }

    show() {
        if(this.list.length==0) {
            console.log("Priority Queue is Empty")
        }
        else {
            console.log(this.list)
        }
    }
}

let pqueue = new PriorityQueue()

pqueue.show()
pqueue.enqueue(70, 34570)
pqueue.enqueue(67, 8767)
pqueue.enqueue(65, 56765)
pqueue.enqueue(45, 534645)
pqueue.enqueue(58, 585)
pqueue.enqueue(40, 348)
pqueue.enqueue(53, 65758)
pqueue.enqueue(44, 98758)
pqueue.enqueue(15, 23458)
pqueue.enqueue(31, 4558)
console.log("\n")
pqueue.show()
console.log("\n")
console.log(pqueue.dequeue())
console.log(pqueue.dequeue())
console.log("\n")
pqueue.show()
console.log("\n")
pqueue.enqueue(2, 58)
console.log("\n")
pqueue.show()