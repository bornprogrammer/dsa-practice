import { queue, test } from "./queue.js";4x

import circularQueue from "./circular-queue.js";

const queueClient = () => {
    const { enqueue, dequeue, container } = queue();

    enqueue(5);

    enqueue(4);

    enqueue(10);

    dequeue();

    dequeue();

    enqueue(18);

    console.log(container);
};

const circularQueueClient = () => {
    const { enqueue, dequeue, container, isFull, isEmpty, state } = circularQueue(5);

    enqueue(5); enqueue(15); enqueue(25); enqueue(251); enqueue(252); dequeue(); dequeue(); enqueue(91), enqueue(98); dequeue(); dequeue(); dequeue(); enqueue(101); enqueue(102);
};

circularQueueClient();
queueClient();
test();