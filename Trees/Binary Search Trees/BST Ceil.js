let {Node, BinaryTree} = require('../BINARY TREE NODE.js')


function ceilBST(rootnode, val, key=Infinity) {
    if(!rootnode) {
        key==Infinity ? key = null : key = key
        return key
    }

    if(val==rootnode.data) {
        key = rootnode.data
    }
    else if(val<rootnode.data && rootnode.data<key) {
        key = rootnode.data
    }

    if(val<rootnode.data) {
        return ceilBST(rootnode.left, val, key)
    }
    return ceilBST(rootnode.right, val, key)
}


let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(5)
tree.root.right = new Node(15)
tree.root.right.left = new Node(12)
tree.root.right.right = new Node(30)

console.log(ceilBST(tree.root, 14))                   // 15
console.log(ceilBST(tree.root, 3))                    // 5
console.log(ceilBST(tree.root, 40))                  // null



// tree.root = new Node(50)
// tree.root.left = new Node(30)
// tree.root.left.left = new Node(20)
// tree.root.left.right = new Node(40)
// tree.root.right = new Node(70)
// tree.root.right.left = new Node(60)
// tree.root.right.left.left = new Node(55)
// tree.root.right.left.right = new Node(65)
// tree.root.right.right = new Node(80)

// console.log(ceilBST(tree.root, 70))                // 70
// console.log(ceilBST(tree.root, 73))                // 78