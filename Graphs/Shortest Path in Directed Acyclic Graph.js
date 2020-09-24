let {DirectedWeightedGraph} = require('./Graph.js')
let {Queue} = require('../Queues/Queue.js')

function shortestPathDAG(graph, rootvertex) {

    distance = {}
    for(let vertex of Object.keys(graph.list)) {
        distance[vertex] = Infinity
    }

    let queue = new Queue()
    distance[rootvertex] = 0
    queue.enqueue(rootvertex)

    while(!queue.isEmpty()) {
        let vertex = queue.dequeue()
        for(let nv of graph.list[vertex]) {
            queue.enqueue(nv.vertex)
            distance[nv.vertex] = Math.min(distance[nv.vertex], distance[vertex]+nv.weight)
        }
    }

    return distance
}


let graph = new DirectedWeightedGraph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)

graph.addEdge(1,2,2)
graph.addEdge(2,3,3)
graph.addEdge(3,4,6)
graph.addEdge(1,5,1)
graph.addEdge(5,3,2)
graph.addEdge(5,6,4)
graph.addEdge(6,4,1)

console.log(shortestPathDAG(graph, 1))