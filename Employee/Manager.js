import Employee from "./Employee.js";

class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this._bonus = 1.25;
  }
}

export default Manager;
