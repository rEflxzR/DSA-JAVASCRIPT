let {DirectedGraph} = require('./Graph.js')

function depthFirstSearch(rootvertex, visit, recursion={}) {

    visit[rootvertex] = true
    recursion[rootvertex] = true

    for(let nv of graph.list[rootvertex]) {
        if(visit[nv]==undefined) {
            if(depthFirstSearch(nv, visit, recursion)) {
                return true
            }
        }
        else if(visit[nv] && recursion[nv]) {
            return true
        }
    }
    return false
}

function cycleDetectionDirected(graph, visited={}) {

    for(let vertex of Object.keys(graph.list)) {
        if(visited[vertex]==undefined) {
            visited[vertex] = true
            if(depthFirstSearch(vertex, visited)) {
                return true
            }
        }
    }

    return false
}


let graph = new DirectedGraph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)

graph.addEdge(1,2)
graph.addEdge(3,2)
graph.addEdge(3,4)
graph.addEdge(4,5)
graph.addEdge(5,6)
graph.addEdge(6,7)
graph.addEdge(7,4)


console.log(cycleDetectionDirected(graph))