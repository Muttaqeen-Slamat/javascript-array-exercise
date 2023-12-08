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

document.querySelector('#year').textContent = new Date().getFullYear();

let admin = JSON.parse(localStorage.getItem('products')) || [];
let adminTable = document.querySelector('[admin-staff]');

function adminContent() {
  try {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    adminTable.innerHTML = '';

    products.forEach((product, i) => {
      adminTable.innerHTML += `
        <tr class="text-center">
          <td>${product.name}</td>
          <td><img src="${product.image}" id="adminImg"></td>
          <td>
            <button id="adminEdit" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">
              <i class="bi bi-magic"></i>
            </button>
          </td>
          <td>
            <button id="adminDelete" admin-delete onclick='deleteProduct(${i})'>
              <i class="bi bi-trash3"></i>
            </button>
          </td>
        </tr>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${product.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <label for="recipient-name-${i}" class="col-form-label">Name:</label>
                <input type="text" class="form-control" id="recipient-name-${i}" value="${product.name}">
              </div>
              <div class="modal-body">
                <label for="recipient-spec-${i}" class="col-form-label">Specs:</label>
                <input type="text" class="form-control" id="recipient-spec-${i}" value="${product.spec}">
              </div>
              <div class="modal-body">
                <label for="recipient-price-${i}" class="col-form-label">Price:</label>
                <input type="text" class="form-control" id="recipient-price-${i}" value="${product.price}">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick='updateProduct(${i})'>Save changes</button>
              </div>
            </div>
          </div>
        </div>`;
    });
  } catch (e) {
    console.error('Error in adminContent:', e.message);
  }
}

adminContent();

let addBtn = document.querySelector('[admin-add]');
let addModal = document.querySelector('#addModal');
let addNameInput = document.querySelector('#addName');
let addSpecInput = document.querySelector('#addSpec');
let addPriceInput = document.querySelector('#addPrice');

addBtn.addEventListener('click', function () {
  addModal.show();
});

function addProduct() {
  try {
    let newName = addNameInput.value;
    let newSpec = addSpecInput.value;
    let newPrice = addPriceInput.value;

    if (!newName || !newSpec || !newPrice) {
      // Check if any field is empty
      alert('Please fill in all fields');
      return;
    }

    let newProduct = {
      name: newName,
      spec: newSpec,
      price: newPrice,
      image: 'path/to/default/image.jpg', // Set a default image path
    };

    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    adminContent();
    addModal.hide();
  } catch (e) {
    console.error('Error in addProduct:', e.message);
  }
}
