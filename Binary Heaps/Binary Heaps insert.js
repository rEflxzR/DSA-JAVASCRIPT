/*  
    THE LEFT CHILD IS ALWYAS FILLED OUT FIRST, ALSO A BINARY HEAP IS AS COMPACT AS POSSIBLE SO EACH LEVEL IS FILLED BEFORE MOVING DOWN
    IN A MAX BINARY HEAP - THE PARENT NODE IS ALWAYS BIGGER THAN THE CHILDREN NODES AND THERE IS NO RELATION BETWEEN SIBLINGS
    IN A MIN BINARY HEAP - THE PARENT NODE IS ALWAYS SMALLER THAN THE CHILDREN NODES AND THERE IS NO RELATION BETWEEN SIBLINGS
    APART FROM THESE 2 RULES, NOTHING ELSE IS RELATED IN A BINARY HEAP
*/

// MAX BINARY HEAP INSERT IMPLEMENTATION
/*
    CREATE AN EMPTY ARRAY FROM THE CONSTRUCTOR
    FOR INSERT, PUSH THE VALUE IN THE ARRAY
    NOW BUBBLE UP THE PUSHED VALUE TO ITS CORRECT SPOT
    IN A WHILE LOOP, CHECK IF THE VALUE OF PARENT COMPARED TO CHILD IS APPROPRIATE OR NOT
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
                [arr[pindex], arr[cindex]] = [arr[cindex], arr[pindex]]  // SOME ES6 SYNTAX FOR SHOWOFF :-)
            }
        }
    }

    show() {
        if(this.values.length==0) {
            console.log("Binary Heap is Empty")
        }
        else {
            console.log(this.values)
        }
    }
}

let maxbinaryheap = new MaxBinaryHeap()

maxbinaryheap.show()
maxbinaryheap.insert(41)
maxbinaryheap.insert(39)
maxbinaryheap.insert(33)
maxbinaryheap.insert(18)
maxbinaryheap.insert(27)
maxbinaryheap.insert(12)
console.log("\n")
maxbinaryheap.show()
console.log("\n\n")
maxbinaryheap.insert(55)
maxbinaryheap.show()
maxbinaryheap.insert(95)
maxbinaryheap.show()