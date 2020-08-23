let {Node, BinaryTree} = require('../BINARY TREE NODE.js')

let tree = new BinaryTree()

// tree.root = new Node(3)                     // FALSE
// tree.root.left = new Node(1)
// tree.root.right = new Node(2)
// tree.root.right.left = new Node(1)
// tree.root.right.right = new Node(2)

// tree.root = new Node(20)                    // TRUE
// tree.root.left = new Node(8)
// tree.root.right = new Node(12)
// tree.root.left.left = new Node(3)
// tree.root.left.right = new Node(5)

// tree.root = new Node(10)                    // TRUE
// tree.root.left = new Node(8)
// tree.root.right = new Node(2)
// tree.root.right.left = new Node(2)


/*
    APPROACH - Sum the left and right of a Node and see if it is equal to the parent node
               Also call the function for Left and Right Sub-Tree
               Whenever the sum is not equal to parent node, False is Returned and whole expression becomes False
*/

function childrenSum(rootnode) {
    if(!rootnode) {
        return true
    }
    if(!rootnode.left && !rootnode.right) {
        return true
    }

    let sum = 0
    
    if(rootnode.left!=null) {
        sum += rootnode.left.data
    }
    if(rootnode.right!=null) {
        sum += rootnode.right.data
    }

    return (sum==rootnode.data && childrenSum(rootnode.left) && childrenSum(rootnode.right))
}

console.log(childrenSum(tree.root))