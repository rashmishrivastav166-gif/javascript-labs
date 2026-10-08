console.log("===== PART 0 - QUICK RECAP =====");

console.log(typeof (10 + "5"));

console.log(5 === "5");

let x = 10;
x += 5;
console.log(x);

console.log(true && false || true);

console.log(10 % 3);




// Task 1.1
console.log("\n===== TASK 1.1 =====");

let val = 4 + 3 * 2 ** 2 - 6 / 3;

console.log("Value:", val);


// Task 1.2
console.log("\n===== TASK 1.2 =====");

console.log(1 < 2 < 3);

console.log(3 > 2 > 1);


// Task 1.3
console.log("\n===== TASK 1.3 =====");

let operatorResult = (10 + 5) * 2 > 20 && 30 % 3 === 0;

console.log("Result:", operatorResult);




// Task 2.1 - Movie Ticket Pricing
console.log("\n===== TASK 2.1 =====");

let age = 25;

let ticketPrice =
    age < 5 ? "Free" :
    age < 12 ? "₹100" :
    age < 60 ? "₹250" :
    "₹150";

console.log("Age:", age);
console.log("Ticket Price:", ticketPrice);


let age1 = 3;

let price1 =
    age1 < 5 ? "Free" :
    age1 < 12 ? "₹100" :
    age1 < 60 ? "₹250" :
    "₹150";

console.log("Age 3:", price1);


let age2 = 8;

let price2 =
    age2 < 5 ? "Free" :
    age2 < 12 ? "₹100" :
    age2 < 60 ? "₹250" :
    "₹150";

console.log("Age 8:", price2);


let age3 = 25;

let price3 =
    age3 < 5 ? "Free" :
    age3 < 12 ? "₹100" :
    age3 < 60 ? "₹250" :
    "₹150";

console.log("Age 25:", price3);


let age4 = 60;

let price4 =
    age4 < 5 ? "Free" :
    age4 < 12 ? "₹100" :
    age4 < 60 ? "₹250" :
    "₹150";

console.log("Age 60:", price4);


let age5 = 70;

let price5 =
    age5 < 5 ? "Free" :
    age5 < 12 ? "₹100" :
    age5 < 60 ? "₹250" :
    "₹150";

console.log("Age 70:", price5);


// Task 2.2 - Shipping Cost
console.log("\n===== TASK 2.2 =====");

let cartTotal1 = 2500;

let shipping1 =
    cartTotal1 >= 2000 ? "Free Shipping" :
    cartTotal1 >= 1000 ? "₹50" :
    "₹100";

console.log("Cart Total:", cartTotal1);
console.log("Shipping:", shipping1);


// Test 2
let cartTotal2 = 1500;

let shipping2 =
    cartTotal2 >= 2000 ? "Free Shipping" :
    cartTotal2 >= 1000 ? "₹50" :
    "₹100";

console.log("Cart Total:", cartTotal2);
console.log("Shipping:", shipping2);


// Test 3
let cartTotal3 = 700;

let shipping3 =
    cartTotal3 >= 2000 ? "Free Shipping" :
    cartTotal3 >= 1000 ? "₹50" :
    "₹100";

console.log("Cart Total:", cartTotal3);
console.log("Shipping:", shipping3);


// Task 2.3 - Ternary + Logical Operator
console.log("\n===== TASK 2.3 =====");

let isMember = true;
let totalSpent = 6000;

let discountType =
    isMember && totalSpent >= 5000
        ? "VIP Discount"
        : totalSpent >= 5000
        ? "Regular Discount"
        : "No Discount";

console.log("Discount:", discountType);


// ======================================================
// PART 3 - MANUAL AGGREGATION
// ======================================================

// Task 3.1 - Array
console.log("\n===== TASK 3.1 =====");

const scores = [80, 70, 65, 90, 75];

const scoreTotal =
    scores[0] +
    scores[1] +
    scores[2] +
    scores[3] +
    scores[4];

const average = scoreTotal / scores.length;

const passFail = average >= 40 ? "Pass" : "Fail";

console.log("Scores:", scores);
console.log("Total:", scoreTotal);
console.log("Average:", average);
console.log("Result:", passFail);


// Task 3.2 - Objects
console.log("\n===== TASK 3.2 =====");

const item1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const item2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const item3 = {
    name: "Bag",
    price: 800,
    qty: 1
};

const item4 = {
    name: "Bottle",
    price: 200,
    qty: 2
};

const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;
const subtotal4 = item4.price * item4.qty;

const grandTotalItems =
    subtotal1 +
    subtotal2 +
    subtotal3 +
    subtotal4;

console.log(item1.name + ":", subtotal1);
console.log(item2.name + ":", subtotal2);
console.log(item3.name + ":", subtotal3);
console.log(item4.name + ":", subtotal4);

console.log("Grand Total:", grandTotalItems);


// ======================================================
// PART 4 - TRICKY TYPE COERCION
// ======================================================

console.log("\n===== PART 4 - TYPE COERCION =====");

console.log('"5" + 3 =', "5" + 3);

console.log('"5" - 3 =', "5" - 3);

console.log('"abc" * 2 =', "abc" * 2);

console.log("NaN === NaN =", NaN === NaN);

console.log("[] == false =", [] == false);

console.log('"10" == 10 =', "10" == 10);

console.log("null + 1 =", null + 1);


// Task 4.2
console.log("\n===== TASK 4.2 =====");

console.log("typeof NaN =", typeof NaN);


// ======================================================
// PART 5 - SMART SHOPPING CART & BILLING SYSTEM
// ======================================================

console.log("\n========================================");
console.log("SMART SHOPPING CART & BILLING SYSTEM");
console.log("========================================");


// Three products

const product1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const product2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const product3 = {
    name: "Bag",
    price: 800,
    qty: 1
};


// Type checking

console.log("Product 1 price type:", typeof product1.price);
console.log("Product 2 price type:", typeof product2.price);
console.log("Product 3 price type:", typeof product3.price);


// Individual subtotals

const productSubtotal1 = product1.price * product1.qty;
const productSubtotal2 = product2.price * product2.qty;
const productSubtotal3 = product3.price * product3.qty;


// Grand total

const grandTotal =
    productSubtotal1 +
    productSubtotal2 +
    productSubtotal3;


// Tiered discount

const discountPercentage =
    grandTotal >= 5000 ? 20 :
    grandTotal >= 2000 ? 10 :
    grandTotal >= 1000 ? 5 :
    0;


// Discount amount

const discountAmount =
    grandTotal * discountPercentage / 100;


// Amount after discount

const amountAfterDiscount =
    grandTotal - discountAmount;


// GST 18%

const gst =
    amountAfterDiscount * 18 / 100;


// Final payable

const finalPayable =
    amountAfterDiscount + gst;


// Free shipping

const distinctItems = 3;

const freeShipping =
    amountAfterDiscount >= 1500 ||
    distinctItems >= 3;


// Shipping status

const shippingStatus =
    freeShipping
        ? "FREE"
        : "₹100 shipping charge";


// Bonus - Loyalty Points

const loyaltyPoints =
    finalPayable / 100;


// Receipt

console.log("----------------------------------------");

console.log(
    product1.name +
    " - ₹" +
    product1.price +
    " × " +
    product1.qty +
    " = ₹" +
    productSubtotal1.toFixed(2)
);

console.log(
    product2.name +
    " - ₹" +
    product2.price +
    " × " +
    product2.qty +
    " = ₹" +
    productSubtotal2.toFixed(2)
);

console.log(
    product3.name +
    " - ₹" +
    product3.price +
    " × " +
    product3.qty +
    " = ₹" +
    productSubtotal3.toFixed(2)
);

console.log("----------------------------------------");

console.log(
    "Grand Total: ₹" +
    grandTotal.toFixed(2)
);

console.log(
    "Discount: " +
    discountPercentage +
    "% = ₹" +
    discountAmount.toFixed(2)
);

console.log(
    "Amount After Discount: ₹" +
    amountAfterDiscount.toFixed(2)
);

console.log(
    "GST (18%): ₹" +
    gst.toFixed(2)
);

console.log(
    "Final Payable: ₹" +
    finalPayable.toFixed(2)
);

console.log(
    "Shipping: " +
    shippingStatus
);

console.log(
    "Loyalty Points: " +
    loyaltyPoints.toFixed(2)
);

console.log("========================================");


// ======================================================
// PART 6 - DEBUGGING CHALLENGE
// ======================================================

console.log("\n===== PART 6 - DEBUGGING =====");


// Snippet 1 - Corrected

let debugPrice = 500;

let debugDiscount = debugPrice * 0.1;

debugDiscount = debugDiscount + 5;

console.log("Snippet 1 Final:", debugDiscount);


// Snippet 2 - Corrected

let marks = 85;

let result =
    marks === 85
        ? "Pass"
        : "Fail";

console.log("Snippet 2 Result:", result);


// Snippet 3 - Corrected

let debugCartTotal = 1200;

debugCartTotal = debugCartTotal - 100;

let debugShipping =
    debugCartTotal >= 1500
        ? "Free"
        : "Paid";

console.log("Snippet 3 Shipping:", debugShipping);


// ======================================================
// END
// ======================================================

console.log("\n===== END OF JAVASCRIPT LAB 3 =====");