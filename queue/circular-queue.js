export default function circularQueue(itemLength) {
    const arrayLength = itemLength;
    const container = new Array(arrayLength);
    let rear = -1;
    let front = -1;
    const enqueue = (item) => {
        if (rear === -1) {
            rear++;
        }
        if (!isFull()) {
            front = ++front % arrayLength;
            container[front] = item;
        }
    }

    const isEmpty = () => {
        // when front and rear points to same index and index is -1 or rear greater than front and 
        let isEmpty = false;
        if ((front === rear && rear === -1) || (rear > front)) {
            isEmpty = true;
        }
        return isEmpty;
    }

    const isFull = () => {
        // when front and rear points to same index and index is -1 or rear greater than front and 
        let isFull = false;
        if ((front === (arrayLength - 1) && rear === 0) || (front !== -1 && (rear - front) === 1)) {
            isFull = true;
        }
        return isFull;
    }

    const dequeue = () => {
        if (rear > -1) {
            rear = ++rear % arrayLength;
            container[rear] = null;
        }
    }
    const state = () => {
        return { front, rear };
    }
    return { container, enqueue, dequeue, isEmpty, isFull, state };
}