**PHASE 1 CODE CHALLENGE
Challenge 1: Student Grade Generator (Toy Problem)**
#### Date, 2024/03/24

#### By Kaylie Wambui

## Description
It's a Javascript program that prompts the user to input student marks. The input should be between 0 and 100. Then outputs the correct grade by following this grading system: 

A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
```
git clone git@github.com:kayliewambui/SA.01-WK1-Code-Challenge.git
```

# Project Setup
This code defines a getGrade function that takes the marks as input and returns the corresponding grade. It first validates the input to ensure it's within the valid range. Then, it uses a series of if-else statements to determine the grade based on the marks.

The code then prompts the user for input using variable 'let'. Finally, it calls the getGrade function with the user input and displays the returned grade using console.log.

## Technologies used
Github
Javascript

## Support and contact details
github.com/kayliewambui

### License
The content of this site is licensed under the MIT license

**Challenge 2: Speed Detector (Toy Problem)**
#### Date, 2024/03/24

#### By Kaylie Wambui

## Description
It's a Javascript program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
```
git clone git@github.com:kayliewambui/SA.01-WK1-Code-Challenge.git
```
# Project Setup
This code defines a calculateDemeritPoints function that takes the car's speed as input and returns the appropriate message based on the speed. It performs the following steps:

Input Validation: Checks if the input is a valid number using isNaN.
Speed Difference: Calculates the difference between the car's speed and the speed limit (70 km/h) using Math.max to ensure a non-negative value.
Demerit Points: Calculates the demerit points by dividing the speed difference by 5 (one point for every 5 km/h above limit) using Math.floor for whole numbers.
License Suspension: Checks if the demerit points exceed 12 and returns "License suspended" if true.
Output Message: Depending on the demerit points, returns "Ok" for no points, or a string with the number of points using template literals.
The code then prompts the user for the car's speed, calls the calculateDemeritPoints function, and displays the returned message using console.log.

## Technologies used
Github
Javascript

## Support and contact details
github.com/kayliewambui

**Challenge 3: Net Salary Calculator (Toy Problem)**
#### Date, 2024/03/24

#### By Kaylie Wambui

## Description
It's a Javascript program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
```
git clone git@github.com:kayliewambui/SA.01-WK1-Code-Challenge.git
```
## Technologies used
Github
Javascript

## Support and contact details
github.com/kayliewambui

