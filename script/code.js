// let number = [12, 18, 11, 5, 8, 2];
// //showing the array length
// console.log(numbers.length);
// //displaying lenght half
// console.log(numbers.length/2)






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
      const middleIndex1 = length / 2 - 1;
      const middleIndex2 = length / 2;
      console.log(`Two middle numbers: ${numbers[middleIndex1]}, ${numbers[middleIndex2]}`);
    } else {
      const middleIndex = Math.floor(length / 2);
      console.log(`Middle number: ${numbers[middleIndex]}`);
    }
  }
  let numbers = [12, 18, 11, 5, 8, 2];
  displayMiddleNumber(numbers);

//going to try with splice
function middle(){
    let mids = numbers.length/2
    numbers.slice[numbers.length]
}

// js EOMP
function deleteProduct(){
  try{
      let index = admin.findIndex(a =>{
          return a.id == a.id
      })
      localStorage.setItem('products', JSON.stringify(admin))
      admin.splice(index, 1)
  }catch(e){
      console.log(e.message);
  }
}
deleteProduct()

del.addEventListener('click', deleteProduct)