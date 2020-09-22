
let {Graph} = require('../Graph.js')
let {Stack} = require('../../Stacks/Stack.js')

function depthFirstSearchIterative(rootvertex) {

    let stack = new Stack()
    let visited = {}

    stack.push(rootvertex)
    visited[rootvertex] = true

    while(!stack.isEmpty()) {
        let vertex = stack.pop()
        for(let v of graph.list[vertex]) {
            if(visited[v]==undefined) {
                visited[v] = true
                stack.push(v)
            }
        }
        console.log(vertex)
    }
}


// function depthFirstSearchRecursion(rootvertex, visited={}) {
//     if(visited[rootvertex]) {
//         return
//     }

//     visited[rootvertex] = true
//     console.log(rootvertex)
//     for(let v of graph.list[rootvertex]) {
//         if(visited[v]==undefined) {
//             depthFirstSearchRecursion(v, visited)
//         }
//     }
// }



let graph = new Graph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)

graph.addEdge(1,2)
graph.addEdge(1,5)
graph.addEdge(2,3)
graph.addEdge(3,4)
graph.addEdge(5,6)
graph.addEdge(5,7)
graph.addEdge(7,6)

depthFirstSearchIterative(1)
// depthFirstSearchRecursion(1)