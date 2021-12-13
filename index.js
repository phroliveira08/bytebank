import Customer from "./Customer.js";
import Account from "./Account.js";
import SalaryAccount from "./SalaryAccount.js";
import SavingAccount from "./SavingAccount.js";

const customer1 = new Customer("Pedro", "123456789");
const account1 = new SalaryAccount(customer1);

const customer2 = new Customer("Cis", "125412549");
const account2 = new SavingAccount(customer2);

account1.deposit(500);
account1.withdraw(50);
account1.transfer(100, account2);
account1.owner;
account1.balance;

console.log(Account.numAccounts);
