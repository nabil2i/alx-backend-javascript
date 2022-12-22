import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a currency');
    }
  }

  getAmount() {
    return this._amount;
  }

  get amount() {
    return this.getAmount();
  }

  set amount(val) {
    if (typeof val === 'number') {
      this._amount = val;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  getCurrency() {
    return this._currency;
  }

  get currency() {
    return this.getCurrency();
  }

  set currency(val) {
    if (val instanceof Currency) {
      this._currency = val;
    } else {
      throw new TypeError('Currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
