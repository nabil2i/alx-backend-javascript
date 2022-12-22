export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new TypeError('Size must be a number');
    }
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  getSize() {
    return this._size;
  }

  get Size() {
    return this.getSize();
  }

  set Size(val) {
    if (typeof val === 'number') {
      this._size = val;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  getLocation() {
    return this._location;
  }

  get Location() {
    return this.getLocation();
  }

  set Location(val) {
    if (typeof val === 'string') {
      this._location = val;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
