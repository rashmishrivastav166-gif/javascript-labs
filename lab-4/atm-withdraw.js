let correctPIN = 1234;
let enteredPIN = 1234;
let balance = 5000;

if (enteredPIN === correctPIN) {

    console.log("Access Granted");

    let choice = 2;

    switch (choice) {

        case 1:
            console.log("Balance:", balance);
            break;

        case 2:
            let amount = 7000;

            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance = balance - amount;
                console.log("New Balance:", balance);
            }

            break;

        case 3:
            let deposit = 2000;
            balance = balance + deposit;
            console.log("New Balance:", balance);
            break;

        default:
            console.log("Invalid choice");
    }

} else {

    console.log("Wrong PIN. Access Denied.");

}