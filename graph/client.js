const { EdgeAdjaCencyList } = require("./EdgeAdjaCencyList");
const { bfsExplore } = require("./bfs");
const { dfsExplore } = require("./dfs");

function input1() {
    const list = new EdgeAdjaCencyList(["1", "2", "3", "4", "5", "6", "7"]);

    list.setEdge("1", ["2", "4"], [16, 12])
        .setEdge("2", ["1", "3", "5"], [16, 9, 0])
        .setEdge("3", ["2", "6"], [12, 7])
        .setEdge("4", ["1", "5"], [9, 7])
        .setEdge("5", ["2", "4", "6", "7"], [9, 7, 0, 0])
        .setEdge("6", ["5", "3"], [9, 7])
        .setEdge("7", ["5"], [9]);
    return list;
}

function input2() {
    const list = new EdgeAdjaCencyList(["a", "b", "c", "d"]);

    list.setEdge("a", ["b", "c"], [16, 12])
        .setEdge("b", ["a", "d"], [16, 9])
        .setEdge("c", ["a", "d"], [12, 7])
        .setEdge("d", ["b", "c"], [9, 7]);
    return list;
}
// bfsExplore(list);
dfsExplore(input2());