function findCarInLot(car) {
  for (var i = 0; i < lot.length; i++) {
    if (car == lot[i]) {
      return i;
    }
  }
  return -1;
}

var taxi = {
  make: "Webville",
  model: "Taxi"
};

var chevy = {
  make: 'Chevy',
  model: 'Bel Air'
};

var fiat = {
  make: 'Fiat',
  model: '500'
};

var lot = [chevy, taxi];


var loc1 = findCarInLot(chevy);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(fiat);
loc1;
loc2;
loc3;
