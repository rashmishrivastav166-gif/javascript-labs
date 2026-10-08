let subject1 = 85;
let subject2 = 78;
let subject3 = 82;

let total = subject1 + subject2 + subject3;
let average = total / 3;

let grade = average >= 90
    ? "A"
    : average >= 75
    ? "B"
    : average >= 40
    ? "C"
    : "F";

console.log("Average data type:", typeof average);

console.log(
    "Total: " + total +
    ", Average: " + average.toFixed(2) +
    ", Grade: " + grade
);

let attendance = 80;

let isEligibleForScholarship =
    average >= 85 && attendance >= 75;

console.log(
    "Scholarship Eligible: " + isEligibleForScholarship
);