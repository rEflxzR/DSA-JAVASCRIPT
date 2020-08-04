let {Node, BinaryTree} = require('./Binary Tree Node.js')

let tree = new BinaryTree()

// tree.root = new Node(30)                         // NO
// tree.root.left = new Node(40)
// tree.root.right = new Node(80)
// tree.root.left.left = new Node(50)
// tree.root.left.right = new Node(70)
// tree.root.left.right.left = new Node(20)
// tree.root.left.right.right = new Node(10)
// tree.root.left.right.right.right = new Node(100)
// tree.root.left.right.right.right.right = new Node(200)
// tree.root.right.left = new Node(5)

tree.root = new Node(30)                         // YES
tree.root.left = new Node(40)
tree.root.right = new Node(80)
tree.root.left.left = new Node(50)
tree.root.left.right = new Node(70)
tree.root.left.right.left = new Node(20)
tree.root.left.right.right = new Node(10)
tree.root.right.left = new Node(5)


/*
    APPROACH - To check if the Tree is balanced or not, We check if the Left and Right Subtree height for
               any node at max differ by 1. We find the Left and Right sub tree height and if they differ
               by more than 1, we Return -1. After each subtree call, we check if the call return -1 or not
               if -1 is return at any point, then the Tree cannot be balanced and we return -1 to root
*/

function balancedBinaryTree(rootnode) {
    if(!rootnode) {
        return 0
    }
    let left = balancedBinaryTree(rootnode.left)
    if(left==-1) {
        return -1
    }

    let right = balancedBinaryTree(rootnode.right)
    if(right==-1) {
        return -1
    }

    if(Math.abs(left-right) > 1) {
        return -1
    }
    else {
        return 1 + Math.max(left, right)
    }
}

if(balancedBinaryTree(tree.root)==-1) {
    console.log("NO")
}
else {
    console.log("YES")
}