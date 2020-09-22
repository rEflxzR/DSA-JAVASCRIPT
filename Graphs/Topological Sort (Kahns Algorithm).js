let {DirectedGraph} = require('./Graph.js')
let {Queue} = require('../Queues/Queue.js')


function topologicalSort(graph) {
    let indegrees = {}
    let zerodegrees = {}
    let queue = new Queue()

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
        for(let nv of graph.list[vertex]) {
            indegrees[nv]--
            if(indegrees[nv]==0) {
                queue.enqueue(nv)
            }
        }
        console.log(vertex)
    }
}

let graph = new DirectedGraph()

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)

graph.addEdge(1,3)
graph.addEdge(1,4)
graph.addEdge(3,4)
graph.addEdge(2,4)
graph.addEdge(2,5)


topologicalSort(graph)