export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  getCode() {
    return this._code;
  }

  get code() {
    return this.getCode();
  }

  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  getName() {
    return this._name;
  }

  get name() {
    return this.getName();
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
