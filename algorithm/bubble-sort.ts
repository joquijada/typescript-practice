/**
 * For every number in the array, check if it is greater than any of the numbers that follow, and if so swap it to the right.
 * @param arr
 */

function bubbleSort(arr: number[]) {
  if (arr.length <= 1) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const iNumber = arr[i]
      const jNumber = arr[j]
      if (iNumber && jNumber && iNumber > jNumber) {
        // swap them
        const temp = arr[j];
        arr[j] = arr[i]!;
        arr[i] = temp!;
      }
    }
  }
}

// Test
const ary = [1, 4, 3, 5, 2]
bubbleSort(ary)
console.log(ary)
