class BankAccount {
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const prithaccount = new BankAccount("prithvi", 1000);
console.log(prithaccount);