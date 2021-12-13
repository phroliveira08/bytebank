import Account from "./Account.js";
class SalaryAccount extends Account {
  constructor(owner) {
    super(owner);
    console.log("Conta salário criada com sucesso");
  }
}

export default SalaryAccount;
