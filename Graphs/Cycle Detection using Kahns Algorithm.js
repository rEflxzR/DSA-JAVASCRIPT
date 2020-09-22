let {DirectedGraph} = require('./Graph.js')
let {Queue} = require('../Queues/Queue.js')

function cycleDetectionKahnsAlgorithm(graph) {
    let indegrees = {}
    let zerodegrees = {}
    let queue = new Queue()
    let count = 0
    let max = Object.keys(graph.list).length

    for(let vertex of Object.keys(graph.list)) {
        if(indegrees[vertex]==undefined) {
            indegrees[vertex] = 0
            zerodegrees[vertex] = true
        }
        for(let nv of graph.list[vertex]) {
            if(indegrees[nv]==undefined) {
                indegrees[nv] = 1
            }
            else {
                indegrees[nv]++
            }
            if(zerodegrees[nv]) {
                delete zerodegrees[nv]
            }
        }
    }

    for(let vertex of Object.keys(zerodegrees)) {
        queue.enqueue(vertex)
    }

    while(!queue.isEmpty()) {
        let vertex = queue.dequeue()
        count++
        for(let nv of graph.list[vertex]) {
            indegrees[nv]--
            if(indegrees[nv]==0) {
                queue.enqueue(nv)
            }
        }
    }

    if(count<max) {
        return true
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


console.log(cycleDetectionKahnsAlgorithm(graph))