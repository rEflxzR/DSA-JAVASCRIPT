let {Graph} = require('../Graph.js')

function depthFirstSearchRecursion(rootvertex, visited={}) {
    if(visited[rootvertex]) {
        return
    }

    visited[rootvertex] = true
    console.log(rootvertex)
    for(let v of graph.list[rootvertex]) {
        if(visited[v]==undefined) {
            depthFirstSearchRecursion(v, visited)
        }
    }
}

function DFSDisconnected() {

    let visited = {}

    for(let vertex of Object.keys(graph.list)) {
        if(visited[vertex]==undefined) {
            depthFirstSearchRecursion(vertex, visited)
        }
    }
}

let graph = new Graph()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)

graph.addEdge(1,2)
graph.addEdge(1,3)
graph.addEdge(2,3)
graph.addEdge(3,4)
graph.addEdge(5,6)
graph.addEdge(5,7)
graph.addEdge(7,6)


DFSDisconnected()