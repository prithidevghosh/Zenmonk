class BankAccount {
    customerName;
    accountNumber;
    #balance;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }
}

class SavingsAccount extends BankAccount {
    transactionlimit = 10000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log("taking personal loan of ", amount);
    }
}

const prithaccount = new SavingsAccount("prithvi", 1000);
console.log(prithaccount);
console.log(prithaccount);