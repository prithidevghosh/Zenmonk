function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

let account_array = [];

let forminput = document.querySelector("#forminput")
let customer_name = document.querySelector("#customer_name")
let customer_balance = document.querySelector("#customer_balance");
let depositform = document.querySelector("#depositform")
let customeraccount = document.querySelector("#customer_account");
let depositmoney = document.querySelector("#deposit_money");
let withdrawform = document.querySelector("#withdrawform")

forminput.addEventListener("submit", (e) => {
    e.preventDefault();
    const newaccount = new BankAccount(customer_name.value, +customer_balance.value);
    account_array.push(newaccount);
    console.log(account_array);
})

depositform.addEventListener("click", (e) => {
    e.preventDefault();

    const account = account_array.find((account) => {

        return account.accountNumber === +customeraccount.value;
    })

    account.deposit(+depositmoney.value);
    console.log(account_array);
})

withdrawform.addEventListener("click", (e) => {
    e.preventDefault();
    const account = account_array.find((account) => {
        return account.accountNumber === +customeraccount.value;
    })
    account.withdraw(+depositmoney.value);
    console.log(account_array);
})