class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(v) {
        this.list[v] = []
    }

    show() {
        console.log(this.list)
    }
}

let mygraph = new Graph()

mygraph.addVertex("Hawai")
mygraph.addVertex("ReflxzR")
mygraph.addVertex("jAnzWE")
mygraph.addVertex("Liverpool")
mygraph.show()