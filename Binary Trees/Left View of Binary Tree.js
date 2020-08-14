let {Node, BinaryTree} = require('./Binary Tree Node.js')

let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(50)
tree.root.right = new Node(60)
tree.root.right.left = new Node(70)
tree.root.right.left.right = new Node(8)
tree.root.right.right = new Node(20)


/*
    APPROACH - We maintain a global variable to check whats the maximum level we have traversed in the Binary Tree
               Then we Traverse the Tree using Preorder, also there is a Level variable passed to the function call
               to Determine if we have visited this level before or not
*/
let maxlevel = 0

function leftView(rootnode, level=1) {
    if(!rootnode) {
        return
    }

    if(maxlevel<level) {
        console.log(rootnode.data)
        maxlevel = level
    }

    leftView(rootnode.left, level+1)
    leftView(rootnode.right, level+1)
}

leftView(tree.root)