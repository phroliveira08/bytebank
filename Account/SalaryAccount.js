import Account from "./Account.js";
class SalaryAccount extends Account {
  constructor(owner) {
    super(owner);
    console.log("Conta salário criada com sucesso");
  }

  withdraw(value) {
    this._withdraw(value, 0.1);
  }
}

export default SalaryAccount;
