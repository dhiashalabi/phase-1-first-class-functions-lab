// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (drivers, selectingFunction) {
  return selectingFunction(drivers);
};


const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));
console.log(selectingDrivers0);
console.log(selectingDrivers1);
const fareMultiplier = createFareMultiplier(4);
console.log(fareMultiplier(12));
console.log(fareDoubler(25));
console.log(fareTripler(59));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
