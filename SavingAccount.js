import Account from "./Account.js";
class SavingAccount extends Account {
  constructor(owner) {
    super(owner);
    console.log("Conta poupança criada com sucesso");
  }
}

export default SavingAccount;
