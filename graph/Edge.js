

class Edge {
    value;
    vertexIndex;
    next;
    constructor(vertexIndex, value) {
        this.value = value;
        this.vertexIndex = vertexIndex;
    }

    setNext(next) {
        this.next = next;
    }
};
module.exports.Edge = Edge;