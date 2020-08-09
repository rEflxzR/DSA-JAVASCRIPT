# BINARY TREES

A Tree is said to be a Binary Tree if all of its nodes have atmost 2 children. That is, all of its node can have either no child, 1 child or 2 child nodes.

![Binary Tree](https://www.cdn.geeksforgeeks.org/wp-content/uploads/tree.jpg)

## Basic Tree Terminologies:
**Root:** The root of a tree is the first node of the tree. In the above image, the root node is the node 30.<br/>
**Edge:** An edge is a link connecting any two nodes in the tree. For example, in the above image there is an edge between node 11 and 6.<br/>
**Siblings:** The children nodes of same parents are called siblings of each other. That is, the nodes with same parents are called siblings. In the above tree, nodes 5, 11 and 63 are siblings.<br/>
**Leaf Node:** A node is said to be the leaf node if it has no children. In the above tree, node 15 is one of the leaf node.<br/>
**Height of a Tree:** Height of a tree is defined as the total number of levels in the tree or the length of the path from the root node to the node present at the last level. The above tree is of height 2.
<br/>
<br/>
<br/>
## Properties of Binary Tree:
**1**. The maximum number of nodes at level 'l' of a binary tree is (2l - 1)<br/>
**2**. Maximum number of nodes in a binary tree of height 'h' is (2h – 1)<br/>
**3**. In a Binary Tree with N nodes, the minimum possible height or the minimum number of levels is Log2(N+1)<br/>
**4**. A Binary Tree with L leaves has at least (Log2L + 1) levels<br/>
**5**. In a Binary tree where every node has 0 or 2 children, number of leaf nodes is always one more than nodes with two children<br/>
<br/>
<br/>
## Properties of Binary Tree:
**Full Binary Tree:** Binary Tree is full if every node has either 0 or 2 children. The following are examples of a full binary tree. We can also say a full binary tree is a binary tree in which all nodes except leaves have two children.<br/>
![Full Binary Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191211141440/136.png)
![Full Binary Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191211141452/226.png)
![Full Binary Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191211141507/324.png)
<br/>
**Complete Binary Tree:** A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible. Following are examples of Complete Binary Trees:<br/>
![Complete Binary Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191211141521/416.png)
![Complete Binary Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191211141536/520.png)
###### In a Full Binary, number of leaf nodes is number of internal nodes plus 1
<br/>
**Perfect Binary Tree:** A Binary tree is Perfect Binary Tree in which all internal nodes have two children and all leaves are at the same level. Following are examples of Perfect Binary Trees:<br/>
![Perfect Binary Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191211141548/617.png)
![Perfect Binary Tree](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191211141559/714.png)
###### A Perfect Binary Tree of height h (where height is the number of nodes on the path from the root to leaf) has 2h – 1 node
