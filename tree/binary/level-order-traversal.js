

function traverseByLevelOrder(input) {

    const queue = [];
    console.log(input.name);
    if (input.left) {
        queue.push(input.left);
    }
    if (input.right) {
        queue.push(input.right);
    }

    while (queue.length > 0) {
        let shiftedElement = queue.shift();
        console.log(shiftedElement.name);
        if (shiftedElement.left) {
            queue.push(shiftedElement.left);
        }
        if (shiftedElement.right) {
            queue.push(shiftedElement.right);
        }
    }
}

const binaryTreeStructure = {
    name: "One",
    left: {
        name: "Two",
        left: {
            name: "Four",
            left: {
                name: "Seven"
            },
            right: {
                name: "Eight"
            }
        },
        right: {
            name: "Five",
            right: {
                name: "Nine",
                left: {
                    name: "Ten",
                    right: {
                        name: "Twelve"
                    }
                },
                right: {
                    name: "Eleven"
                }
            }
        },
    },
    right: {
        name: "Three",
        left: {
            "name": "Six"
        }
    }
};


console.log(traverseByLevelOrder(binaryTreeStructure));