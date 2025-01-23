import { deleteRootElementFromMaxHeaps } from "./deletion.js";
import { insertMaxHeap } from "./insertion.js";

let cnt = [68, 65, 38, 34, 33, 70, 40, 9, 2];

let maxHeapArray = insertMaxHeap(cnt);

console.log(maxHeapArray);

// let arrayLength = maxHeapArray.length;
for (let index = 0; index < 9; index++) {
    let poppedItem = deleteRootElementFromMaxHeaps(maxHeapArray);
}

console.log(maxHeapArray);