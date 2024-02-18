

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

const binaryTreeTraversal = (binaryTree) => {
    if (binaryTree) {
        binaryTreeTraversal(binaryTree.left);
        binaryTreeTraversal(binaryTree.right);
    }
};