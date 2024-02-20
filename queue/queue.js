export default function queue() {
    const container = [];
    let rear = 0;
    let front = -1;
    const enqueue = (item) => {
        container[++front] = item;
    }

    const dequeue = () => {
        if (rear > -1 || rear !== front) {
            container[rear++] = null;
        }
    }
    return { container, enqueue, dequeue };
}