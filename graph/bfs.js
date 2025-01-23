
const explore = (adjacencyList) => {
    const queue = [];
    const explored = [];
    queue.push(adjacencyList.vertices[0]);
    console.log("visiting vertex", adjacencyList.vertices[0]);
    explored.push(adjacencyList.vertices[0]);
    while (queue.length > 0) {
        const vertex = queue.shift();
        const verIndex = adjacencyList.vertices.indexOf(vertex);
        let edges = adjacencyList.edges[verIndex];
        while (edges) {
            let vertex = adjacencyList.vertices[edges.vertexIndex];
            if (explored.indexOf(vertex) < 0) {
                queue.push(vertex);
                console.log("visiting vertex", vertex);
                explored.push(vertex);
            }
            edges = edges.next;
        }
    }
};
module.exports.bfsExplore = explore;