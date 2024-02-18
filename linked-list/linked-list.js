
// input -> 6,11,98,34,45,60,60
let rootNode = createNode(98);

const element = [23, 56, 29, 99, 52, 38, 45];

insertMany(element);
traverseRecursively(rootNode);
// rootNode = reverseLinkedListIteratively(rootNode);
// traverse(rootNode);

function insertMany(items) {
    while (items.length > 0) {
        setAndInsert(items.shift(), rootNode);
    }
}

function createNode(value) {
    return { value, next: null };
}

function setAndInsert(value, rootNode) {
    let nextNode = rootNode;
    while (nextNode.next) {
        nextNode = nextNode.next;
    }
    nextNode.next = createNode(value);
}

function traverseIteratively(rootNode) {
    let nextNode = rootNode;
    while (nextNode.next) {
        console.log("node value is ", nextNode.value);
        nextNode = nextNode.next;
    }
    console.log("node value is ", nextNode.value);
}

function traverseRecursively(node) {
    if (node.next) {
        traverseRecursively(node.next);
        console.log("value is ", node.value);
    } else {
        console.log("value is ", node.value);
    }

}

function reverseLinkedListIteratively(rootNode) {
    let currentNode = rootNode;
    let previousNode = null;
    while (currentNode.next) {
        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    currentNode.next = previousNode;
    return currentNode;
}