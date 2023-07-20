var marketTable = document.getElementById("market-table");
var form = document.getElementById("form");
var productNameInput = document.getElementById("product-name");
var priceInput = document.getElementById("price");
var quantityInput = document.getElementById("quantity");
var categoryInput = document.getElementById("category");
var totalHealthElement = document.getElementById("total-health");
var totalEducationElement = document.getElementById("total-education");
var totalFoodElement = document.getElementById("total-food");
var totalOverallElement = document.getElementById("total-overall");
var savedData = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var productName = productNameInput.value;
  var price = parseFloat(priceInput.value);
  var quantity = parseFloat(quantityInput.value);
  var category = categoryInput.value;
  var total = price * quantity;

  var newRow = document.createElement("tr");

  var productNameCell = document.createElement("td");
  productNameCell.textContent = productName;
  newRow.appendChild(productNameCell);

  var priceCell = document.createElement("td");
  priceCell.textContent = price.toFixed(2);
  newRow.appendChild(priceCell);

  var quantityCell = document.createElement("td");
  quantityCell.textContent = quantity.toFixed(2);
  newRow.appendChild(quantityCell);

  var categoryCell = document.createElement("td");
  categoryCell.textContent = category;
  newRow.appendChild(categoryCell);

  var totalCell = document.createElement("td");
  totalCell.textContent = total.toFixed(2);
  newRow.appendChild(totalCell);

  marketTable.querySelector("tbody").appendChild(newRow);

  updateSummary(category, total);
  clearInputs();

  // Veriyi kaydetmek için obje oluştur ve diziye ekle
  var data = {
    productName: productName,
    price: price,
    quantity: quantity,
    category: category,
    total: total
  };
  savedData.push(data);
  console.log(savedData); // Kaydedilen verileri konsola yazdır
});

function updateSummary(category, amount) {
  var categoryTotalElement = document.getElementById("total-" + category);
  var currentCategoryTotal = parseFloat(categoryTotalElement.textContent);
  var newCategoryTotal = currentCategoryTotal + amount;
  categoryTotalElement.textContent = newCategoryTotal.toFixed(2);

  var overallTotal = parseFloat(totalOverallElement.textContent) + amount;
  totalOverallElement.textContent = overallTotal.toFixed(2);
}

function clearInputs() {
  productNameInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";
  categoryInput.value = "";
}

function clearTable() {
  marketTable.querySelector("tbody").innerHTML = "";
  totalHealthElement.textContent = "0";
  totalEducationElement.textContent = "0";
  totalFoodElement.textContent = "0";
  totalOverallElement.textContent = "0";
  savedData = []; // Kaydedilen verileri sıfırla
}
