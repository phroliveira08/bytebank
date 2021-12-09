class Account {
  _balance;
  ownerName;

  constructor(ownerName) {
    this._balance = 0;
    this.ownerName = ownerName;
  }

  sacar(value) {
    if (value < 0) {
      console.log("Não é possível sacar valores negativos");
      return;
    }
    if (this._balance >= value) {
      this._balance -= value;
      console.log(
        `Saque efetuado com sucesso\nValor do saque: ${value}\nNovo saldo:$ ${this._balance}`
      );
    } else {
      console.log(`Saldo para saque indisponível`);
    }
  }

  depositar(value) {
    if (value < 0) {
      console.log("Não é possível depositar valores negativos");
      return;
    }
    this._balance += value;
    console.log(
      `Deposito efetuado com sucesso\nValor do deposito: ${value}\nNovo saldo:$ ${this._balance}`
    );
  }
}

export default Account;
