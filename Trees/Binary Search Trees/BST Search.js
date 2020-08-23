let {Node, BinaryTree} = require('../BINARY TREE NODE.js')


// USING RECURSION
function searchBST(val, rootnode) {
    if(!rootnode) {
        return false
    }
    if(rootnode.data==val) {
        return true
    }

    if(val<rootnode.data) {
        return searchBST(val, rootnode.left)
    }
    else {
        return searchBST(val, rootnode.right)
    }
}


// USING ITERATION
// function searchBST(val, rootnode) {
//     let temp = rootnode
//     while(temp!=null) {
//         if(temp.data==val) {
//             return true
//         }
//         if(val<temp.data) {
//             temp = temp.left
//         }
//         else {
//             temp = temp.right
//         }
//     }

//     return false
// }



let tree = new BinaryTree()

tree.root = new Node(15)
tree.root.left = new Node(5)
tree.root.left.left = new Node(3)
tree.root.right = new Node(20)
tree.root.right.left = new Node(18)
tree.root.right.left.left = new Node(16)
tree.root.right.right = new Node(80)

console.log(searchBST(16, tree.root))
console.log(searchBST(1, tree.root))
console.log(searchBST(80, tree.root))
console.log(searchBST(50, tree.root))