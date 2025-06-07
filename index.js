// 1. Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array containing the above two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function that returns a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Doubles a fare
const fareDoubler = createFareMultiplier(2);

// 6. Triples a fare
const fareTripler = createFareMultiplier(3);

// 7. Function that takes a drivers array and a function, and applies the function
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};

// ✅ Example usage (optional/testable output)
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectingDrivers[0](drivers)); // ['Antonia', 'Nuru']
console.log(selectingDrivers[1](drivers)); // ['Amari', 'Mo']

console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // ['Amari', 'Mo']


