# BINARY TREES

A Tree is said to be a Binary Tree if all of its nodes have atmost 2 children. That is, all of its node can have either no child, 1 child or 2 child nodes.

![Binary Tree](https://www.cdn.geeksforgeeks.org/wp-content/uploads/tree.jpg)

## Basic Tree Terminologies:
<strong>Root:</strong> The root of a tree is the first node of the tree. In the above image, the root node is the node 30.<br/>
<strong>Edge:</strong> An edge is a link connecting any two nodes in the tree. For example, in the above image there is an edge between node 11 and 6.<br/>
<strong>Siblings:</strong> The children nodes of same parents are called siblings of each other. That is, the nodes with same parents are called siblings. In the above tree, nodes 5, 11 and 63 are siblings.<br/>
<strong>Leaf Node:</strong> A node is said to be the leaf node if it has no children. In the above tree, node 15 is one of the leaf node.<br/>
  <strong>Height of a Tree:</strong> Height of a tree is defined as the total number of levels in the tree or the length of the path from the root node to the node present at the last level. The above tree is of height 2.<br/>
<br/>
<br/>
## Properties of Binary Tree:
1. The maximum number of nodes at level 'l' of a binary tree is (2l - 1)
2. Maximum number of nodes in a binary tree of height 'h' is (2h – 1)
3. In a Binary Tree with N nodes, the minimum possible height or the minimum number of levels is Log2(N+1)
4. A Binary Tree with L leaves has at least (Log2L + 1) levels
5. In a Binary tree where every node has 0 or 2 children, number of leaf nodes is always one more than nodes with two children
