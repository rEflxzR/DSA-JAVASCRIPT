/*
    DFS PREORDER TRAVERSAL ==== NODE -> LEFT -> RIGHT
    FOR PREORDER --- KEEP PUSHING THE LEFT SIDE DATA, WHEN YOU HIT NULL, RETURN AND PUSH THE RIGHT SIDE
    PASS THE ROOT NODE AS ARGUMENT TO THE FUNCTION
    IF ROOT IS NULL, RETURN NOTHING
    ELSE PUSH THE ROOT NODE DATA TO A LIST
    THEN CALL THE FUNCTION AGAIN WITH THE LEFT SIDE OF CURRENT ROOT NODE
    THEN CALL THE FUNCTION WITH THE RIGHT NODE OF ROOT
    FINALLY RETURN THE LIST
*/

let {Node, BinaryTree} = require('../../BINARY TREE NODE.js')


let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(6)
tree.root.right = new Node(15)
tree.root.left.left = new Node(3)
tree.root.left.right = new Node(8)
tree.root.right.right = new Node(20)



function depthFirstSearchPreOrder(root, arr=[]) {   // PURE RECURSION
    if(!root) {
        return
    }
    arr.push(root.data)
    depthFirstSearchPreOrder(root.left, arr)
    depthFirstSearchPreOrder(root.right, arr)

    return arr
}

// function depthFirstSearchPreOrder(root) {     // USING HELPER METHOD RECURSION
//     let temp = root
//     let arr = []

//     function helper(node) {
//         if(!node) {
//             return
//         }
//         arr.push(node.data)
//         helper(node.left)
//         helper(node.right)
//     }
//     helper(temp)

//     return arr
// }

console.log(depthFirstSearchPreOrder(tree.root))