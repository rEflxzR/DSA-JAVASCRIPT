let {Node, BinaryTree} = require('../BINARY TREE NODE.js')
let {Queue} = require('../../Queues/Queue.js')
let {Stack} = require('../../Stacks/Stack.js')


function spiralForm(rootnode) {
    let stack = new Stack()
    let queue = new Queue()
    let res = []
    let level = 1
    stack.push(rootnode)
    res.push(rootnode.data)

    while(!stack.isEmpty()) {
        let size = stack.size()

        if(level%2==0) {
            for(let i=0; i<size; i++) {
                let node = stack.pop()
                if(node.left) {
                    queue.enqueue(node.left)
                }
                if(node.right) {
                    queue.enqueue(node.right)
                }
            }
        }
        else {
            for(let i=0; i<size; i++) {
                let node = stack.pop()
                if(node.right) {
                    queue.enqueue(node.right)
                }
                if(node.left) {
                    queue.enqueue(node.left)
                }
            }
        }
        
        level++
        while(!queue.isEmpty()) {
            let newdata = queue.dequeue()
            res.push(newdata.data)
            stack.push(newdata)
        }
    }

    console.log(res)

}

let tree = new BinaryTree()

// tree.root = new Node(10)               // [10, 30, 20, 40, 50, 80, 70, 60]
// tree.root.left = new Node(20)
// tree.root.right = new Node(30)
// tree.root.right.left = new Node(40)
// tree.root.right.left.left = new Node(60)
// tree.root.right.left.right = new Node(70)
// tree.root.right.right = new Node(50)
// tree.root.right.right.right = new Node(80)


tree.root = new Node(1)                // [1, 3, 2, 4, 5, 6, 7, 10, 9, 8]
tree.root.left = new Node(2)
tree.root.right = new Node(3)
tree.root.left.left = new Node(4)
tree.root.left.right = new Node(5)
tree.root.right.left = new Node(6)
tree.root.right.right = new Node(7)
tree.root.left.left.left = new Node(8)
tree.root.left.left.right = new Node(9)
tree.root.right.left.left = new Node(10)

spiralForm(tree.root)