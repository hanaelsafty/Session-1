let customerName = "Hana";
let productCategory = "Electronics";
let productPrice = 1000;
let quantity = 2;
let couponCode = "SAVE10";
let paymentMethod = "Visa";

let subtotal = productPrice * quantity;

if (productCategory == "Electronics") {
    subtotal = subtotal - 100;
}

if (couponCode == "SAVE10") {
    subtotal = subtotal - 50;
}

if (paymentMethod == "Visa") {
    subtotal = subtotal - 25;
}

let vat = subtotal * 0.14;
let total = subtotal + vat;

console.log("Customer Name: " + customerName);
console.log("Category: " + productCategory);
console.log("Price: " + productPrice);
console.log("Quantity: " + quantity);
console.log("Subtotal: " + subtotal);
console.log("VAT: " + vat);
console.log("Total: " + total);