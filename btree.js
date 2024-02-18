// this is called b tree
// where 
// rules 
const node = createNewNode();

function insert(value, node) {
    if (node.pointer < node.container.length) {
        node.container[node.pointer] = value;
        node.pointer += 2;
    } else { // key slot is full

    }
}

insert(10, node);

insert(12, node);

insert(14, node);

console.log(node);

function createNewNode() {
    return { pointer: 1, container: new Array(5), };
}