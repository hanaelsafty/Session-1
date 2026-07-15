let studentName = "Hana";
let attendance = 80;
let midterm = 20;
let finalExam = 50;
let assignment = 20;
let tuition = "Paid";

let total = midterm + finalExam + assignment;
let grade = "";

if (tuition == "Unpaid") {
    console.log("You cannot view your result.");
} else if (attendance < 75) {
    console.log("Student Name: " + studentName);
    console.log("Status: Fail");
} else {
    if (total >= 90) {
        grade = "A";
    } else if (total >= 80) {
        grade = "B";
    } else if (total >= 70) {
        grade = "C";
    } else if (total >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log("Student Name: " + studentName);
    console.log("Total Score: " + total);
    console.log("Grade: " + grade);

    if (grade == "F") {
        console.log("Status: Fail");
    } else {
        console.log("Status: Pass");
    }
}