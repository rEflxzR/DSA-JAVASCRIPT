let {Graph} = require('./Graph.js')

function cycleDetectionUndirected(graph, rootvertex, visited={}, parent=null) {

    visited[rootvertex] = true
    
    for(let nv of graph.list[rootvertex]) {
        if(visited[nv]==undefined) {
            if(cycleDetectionUndirected(graph, nv, visited, rootvertex)) {
                return true
            }
        }
        else if (visited[nv] && nv!=parent) {
            return true
        }
    }

    return false
}


let graph = new Graph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)

graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(2,4)
graph.addEdge(4,3)
graph.addEdge(3,5)
graph.addEdge(5,6)

console.log(cycleDetectionUndirected(graph, 5))