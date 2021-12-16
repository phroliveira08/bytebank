class Customer {
  constructor(name, cpf) {
    this._name = name;
    this._cpf = cpf;
    this._password;
  }

  get name() {
    return this._name;
  }

  get cpf() {
    return this._cpf;
  }
}

export default Customer;
