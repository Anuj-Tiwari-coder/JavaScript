// 01 wirte a program to print teh marks of a student in an object using loop
const student = () => {
    const marks = {
        math: 90,
        english: 85,
        science: 95,
        history: 80
    };

    for (let subject in marks) {
        console.log(`${subject}: ${marks[subject]}`);
    }
}
student();


// 02 Write a program in 01 using For Loops
const studentMarks = () => {
    const marks = {
        math: 90,
        english: 85,
        science: 95,
        history: 80
    };

    for (let i = 0; i < Object.keys(marks).length; i++) {
        console.log(`${Object.keys(marks)[i]}: ${Object.values(marks)[i]}`);
    }
}
studentMarks();

// 03 Write a program to print "Try again" untill user enter the correct number
const checkNumber = () => {
    const correctNumber = 5;
    let userInput;

    do {
        userInput = parseInt(prompt("Enter a number: "));
        if (userInput !== correctNumber) {
            console.log("Try again");
        }
    } while (userInput !== correctNumber);

    console.log("Correct number entered!");
}
checkNumber();


//  04 Write a program to find mean of 5 numbers.
const findMean = () => {
    const numbers = [10, 20, 30, 40, 50];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const mean = sum / numbers.length;
    console.log("Mean of the numbers is: " + mean);
}
findMean();