function Vehicle(fuelCapacity, fuelEfficiency) {
  function getRange() {
    return fuelCapacity * fuelEfficiency;
  }

  return { getRange };
}

var standardVehicle = new Vehicle(10, 15);

console.log(standardVehicle.getRange());

function HybridVehicle(fuelCapacity, fuelEfficiency, electricRange) {
  const baseVehicle = new Vehicle(fuelCapacity, fuelEfficiency);

  function getRange() {
    return baseVehicle.getRange() + electricRange;
  }
  return { getRange };
}
