/*
    We maintain both the Stacks from each end of the Array, Whenever there is an Overlapping situation of Top
    elements, Stack Becomes full. for pop, We just return the top element and adjust the top reference instead 
    actually removing it. For next push operation, we just overwrite it
*/

class TwoStacks {
    constructor(size) {
        this.stack = new Array(size)
        this.top1 = -1
        this.top2 = this.stack.length
    }

    top1element() {
        return this.stack[this.top1]
    }

    top2element() {
        return this.stack[this.top2]
    }

    push1(val) {
        if(this.top1==this.top2-1) {
            return "Stack Overflow"
        }

        this.stack[this.top1+1] = val
        this.top1++
    }

    push2(val) {
        if(this.top1==this.top2-1) {
            return "Stack Overflow"
        }

        this.stack[this.top2-1] = val
        this.top2--
    }

    pop1() {
        if(this.top1==-1) {
            return "Stack Underflow"
        }

        this.top1--
        return this.stack[this.top1+1]
    }

    pop2() {
        if(this.top2==-1) {
            return "Stack Underflow"
        }

        this.top2++
        return this.stack[this.top2-1]
    }
}

let myDoubleStack = new TwoStacks(5)

console.log(myDoubleStack.pop1())
myDoubleStack.push1(5)
myDoubleStack.push1(3)
myDoubleStack.push1(6)
myDoubleStack.push2(7)
myDoubleStack.push2(4)
console.log(myDoubleStack.push2(1))
console.log(myDoubleStack.top1element())
console.log(myDoubleStack.top2element())
console.log(myDoubleStack.pop1())
console.log(myDoubleStack.top1element())
console.log(myDoubleStack.pop2())
myDoubleStack.push2(1)
myDoubleStack.push1(10)
console.log(myDoubleStack.top1element())
console.log(myDoubleStack.top2element())

