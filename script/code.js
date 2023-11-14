let numbers = [12, 18, 11, 5, 8, 2];
//showing the array length
console.log(numbers.length);
//displaying lenght half
console.log(numbers.length/2)


//creating function for finding middle
function findMiddle(array) {
const middle = array.length >> 1;
return array.length & 1 ? array[middle]
    : array.slice(middle - 1, middle + 1);
}
//displaying 
console.log(findMiddle([12, 18, 11, 5, 8, 2]));