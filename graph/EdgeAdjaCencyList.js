const { Edge } = require("./Edge");

class EdgeAdjaCencyList {
    vertices = [];
    edges = [];
    constructor(vertices) {
        this.vertices = vertices;
    }

    setVertices(vertices) {
        this.vertices = vertices;
    }

    setEdge(vertex, vertices, values) {
        let verIndex = this.vertices.indexOf(vertex);
        let edge = new Edge(this.vertices.indexOf(vertices[0]), values[0]);
        this.edges[verIndex] = edge;
        for (let index = 1; index < vertices.length; index++) {
            let nextEdge = new Edge(this.vertices.indexOf(vertices[index]), values[index]);
            edge.setNext(nextEdge);
            edge = nextEdge;
        }
        return this;
    }
}

module.exports.EdgeAdjaCencyList = EdgeAdjaCencyList;