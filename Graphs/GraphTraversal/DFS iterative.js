/*
    CREATE A STACK, AN ARRAY, AND AN OBJECT
    PUSH THE FIRST VERTEX INTO THE STACK
    USE A WHILE LOOP WHICH BREAKS WHEN STACK IS EMPTY
    POP THE VERTEX, CHECK IF THE VERTEX HAS BEEN VISITED OR NOT
        IF VISITED, THEN CONTINUE
        ELSE PUSH THE VERTEX AS KEY IN THE OBJECT AND SET IT AS TRUE
            AND PUSH THE VERTEX IN THE ARRAY
            NOW PUSH ALL THE NEIGHBOURING VERTICES OF THE VERTEX INTO THE STACK AND CONTINUE WITH THE LOOP
*/

class Graph {
    constructor() {
        this.list = []
    }

    addVertex(v) {
        this.list[v] = []
    }

    addEdge(v1, v2) {
        let vertex1 = this.list[v1]
        let vertex2 = this.list[v2]

        vertex1.push(v2)
        vertex2.push(v1)
    }

    show() {
        console.log(this.list)
    }
}

function dfsIterative(g, v) {
    let stack = []
    let arr = []
    let obj = {}
    stack.push(v)
    while(stack.length) {
        let vertex = stack.pop()
        if(!obj[vertex]) {
            arr.push(vertex)
            obj[vertex] = true
            for(let nv of g.list[vertex]) {
                stack.push(nv)
            }
        }
        else {
            continue
        }
    }
    return arr
}

let graph = new Graph()

graph.addVertex("ReflxzR")
graph.addVertex("mInXZkA")
graph.addVertex("jAnzWE")
graph.addVertex("rEplan")
graph.addVertex("qLimAxz")
graph.addEdge("ReflxzR", "jAnzWE")
graph.addEdge("ReflxzR", "mInXZkA")
graph.addEdge("ReflxzR", "rEplan")
graph.addEdge("qLimAxz", "jAnzWE")
graph.addEdge("mInXZkA", "rEplan")
graph.addEdge("mInXZkA", "qLimAxz")
graph.addEdge("mInXZkA", "jAnzWE")
graph.addEdge("rEplan", "jAnzWE")
graph.show()
console.log("\n")
console.log(dfsIterative(graph, "qLimAxz"))
console.log("\n")