let {Node, BinaryTree} = require('../BINARY TREE NODE.js')


function floorBST(rootnode, val, key=null) {
    if(!rootnode){
        return key
    }

    if(rootnode.data==val) {
        key = rootnode.data
    }
    else if(rootnode.data<val && rootnode.data>key) {
        key = rootnode.data
    }

    if(val<rootnode.data) {
        return floorBST(rootnode.left, val, key)
    }
    return floorBST(rootnode.right, val, key)
}


let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(5)
tree.root.right = new Node(15)
tree.root.right.right = new Node(30)
tree.root.right.left = new Node(12)

console.log(floorBST(tree.root, 14))                // 12
console.log(floorBST(tree.root, 100))               // 30
console.log(floorBST(tree.root, 7))                 // 5
console.log(floorBST(tree.root, 4))                 // null



// tree.root = new Node(50)
// tree.root.left = new Node(30)
// tree.root.left.left = new Node(20)
// tree.root.left.right = new Node(40)
// tree.root.right = new Node(70)
// tree.root.right.left = new Node(60)
// tree.root.right.left.left = new Node(55)
// tree.root.right.left.right = new Node(65)
// tree.root.right.right = new Node(80)

// console.log(floorBST(tree.root, 58))                  // 55