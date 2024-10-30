"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7;
const wakeUpTimeToReachBus = 7;
const wakeUpTimeToTakeTrain = 8;

if (wakeUpTimeToReachBus === wakeUpTime)
{
  printOut("Yippi! If I wake up at exactly 7 o'clock then I can catch the bus to school:D");
}
else if (wakeUpTimeToReachBus < wakeUpTime) { 
  printOut("I can not take the bus to school.");
}
else {
  printOut("I can take the bus, and i still have more time to spare.");
}
if (wakeUpTimeToTakeTrain === wakeUpTime); 
{
  printOut("if I wake up exactly at 8 o'clock, I can take the train to school! otherwise I have to take the car to school");
}
printOut(newLine);
printOut("I was unsure how to answer task 1,2 and 3. So i had to move on in the task :(");
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let integer = 0;

if (integer > 0) {
  printOut("it is Positive!");
} else if (integer < 0) {
  printOut("it is Negative!");
} else {
  printOut("it is Zero!");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sizeImage = Math.floor(Math.random() * 8) + 1;
printOut("Image size:" + sizeImage + "MP");

if (sizeImage >= 4) {
  printOut("Thank you!");
} else {
  printOut("The image is too small!");
}
printOut(newLine);
printOut("ChatGPT helped me understand the process in part 6, which helped me understanding how the process works");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (sizeImage >= 6) {
  printOut("The image is too large!");
} else if (sizeImage >= 4) {
  printOut("Thank you!")
} else {
  printOut("The image is too small!");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
 
  printOut(monthName);
  
  if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("I didnt know how to solve this. I tried different methods, so i had to move on to part 10 :(");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Status of gallery:");
printOut(monthName);
if (monthName === "March" || monthName === "April" || monthName === "May") {
    if (monthName === "April") {
        printOut("The gallery is temporarily open in the building next door.");
    } else if (monthName === "March" , "May") {
        printOut("The gallery is closed for refurbishment.");
    }
} else {
    printOut("The gallery is open.");
}

printOut(newLine);
