import Customer from "./Customer.js";
import Account from "./Account.js";

const customer1 = new Customer("Pedro", "123456789");
const account1 = new Account("Pedro");

account1.depositar(500);
account1.sacar(50);
