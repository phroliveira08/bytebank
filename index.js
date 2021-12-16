import Customer from "./Customer/Customer.js";
import SalaryAccount from "./Account/SalaryAccount.js";
import SavingAccount from "./Account/SavingAccount.js";
import Director from "./Employee/Director.js";
import Authetication from "./Authentication/Authentication.js";

const customer1 = new Customer("Pedro", "123456789");
const account1 = new SalaryAccount(customer1);

const customer2 = new Customer("Cis", "125412549");
const account2 = new SavingAccount(customer2);

const director = new Director("Pedro", 10000);
director.registerPassword("1234");

Authetication.login(director, "1234");
Authetication.login(customer2, "12345");
