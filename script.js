const currentYear = new Date().getFullYear();
const input = prompt("Enter your birth year:");
const birthYear = Number(input);

if (!input || Number.isNaN(birthYear) || !Number.isFinite(birthYear)) {
  console.log("Invalid input: please enter a numeric year.");
} else if (birthYear > currentYear) {
  console.log("Invalid birth year");
} else {
  const age = currentYear - birthYear;
  console.log("Your age is " + age);
  if (age < 18) {
    console.log("You are a minor.");
  } else {
    console.log("You are an adult.");
  }
}
