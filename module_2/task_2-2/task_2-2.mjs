"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1_answerNoMod = 2 + 3 * 2 - 4 * 6;
const part1_answerMod = 2 + 3 * (2 - 4) * 6;
printOut("Answer_Mod = " + part1_answerMod.toString());
printOut("Answer_noMod = " + part1_answerNoMod.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millInInch = 25.4;
const meters = 25.34;
const answer = (meters * 1000 / millInInch);
const answer_roundUp = Math.ceil(answer * 100)/100;
printOut("Answer = " + answer.toString());
printOut("Answer_roundUp = " + answer_roundUp.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part3_answer = (3 * hoursInDay * minutesInHour) + (12 * minutesInHour) + 14 + (45 / secondsInMinute);
printOut("Total minutes = " + part3_answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalMinutes = 6322.52;
const minutesPerDay = (minutesInHour * hoursInDay);
const totalDays = Math.floor(totalMinutes / minutesPerDay);

let remainingMinutes = totalMinutes % minutesPerDay;

let totalHours = Math.floor(remainingMinutes / minutesInHour);
remainingMinutes = remainingMinutes % minutesInHour;

let minutes = Math.floor(remainingMinutes);
let seconds = Math.floor((remainingMinutes - minutes) * secondsInMinute);

printOut("Total_Days = " + totalDays.toString());
printOut("Total_Hours = " + totalHours.toString());
printOut("Total_Minutes = " + minutes.toString());
printOut("Total_Seconds = " + seconds.toString())
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dollarTotal = 54;
let nok = 76;
let usd = 8.6;
const exchangeRate = nok / usd;
const exchangeRate_roundUp = Math.ceil(exchangeRate * 100) / 100;

let nokTotal = dollarTotal * exchangeRate;
let nokTotal_RoundUp = Math.ceil(nokTotal * 10) / 10;
let usdTotal = nokTotal / exchangeRate;


printOut("Exchange_Rate = " + exchangeRate.toString());
printOut("Exchange_RoundUp = " + exchangeRate_roundUp.toString())
printOut(newLine);
printOut("54 USD (round-up) = " + nokTotal_RoundUp.toString())
printOut("477.21 KR = " + usdTotal.toString())
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("There is much between heaven and earth that we do not understand");
printOut("There are 53 characters in the text");
printOut("The character at position 19 is h.");
printOut("The characters from character number 35 is: a, t, w, e, d, o, n, o.");
printOut("The word earth starts at position number 28");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let fiveGreaterThanThree = 5 > 3;
let sevenOrSeven = 7 >= 7;
let aAndB = "a" > "b"; 
let oneLessThanA = 1 < "a";
let twoThousandLess = "2500" < "abcd";
let arneThomas = "arne" !== "thomas";
let twoEqualsFive = 2 === 5;
let abcd_bcd = "abcd" > "bcd";


printOut("Is five greater than three? = " + fiveGreaterThanThree.toString());
printOut("Is seven greater than or equal to 7? = " + sevenOrSeven.toString());
printOut("Is a greater than b? = " + aAndB.toString());
printOut("Is 1 less than A? = " + oneLessThanA.toString());
printOut("Is 2500 less than abcd? = " + twoThousandLess.toString());
printOut("Arne is not equal to thomas = " + arneThomas.toString());
printOut("2 equals 5 = " + twoEqualsFive.toString());
printOut("Abcd is greater than bcd =" + abcd_bcd.toString());
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part1_answer = Number("254");
let part2_answer = Number("57.23");
let part3_NumberAnswer = parseInt("25 kroner", 10);

printOut("254(text) = " + part1_answer.toString());
printOut("57.23(text) = " + part2_answer.toString())
printOut("25 kroner(text) = " + part3_NumberAnswer.toString())
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* I was unsure how to do this part, so i had to ask chatGPT */
const r = Math.floor(Math.random() * 360) + 1;

printOut("The random number is = " + r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays_part10 = 131;
let totalWeeks = Math.floor(totalDays_part10 / 7);
let days = totalDays_part10 % 7;

printOut("Total weeks = " + totalWeeks.toString());
printOut("Days left = " + days.toString());
printOut("131 days is 18 weeks and 5 days");
printOut(newLine);