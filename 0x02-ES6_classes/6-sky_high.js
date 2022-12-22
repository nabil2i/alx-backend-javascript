import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('floors must be a number');
    }
  }

  getFloors() {
    return this._floors;
  }

  get floors() {
    return this.getFloors();
  }

  set floors(val) {
    if (typeof val === 'number') {
      this._floors = val;
    } else {
      throw new TypeError('floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
