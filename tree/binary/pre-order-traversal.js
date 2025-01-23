

function traverseByPreOrder(input) {
    if (input === undefined) {
        return;
    } else {
        console.log(input.name);
        traverseByPreOrder(input.left);
        traverseByPreOrder(input.right);
    }
}

const binaryTreeStructure = {
    name: 70,
    left: {
        name: 50,
        left: {
            name: 40,
            left: {
                name: 30
            },
            right: {
                name: 45
            }
        },
        right: {
            name: 60,
            right: {
                name: 65
            }
        }
    },
    right: {
        name: 90,
        left: {
            name: 80,
        },
        right: {
            name: 100,
            left: {
                name: 95
            },
            right: {
                name: 120
            },
        }
    }
};

console.log(traverseByPreOrder(binaryTreeStructure));