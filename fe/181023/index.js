class NumberArray {
  constructor(array) {
    this.array = array;
  }

  getLastElem() {
    return array[this.array.length - 1];
  }

  getAbs() {
    return Math.abs(this.array[0] - this.array[this.array.length - 1]);
  }

  getSum() {
    return this.array.reduce((accum, currentVal) => accum + currentVal, 0);
  }

  setArray(n) {
    this.array = this.array.map((item) => item * n);
  }

  createObject() {
    return this.array.reduce((object, currentValue, index) => {
      const key = `item${index + 1}`;
      object[key] = currentValue;
      return object;
    }, {});
  }
}
