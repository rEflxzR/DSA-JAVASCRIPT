let {Node, BinaryTree} = require('../BINARY TREE NODE.js')
let {Queue} = require('../../Queues/Queue.js')

/*
    WE CAN FIND THE MAX WIDTH OF ANY LEVEL, BY USING LEVEL ORDER TRAVERSAL FOR A TREE
    FOR EACH LEVEL, WE USE A 2nd LOOP, WHICH IS USED TO DEQUEUE ALL PARTICULAR NODES AND ENQUEUE THEIR CHILDREM
*/

function maximumWidth(rootnode) {
    let max = 0
    let queue = new Queue()
    queue.enqueue(rootnode)

    while(!queue.isEmpty()) {
        let count = queue.size()
        max = Math.max(max, count)

        for(let i=1; i<=count; i++) {

            let node = queue.dequeue().data
            if(node.left) {
                queue.enqueue(node.left)
            }
            if(node.right) {
                queue.enqueue(node.right)
            }
        }
    }

    return max
}


let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(20)
tree.root.right = new Node(30)
tree.root.left.left = new Node(40)
tree.root.left.right = new Node(50)
tree.root.right.left = new Node(60)
tree.root.right.right = new Node(70)


console.log(maximumWidth(tree.root))