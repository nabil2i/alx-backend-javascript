export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get code() {
    return this.getName();
  }

  getCode() {
    return this._code;
  }

  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this.getName();
  }

  getName() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
