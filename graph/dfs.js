
const explore = (adjacencyList) => {
    const stack = [];
    const explored = [];
    stack.push(adjacencyList.vertices[0]);
    // explored.push(adjacencyList.vertices[0]);
    while (stack.length > 0) {
        const vertex = stack.pop();
        if (explored.indexOf(vertex) < 0) {
            console.log("visiting vertex", vertex);
            explored.push(vertex);
            const verIndex = adjacencyList.vertices.indexOf(vertex);
            let edges = adjacencyList.edges[verIndex];
            while (edges) {
                let vertex = adjacencyList.vertices[edges.vertexIndex];
                stack.push(vertex);
                edges = edges.next;
            }
        }
    }
};
module.exports.dfsExplore = explore;