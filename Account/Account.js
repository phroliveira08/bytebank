import Customer from "../Customer/Customer.js";

class Account {
  static numAccounts = 0;
  _balance;
  _owner;

  constructor(owner) {
    this._balance = 0;
    this.owner = owner;
    Account.numAccounts++;

    if (this.constructor === Account) {
      throw new Error(
        "A classe Account não é instanciada diretamente, pois é uma classe abstrata"
      );
    }
  }

  set owner(owner) {
    if (owner instanceof Customer) {
      this._owner = owner;
    }
  }

  get owner() {
    console.log("Dono da conta", this._owner);
    return this._owner;
  }

  get balance() {
    console.log("Saldo atual é", this._balance);
    return this._balance;
  }

  withdraw() {
    throw new Error("Este método é abstrato.");
  }

  _withdraw(value, tax) {
    if (value < 0) {
      console.log("Não é possível sacar valores negativos");
      return;
    }

    const totalValue = value + value * tax;

    if (this._balance >= totalValue) {
      this._balance -= totalValue;
      console.log(
        `Saque efetuado com sucesso\nValor do saque: ${value}\nTaxa de saque: ${
          tax * 100
        }%\nNovo saldo:$ ${this._balance}`
      );
    } else {
      console.log(`Saldo para saque indisponível`);
    }
  }

  deposit(value) {
    if (value < 0) {
      console.log("Não é possível depositar valores negativos");
      return;
    }
    this._balance += value;
    console.log(
      `Deposito efetuado com sucesso\nValor do deposito: ${value}\nNovo saldo:$ ${this._balance}`
    );
  }

  transfer(value, account) {
    if (this._balance < value) {
      console.log(`Saldo indisponível para transferência`);
      return;
    } else if (value <= 0) {
      console.log(`Não é possível transferir esse valor`);
      return;
    }
    account.deposit(value);
    this.withdraw(value);
    console.log(`Transferência efetuada com sucesso`);
  }
}

export default Account;
