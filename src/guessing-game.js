class GuessingGame {
  min = 0;
  max = 0;
  result = 0;
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }
  guess() {
    this.result = Math.ceil((this.max + this.min) / 2);
    return this.result;
  }

  lower() {
    this.max = this.result;
  }
  greater() {
    this.min = this.result;
  }
}

module.exports = GuessingGame;
