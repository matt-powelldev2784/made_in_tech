[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RYtva88r)

# Matthew Powell Introduction to Palindromes Readme

## How to run the program

1. Clone the repository to your local machine
2. Open the project in your IDE of choice
3. Navigate into the root folder of the project
3. Run npm i to install dependencies - this will install jest for testing

## How to run the files

1. Goto the command prompt in your terminal and navigate to the root folder of the project
2. Run node part1-letting-poeple-in.js for part 1
3. Run node part2-numbers-and-palindromes.js for part 2
4. Run node part3-suggesting-palindromes.js for part 3

## How to run the tests

1. Goto the command prompt in your terminal and navigate to the root folder of the project
2. Run npm test to run all the tests


# An Introduction to Palindromes

**Wait, what *are* palindromes?**

Palidromes are words, sentences or numbers that read the same forwards or backwards. For example, the numbers 99, 121, words like `Mum`, `Dad`, and a sentence like `A nut for a bar of tuna` are all palindromes.

A question is: Can we write code to tell us when there's a palindrome?

This scenario is broken down into multiple parts. Each part builds on the previous ones, so it's best to do the them in order; however, you can tackle the steps in each part however you wish.

Some of parts will have :star:s next to them, as these are more challenging.

We ask you to submit your own work, and we're interested not only in the answer but in your process-you need to be prepared to talk about your approach at the assessment.

 You won't be able to commit your changes to the repository after the date, so please make sure you push all of your changes by then. A good practice would be to push your changes after completing a number of changes or before lunch/end of the day (don't wait until the last minute!)

### Part 1: Letting People In :star:

A stakeholder is interested in developing a palidrome checker-they wonder if it's possible to let someone type in a number or word and check if it's a palindrome. Iterate your code to make this possible. An ideal output might be:

`Please enter your number or phrase: banana`
`Checking...`

`banana is not a palindrome.`

`Please enter your number or phrase: 1331`
`Checking...`

`1331 is a palindrome.`



 ### Part 2: Numbers and Palindromes

 The palindrome checker is great, but the feedback as been that, with numbers, it would be great to see how the palindromes that exist between *two* sets of numbers-for example how many exist between the numbers 99 and 125.

 
 When complete, the user should be able to enter a start and end number. The output should read: `The <number> of palindromes between <start number> and <end number>  are: ...` and display the list of palindromes between those two numbers.

 You can try this with the number 98 and 126-there should be 4 palindroms that exist.




### Part 3: Suggesting palindromes :star: :star:

The stakeholder has returned! This time, they would like your app to suggest palidromes to people based on their input (a very demanding stakeholder!). They would like it so that if the word or number isn't a palidrome, your app can create a palidrome based on it. For example:


`Please enter your number or phrase: banana`
`Checking...`

`banana is not a palindrome, but bananab is.`

`Please enter your number or phrase: 99199`
`Checking...`

`99199 is a palindrome`