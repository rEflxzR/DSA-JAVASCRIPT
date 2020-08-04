/*  
    USING 2 ARRAYS, A QUEUE AND AN ARRAY TO STORE THE RESULTS
    FIRST PUSH THE ROOT NODE TO THE QUEUE (NOT node.data BUT THE WHOLE NODE)
    ITERATE OVER THE QUEUE AS LONG AS ITS NOT EMPTY
    IF THE FIRST ITEM IN QUEUE HAS LEFT NODE, PUSH IT TO QUEUE. REPEAT FOR RIGHT NODE
    NOW REMOVE THE FIRST NODE FROM QUEUE AND ADD ITS DATA TO THE RESULTS ARRAY
    RETURN THE RESULTS ARRAY AT THE END
*/

let {Node, BinaryTree} = require('../Binary Tree Node.js')

let tree = new BinaryTree()

tree.root = new Node(10)
tree.root.left = new Node(6)
tree.root.right = new Node(15)
tree.root.left.left = new Node(3)
tree.root.left.right = new Node(8)
tree.root.right.right = new Node(20)



function BreadthFirstSearch(root) {
    let q = []
    let r = []

    q.push(root)
    while(q.length!=0) {
        if(q[0].left) {
            q.push(q[0].left)
        }
        if(q[0].right) {
            q.push(q[0].right)
        }

        r.push(q.shift().data)
    }

    return r
}

console.log(BreadthFirstSearch(tree.root))