// const timmy = {
//     prescription: "acetaminophen",
//     pricePerRefill: 25,
//     refills: 3,
//     subscription: false,
//     coupon: true,
// };





// const sarah = {
//     prescription: "diphenhydramine",
//     pricePerRefill: 50,
//     refills: 1,
//     subscription: true,
//     coupon: false,
// }

// const rocky = {
//     prescription: "phenylephrine",
//     pricePerRefill: 30,
//     refills: 5,
//     subscription: true,
//     coupon: true,
// }





// Function to calculate the grand total
function calculateGrandTotal(refillTotal, hasSubscription, hasCoupon) {
    let finalAmount = refillTotal;
  
    if (hasSubscription) {
      finalAmount -= refillTotal * 0.25; // 25% discount for subscribers
    }
  
    if (hasCoupon) {
      finalAmount -= 10; // $10 discount for coupon holders
    }
  
    return `Your grand total is $${finalAmount}.`;
  }
  
  // Calculate grand total for each customer
  const customers = [
    { name: "Timmy", refillTotal: 75, hasSubscription: false, hasCoupon: true },
    { name: "Sarah", refillTotal: 50, hasSubscription: true, hasCoupon: false },
    { name: "Rocky", refillTotal: 150, hasSubscription: true, hasCoupon: true }
  ];
  
  customers.forEach(customer => {
    const grandTotal = calculateGrandTotal(
      customer.refillTotal,
      customer.hasSubscription,
      customer.hasCoupon
    );
  
    console.log(`${customer.name} => ${grandTotal}`);
  });