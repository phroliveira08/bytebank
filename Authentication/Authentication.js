class Authetication {
  static login(employee, password) {
    if (!Authetication.isAuthenticable(employee)) {
      console.log("Não é possível efetuar login com essa classe");
      return false;
    }
    if (!employee.authenticate(password)) {
      console.log("Senha invalida");
      return false;
    }
    console.log("Login efetuado com sucesso");
    return true;
  }

  static isAuthenticable(object) {
    return "authenticate" in object && object.authenticate instanceof Function;
  }
}

export default Authetication;
