const Customer = require("./customer");
const Account = require("./account");

const customer1 = new Customer("Pedro", "123456789");
const account1 = new Account("Pedro");

account1.depositar(500);
account1.sacar(50);
