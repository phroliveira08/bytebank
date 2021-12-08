class Customer {
  name;
  cpf;
  accountId;
  balance;

  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }
}

module.exports = Customer;
