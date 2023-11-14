let number = [12, 18, 11, 5, 8, 2];
//showing the array length
console.log(numbers.length);
//displaying lenght half
console.log(numbers.length/2)






// //not working code 
// function findMedian(arr) {
//     arr.sort((a, b) => a - b);
//     const middleIndex = Math.floor(arr.length / 2);

//     if (arr.length % 2 === 0) {
//         return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
//     } else {
//         return arr[middleIndex];
//     }
// }
// console.log(findMedian,numbers)

function displayMiddleNumber(numbers) {
    const length = numbers.length;
    if (length % 2 === 0) {
      // If the array has an even number of elements, return the two middle numbers
      const middleIndex1 = length / 2 - 1;
      const middleIndex2 = length / 2;
      console.log(`Two middle numbers: ${numbers[middleIndex1]}, ${numbers[middleIndex2]}`);
    } else {
      // If the array has an odd number of elements, return the middle number
      const middleIndex = Math.floor(length / 2);
      console.log(`Middle number: ${numbers[middleIndex]}`);
    }
  }
  // Example usage with the provided array
  let numbers = [12, 18, 11, 5, 8, 2];
  displayMiddleNumber(numbers);

//going to try with splice
function middle(){
    let mids = numbers.length/2
    numbers.slice[numbers.length]
}
