// 1. Create an array that stores marks of 5 students
let marks = [90, 75, 60, 32, 54];

// 2. Create a function
function analyzeMarks() {

    let total = 0;
    let pass = 0;
    let fail = 0;

    let highest = marks[0];
    let lowest = marks[0];

    // 3. Use a for loop
    for (let i = 0; i < marks.length; i++) {

        // 4. Calculate total marks
        total = total + marks[i];

        // 6. Check pass / fail
        if (marks[i] >= 35) {
            pass++;
        } else {
            fail++;
        }

        // 7. Find highest marks
        if (marks[i] > highest) {
            highest = marks[i];
        }

        // Find lowest marks
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    // 5. Calculate average marks
    let average = total / marks.length;

    // Display output
    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average);
    console.log("Pass Students: " + pass);
    console.log("Fail Students: " + fail);
    console.log("Highest Marks: " + highest);
    console.log("Lowest Marks: " + lowest);
}

// Call the function
analyzeMarks();