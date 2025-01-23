
export function deleteRootElementFromMaxHeaps(input) {
    let currentIndex = 0;
    console.log(input[currentIndex]);
    const poppedItem = input.pop();
    input[currentIndex] = poppedItem;
    let leftNextDescendentIndex = currentIndex * 2 + 1;
    let rightNextDescendentIndex = currentIndex * 2 + 2;
    let maxDescendentValue, maxDescendentIndex;
    if (input[leftNextDescendentIndex] > input[rightNextDescendentIndex]) {
        maxDescendentIndex = leftNextDescendentIndex;
        maxDescendentValue = input[leftNextDescendentIndex];
    } else {
        maxDescendentIndex = rightNextDescendentIndex;
        maxDescendentValue = input[rightNextDescendentIndex];
    }
    while (input[currentIndex] < maxDescendentValue) {
        input[maxDescendentIndex] = input[currentIndex];
        input[currentIndex] = maxDescendentValue;
        currentIndex = maxDescendentIndex;
        leftNextDescendentIndex = currentIndex * 2 + 1;
        rightNextDescendentIndex = currentIndex * 2 + 2;
        maxDescendentValue, maxDescendentIndex;
        if (input[leftNextDescendentIndex] > input[rightNextDescendentIndex]) {
            maxDescendentIndex = leftNextDescendentIndex;
            maxDescendentValue = input[leftNextDescendentIndex];
        } else {
            maxDescendentIndex = rightNextDescendentIndex;
            maxDescendentValue = input[rightNextDescendentIndex];
        }
    }
}