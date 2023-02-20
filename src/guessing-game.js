class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minR = min;
    this.maxR = max;
  }

  guess() {
    return Math.round((this.maxR + this.minR) / 2);
  }

  lower() {
    this.maxR = Math.round((this.maxR + this.minR) / 2);
  }

  greater() {
    this.minR = Math.round((this.maxR + this.minR) / 2);
  }
}

module.exports = GuessingGame;
