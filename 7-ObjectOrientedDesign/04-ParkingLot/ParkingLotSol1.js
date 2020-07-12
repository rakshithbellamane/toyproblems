class ParkingLot {
  levels = [];

  constructor (numLevels, motorcycleSpots, compactSpots, largeSpots) {
    for (let i=0; i<numLevels; i++) {
      this.levels.push(new Level(motorcycleSpots, compactSpots, largeSpots));
    }
  }

  isParkingLotFull () {
    for (let i=0; i<this.levels.length; i++) {
      if (!this.levels[i].isLevelFull()) return false;
    }
  }

  isParkingAvailableInLot (vehicle) {
    let numSpots = vehicle.spotsRequired;

    for (let i=0; i<this.levels.length; i++) {
      let availableSpot = this.levels[i].isParkingAvailableInLevel(numSpots);
      if (availableSpot !== null) return availableSpot;
    }

    return null;
  }

  parkVehicle (vehicle, level, spotIndex) {
    vehicle.parkVehicle(this, level, spotIndex, vehicle.spotsRequired);
  }
}

class Level {
  spots = [];

  constructor (motorcycleSpots, compactSpots, largeSpots) {
    for (let i=0; i<motorcycleSpots; i++) {
      this.spots.push(new Spot(Spot.spotTypes.MOTORCYCLE));
    }

    for (let i=0; i<compactSpots; i++) {
      this.spots.push(new Spot(Spot.spotTypes.COMPACT));
    }

    for (let i=0; i<largeSpots; i++) {
      this.spots.push(new Spot(Spot.spotTypes.LARGE));
    }
  }

  isLevelFull () {
    for (let i=0; i<this.spots.length; i++) {
      if (this.spots[i].available) return false;
    }
  }

  isParkingAvailableInLevel (numSpots) {
    let i=0;
    while (i <this.spots.length) {
      if (this.spots[i].available) {
        let j=1;
        while (j < numSpots & this.spots[i+j].available) {
          j++;
        }
        if (j === numSpots) return i;
        i += j + 1;
      }
    }

    return null;
  }
}

class Spot {
  static spotTypes = {
    MOTORCYCLE: 'motorcycle',
    COMPACT: 'compact',
    LARGE: 'large',
  }

  type;
  available;
  vehicleParked;

  constructor (spotType) {
    this.type = spotType;
    this.available = true;
    this.vehicleId = null;
  }
}

class Vehicle {
  static vehicleTypes = {
    MOTORCYCLE: 'motorcycle',
    CAR: 'car',
    BUS: 'bus',
  }

  id;
  type = null;
  level = null;
  spots = [];

  constructor (vin, vehicleType) {
    this.id = vin;
    this.type = vehicleType;
  }

  getParkedSpot () {
    return {level, spots: this.spots};
  }

  parkVehicle (parkingLot, parkingLevel, spotIndex, numSpots) {
    this.level = parkingLevel;

    for (let i=spotIndex; i<numSpots; i++) {
      let spot = parkingLot[level][i];
      spot.available = false;
      spot.vehicleId = this.id;
    }
  }

  exitParkingLot () {
    for (let i=0; i<this.spots.length; i++) {
      this.spots[i].available = true;
    }
  }
}

class Motorcycle extends vehicle {
  spotsRequired = 1;

  constructor (vin) {
    super(vin, Vehicle.vehicleTypes.MOTORCYCLE);
  }
}

class Car extends vehicle {
  spotsRequired = 1;

  constructor (vin) {
    super(vin, Vehicle.vehicleTypes.CAR);
  }
}

class Motorcycle extends vehicle {
  spotsRequired = 5;

  constructor (vin) {
    super(vin, Vehicle.vehicleTypes.BUS);
  }
}