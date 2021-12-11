class Customer {
  _name;
  _cpf;

  constructor(name, cpf) {
    this._name = name;
    this._cpf = cpf;
  }

  get name() {
    return this._name;
  }

  get cpf() {
    return this._cpf;
  }
}

export default Customer;
