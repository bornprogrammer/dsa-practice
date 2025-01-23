

export function insertMaxHeap(input) {
    let maxHeapArray = [];
    for (let index = 0; index < input.length; index++) {
        let item = input[index];
        if (maxHeapArray.length === 0) {
            maxHeapArray.push(item);
        } else {
            maxHeapArray.push(item);
            let currentItemIndex = maxHeapArray.length - 1;
            let parentIndex = Math.floor((currentItemIndex / 2)) + (currentItemIndex % 2) - 1;

            while (parentIndex >= 0 && currentItemIndex >= 0 && maxHeapArray[currentItemIndex] > maxHeapArray[parentIndex]) {
                let currentItem = maxHeapArray[currentItemIndex];
                maxHeapArray[currentItemIndex] = maxHeapArray[parentIndex];
                maxHeapArray[parentIndex] = currentItem;
                currentItemIndex = parentIndex;
                parentIndex = (currentItemIndex / 2) + (currentItemIndex % 2) - 1;
            }
        }
    }
    return maxHeapArray;
}