class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
    this._bonus = 1;
    this._password;
  }

  registerPassword(password) {
    this._password = password;
  }

  authenticate(password) {
    return password === this._password;
  }
}

export default Employee;
