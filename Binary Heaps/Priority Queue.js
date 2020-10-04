// Priority Queue WHERE NUMERICALLY LOWER PRIORITY IS HIGHER

class PriorityQueue {
    constructor() {
        this.list = []
    }

    insert(val, pri) {
        this.list.push({value: val, priority: pri})
        let c = this.list.length-1
        let p = Math.floor((c-1)/2)

        while(c>0 && this.list[c].priority<this.list[p].priority) {
            [this.list[c], this.list[p]] = [this.list[p], this.list[c]]
            c = p
            p = Math.floor((c-1)/2)
        }
    }

    heapify(index) {
        let lc = 2*index+1
        let rc = 2*index+2
        let min = index
        if(this.list[lc] && this.list[lc].priority<this.list[min].priority) {
            min = lc
        }
        if(this.list[rc] && this.list[rc].priority<this.list[min].priority) {
            min = rc
        }
        if(min!=index) {
            [this.list[index], this.list[min]] = [this.list[min], this.list[index]]
            this.heapify(min)
        }
    }

    buildHeap() {
        let p = Math.floor((this.list.length-2)/2)
        for(let i=p; i>=0; i--) {
            this.heapify(i)
        }
    }

    extractMin() {
        [this.list[0], this.list[this.list.length-1]] = [this.list[this.list.length-1], this.list[0]]
        let res = this.list.pop()
        this.heapify(0)

        return res
    }

    update(index, newp) {
        if(newp<this.list[index].priority) {
            this.list[index][priority] = newp
        }
        this.heapify(index)
    }

    delete(index) {
        [this.list[index], this.list[this.list.length-1]] = [this.list[this.list.length-1], this.list[index]]
        let res = this.list.pop()
        this.heapify(index)

        return res
    }

    show() {
        console.log(this.list)
    }
}


module.exports.PriorityQueue = PriorityQueue