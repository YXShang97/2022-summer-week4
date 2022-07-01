// Design a bank account class
// balance, deposit, withdraw, getBalance

class BankAccount {
  constructor(balance) {
    this.balance = balance;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push(
      `Deposit of $${amount}, remaining balance: $${this.balance}`
    );
  }

  withdraw(amount) {
    this.balance -= amount;
    this.history.push(
      `Withdraw of $${amount}, remaining balance: $${this.balance}`
    );
  }

  getBalance() {
    return this.balance;
  }

  getHistory() {
    return this.history;
  }
}

const account = new BankAccount(100);

account.deposit(50);
account.withdraw(10);
console.log(account.getBalance());
console.log(account.getHistory());

// function BankAccount(balance) {
//   this.balance = balance;
//   this.history = [];
//   this.deposit = (amount) => {
//     this.balance += amount;
//     this.history.push(
//       `Deposit of $${amount}, remaining balance: $${this.balance}`
//     );
//   };
//   this.withdraw = (amount) => {
//     this.balance -= amount;
//     this.history.push(
//       `Withdraw of $${amount}, remaining balance: $${this.balance}`
//     );
//   };
//   this.getBalance = function () {
//     return this.balance;
//   };

//   this.getHistory = function () {
//     return this.history;
//   };
// }
// const mine = new BankAccount(100);
// mine.deposit(50);
// mine.withdraw(10);
// console.log(mine.getHistory());
