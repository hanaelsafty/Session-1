let pin="1234"
let enteredpin="1234"
let balance="1000"
let operation="withdraw"
let amount="500"

if (enteredPin == pin) {

    if (operation == "withdraw") {
        if (amount <= balance) {
            balance = balance - amount;
            console.log("Withdrawal successful");
            console.log(balance);
        } else {
            console.log("Not enough balance");
        }

    } else if (operation == "deposit") {
        if (amount > 0) {
            balance = balance + amount;
            console.log("Deposit successful");
            console.log(balance);
        } else {
            console.log("Invalid amount");
        }

    } else if (operation == "checkBalance") {
        console.log(balance);

    } else if (operation == "changePin") {
        let newPin = 5678;
        if (newPin >= 1000 && newPin <= 9999) {
            pin = newPin;
            console.log("PIN changed successfully");
        } else {
            console.log("PIN must be 4 digits");
        }

    } else {
        console.log("Invalid operation");
    }

} else {
    console.log("Wrong PIN");
}