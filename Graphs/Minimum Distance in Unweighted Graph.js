// Find the Minimum Distance between a Source Vertex and a Destination Vertex

let {Graph} = require('./Graph.js')
let {Queue} = require('../Queues/Queue.js')

function minimumDistance(graph, rootvertex, destinationvertex) {

    let queue = new Queue()
    let visited = {}
    let distance = {}

    queue.enqueue(rootvertex)
    visited[rootvertex] = true
    distance[rootvertex] = 0

    while(!queue.isEmpty()) {
        let vertex = queue.dequeue()
        for(let v of graph.list[vertex]) {
            if(visited[v]==undefined) {
                visited[v] = true
                distance[v] = distance[vertex] + 1
                queue.enqueue(v)
            }
        }
    }

    console.log(distance[destinationvertex])
}

let graph = new Graph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)

graph.addEdge(1,2)
graph.addEdge(1,3)
graph.addEdge(2,4)
graph.addEdge(3,4)
graph.addEdge(3,5)
graph.addEdge(4,6)
graph.addEdge(1,5)

minimumDistance(graph, 1, 5)
minimumDistance(graph, 1, 6)