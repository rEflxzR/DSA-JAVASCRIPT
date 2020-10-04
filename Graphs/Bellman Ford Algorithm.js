let {DirectedWeightedGraph} = require('./Graph.js')

function bellmanFord(graph, sourcevertex) {

    let distance = {}
    let V = Object.keys(graph.list).length

    for(let v of Object.keys(graph.list)) {
        distance[v] = Infinity
    }
    distance[sourcevertex] = 0

    for(let i=0; i<V; i++) {
        for(let vertex of Object.keys(graph.list)) {
            for(let nv of graph.list[vertex]) {
                distance[nv.vertex] = Math.min(distance[nv.vertex], distance[vertex]+nv.weight)
            }
        }
    }

    for(let vertex of Object.keys(graph.list)) {
        for(let nv of graph.list[vertex]) {
            if(distance[nv.vertex]>distance[vertex]+nv.weight) {
                console.log("Negative Weight Cycle Detected")
            }
        }
    }

    return distance
}


let graph = new DirectedWeightedGraph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)

graph.addEdge(1,2,1)
graph.addEdge(1,3,4)
graph.addEdge(2,3,-3)
graph.addEdge(2,4,2)
graph.addEdge(3,4,3)

console.log(bellmanFord(graph, 1))