import Account from "./Account.js";
class SavingAccount extends Account {
  constructor(owner) {
    super(owner);
    console.log("Conta poupança criada com sucesso");
  }

  withdraw(value) {
    this._withdraw(value, 0.15);
  }
}

export default SavingAccount;
