class MinHeap {
    constructor(){
        this.list = []
    }

    insert(val) {
        this.list.push(val)
        let c = this.list.length-1
        let p = Math.floor((c-1)/2)

        while(this.list[c]<this.list[p] && c>0) {
            [this.list[c], this.list[p]] = [this.list[p], this.list[c]]
            c = p
            p = Math.floor((c-1)/2)
        }
    }

    heapify(index) {
        let lc = 2*index+1
        let rc = 2*index+2
        let min = index
        if(this.list[lc] && this.list[lc]<this.list[min]) {
            min = lc
        }
        if(this.list[rc] && this.list[rc]<this.list[min]) {
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

    update(index, newval) {
        if(newval<this.list[index]) {
            this.list[index] = newval
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



class MaxHeap {
    constructor(){
        this.list = []
    }

    insert(val) {
        this.list.push(val)
        let c = this.list.length-1
        let p = Math.floor((c-1)/2)

        while(this.list[c]>this.list[p] && c>0) {
            [this.list[c], this.list[p]] = [this.list[p], this.list[c]]
            c = p
            p = Math.floor((c-1)/2)
        }
    }

    heapify(index) {
        let lc = 2*index+1
        let rc = 2*index+2
        let max = index
        if(this.list[lc] && this.list[lc]>this.list[max]) {
            max = lc
        }
        if(this.list[rc] && this.list[rc]>this.list[max]) {
            max = rc
        }
        if(max!=index) {
            [this.list[index], this.list[max]] = [this.list[max], this.list[index]]
            this.heapify(max)
        }
    }

    buildHeap() {
        let p = Math.floor((this.list.length-2)/2)
        for(let i=p; i>=0; i--) {
            this.heapify(i)
        }
    }

    extractMax() {
        [this.list[0], this.list[this.list.length-1]] = [this.list[this.list.length-1], this.list[0]]
        let res = this.list.pop()
        this.heapify(0)

        return res
    }

    show() {
        console.log(this.list)
    }
}

module.exports.MinHeap = MinHeap
module.exports.MaxHeap = MaxHeap