/*
    TO GET THE MAX HEIGHT OF THE TREE
    PASS THE ROOT AS THE PARAMETER TO THE FUNCTION
    IF ROOT BECOMES NULL, RETURN 0 (YOU MIGHT RETURN -1 TO GET THE HEIGHT AND NOT MAX NODES LENGTH)
    CALL THE FUNCTION AGAIN WITH LEFT OF ROOT as Leftmax, AGAIN CALL THE FUNCTION WITH RIGHT OF ROOT as Rightmax
    AT END, RETURN MAX OF Leftmax/Rightmax + 1 

    THIS METHOD RECURSIVELY CHECKS FOR ALL THE BRANCHES ON BOTH LEFT AND RIGHT SIDE OF TREE
    AND MAX OF Leftmax/Rightmax ENSURES THAT MAXIMUM HEIGHT GETS ADDED UP
*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newnode = new Node(val)
        if(!this.root) {
            this.root = newnode
        }
        else {
            let temp = this.root
            while(true) {
                if(newnode.data < temp.data) {
                    if(!temp.left) {
                        temp.left = newnode
                        break
                    }
                    else {
                        temp = temp.left
                        continue
                    }
                }
                else{
                    if(!temp.right) {
                        temp.right = newnode
                        break
                    }
                    else {
                        temp = temp.right
                        continue
                    }
                }
            }

            return this
        }
    }

    height() {
        let maxleft = 0
        let maxright = 0
        let temp = this.root

        function BSTHeight(root) {
            if(!root) {
                return 0
            }

            maxleft = BSTHeight(root.left)
            maxright = BSTHeight(root.right)

            return Math.max(maxleft, maxright)+1
        }

        return BSTHeight(temp)-1
    }
}

let tree = new BinarySearchTree()

tree.insert(37)
tree.insert(13)
tree.insert(23)
tree.insert(57)
tree.insert(53)
tree.insert(84)
tree.insert(35)
tree.insert(64)
tree.insert(10)
tree.insert(8)
tree.insert(11)

console.log(tree.height())