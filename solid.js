const ErrorLog = (function () {
  function log(message) {
    console.log(message);
  }

  return { log };
})();

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    if (this.make) {
      ErrorLog.log(`The car ${this.make} ${this.model} started.`);
      return true;
    }

    ErrorLog.log(`The car ${this.make} ${this.model} failed to start.`);
    return false;
  }
}
