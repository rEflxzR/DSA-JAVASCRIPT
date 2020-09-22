let {Graph} = require('../Graph.js')
let {Queue} = require('../../Queues/Queue.js')

function breadthFirstSearch(rootvertex) {
    let queue = new Queue()
    let visited = {}
    queue.enqueue(rootvertex)
    visited[rootvertex] = true

    while(!queue.isEmpty()) {
        let vertex = queue.dequeue().data
        for(let n of graph.list[vertex]) {
            if(visited[n]==undefined) {
                queue.enqueue(n)
                visited[n] = true
            }
        }
        console.log(vertex)
    }
}



let graph = new Graph()

graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(0,5)
graph.addEdge(1,3)
graph.addEdge(3,5)
graph.addEdge(2,3)
graph.addEdge(4,5)

breadthFirstSearch(0)