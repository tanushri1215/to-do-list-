let birthYear = Number(prompt("Enter your birth year"));

let currentYear = 2026;

let age = currentYear - birthYear;

if (birthYear > currentYear) {
    console.log("Invalid birth year");
}

else if (age < 18) {
    console.log("Your age is " + age);
    console.log("You are a minor");
}

else {
    console.log("Your age is " + age);
    console.log("You are an adult");
}