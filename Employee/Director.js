import Employee from "./Employee.js";

class Director extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this._bonus = 1.5;
  }
}

export default Director;
