// What's My Age Again?
// Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

// Assume all birthdays are valid dates before November 27th, 2025.
// Return the age as an integer.
// Be sure to account for whether the person has already had their birthday in 2025.

function calculateAge(birthday) {
  console.log(birthday);
  const birthdayDate = new Date(birthday);
  console.log(2025 - birthdayDate.getFullYear());
  return birthday;
}

// getFullYear() returns the full year of a date.

// Get the year of a specific date:

// const d = new Date("July 21, 1983 01:15:00");
// let year = d.getFullYear();
