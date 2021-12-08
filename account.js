class Account {
  balance;
  ownerName;

  constructor(ownerName) {
    this.balance = 0;
    this.ownerName = ownerName;
  }

  sacar(value) {
    if (value < 0) {
      console.log("Não é possível sacar valores negativos");
    }
    if (this.balance >= value) {
      this.balance -= value;
      console.log(
        `Saque efetuado com sucesso\nValor do saque: ${value}\nNovo saldo:$ ${this.balance}`
      );
    } else {
      console.log(`Saldo para saque indisponível`);
    }
  }

  depositar(value) {
    if (value < 0) {
      console.log("Não é possível depositar valores negativos");
    }
    this.balance += value;
    console.log(
      `Deposito efetuado com sucesso\nValor do deposito: ${value}\nNovo saldo:$ ${this.balance}`
    );
  }
}

module.exports = Account;
