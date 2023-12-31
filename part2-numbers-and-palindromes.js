import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { checkPalindromeWithStartAndEndNumber } from './utils/checkPalindroneWithStartAndendNumber.js'

const readInput = readline.createInterface({ input, output })
const startNum = await readInput.question('Please enter a start number:')
const endNum = await readInput.question('Please enter an end number:')
console.log(
  `Checking number of palindromes between: ${startNum} and ${endNum} ...`
)

const numOfPalindromes = checkPalindromeWithStartAndEndNumber([
  startNum,
  endNum,
])

if (typeof numOfPalindromes === 'number') {
  console.log(
    `The number of palindromes between ${startNum} and ${endNum} are: ${numOfPalindromes}`
  )
} else {
  console.log(numOfPalindromes)
}

process.exit(0)