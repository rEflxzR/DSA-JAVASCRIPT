/*
    THE MAX ELEMENT IN A MAX BINARY HEAP IS THE ROOT NODE
    TO EXTRACT THE ROOT OUT THE MAX BINARY HEAP
    REPLACE THE ROOT NODE WITH THE LAST NODE IN THE HEAP
    POP THE ROOT NODE AND RETURN IT LATER
    NOW CHECK IF THE NEW ROOT IS ACTUALLY IN ITS RIGHT POSITION (AKA SINK IT DOWN THE RIGHT SPOT)
    IF NOT IN RIGHT SPOT - REPLACE THE ROOT NODE WITH THE LARGER CHILD VALUE
*/

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        let arr = this.values
        arr.push(val)

        while(true) {
            let cindex = arr.indexOf(val)
            let pindex = Math.floor((cindex-1)/2)

            if(arr[pindex]>arr[cindex] || pindex<0) {
                break
            }
            else {
                [arr[pindex], arr[cindex]] = [arr[cindex], arr[pindex]]
            }
        }
    }

    remove() {
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]]
        let max = this.values.pop()
        let newroot = this.values[0]

        while(true) {
            let p = this.values.indexOf(newroot)
            let c1 = 2*this.values.indexOf(newroot)+1
            let c2 = 2*this.values.indexOf(newroot)+2

            if(this.values[c1] && this.values[c2] && (this.values[p]<this.values[c1] || this.values[p]<this.values[c2])) {
                if(this.values[c1]>this.values[c2]) {
                    [this.values[p], this.values[c1]] = [this.values[c1], this.values[p]]
                }
                else {
                    [this.values[p], this.values[c2]] = [this.values[c2], this.values[p]]
                }
            }
            else if(this.values[c2]==undefined && this.values[c1] && this.values[p]<this.values[c1]) {
                [this.values[p], this.values[c1]] = [this.values[c1], this.values[p]]
            }
            else {
                break
            }
        }
        
        return max
    }

    show() {
        if(!this.values.length) {
            console.log("Binary Heap is Empty")
        }
        else {
            console.log(this.values)
        }
    }
}

let maxbinaryheap = new MaxBinaryHeap()
maxbinaryheap.show()
maxbinaryheap.insert(70)
maxbinaryheap.insert(67)
maxbinaryheap.insert(65)
maxbinaryheap.insert(45)
maxbinaryheap.insert(58)
maxbinaryheap.insert(40)
maxbinaryheap.insert(53)
maxbinaryheap.insert(44)
maxbinaryheap.insert(15)
maxbinaryheap.insert(31)

console.log("\n")
maxbinaryheap.show()
console.log("\n")
console.log(maxbinaryheap.remove())
console.log(maxbinaryheap.remove())
console.log("\n")
maxbinaryheap.show()