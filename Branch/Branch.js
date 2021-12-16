import Account from "./account";

class Branch {
  static branchNums = 0;
  _id;
  _region;

  constructor(region) {
    Branch.branchNums++;
    this._id = Branch.branchNums;
    this._region = region;
  }

  get id() {
    return this._id;
  }

  get region() {
    return this._region;
  }

  openAccount(owner) {
    const newAccount = new Account(owner);
    return newAccount;
  }
}

export default Branch;
