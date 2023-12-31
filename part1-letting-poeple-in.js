import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { checkPalindrome } from './utils/checkPalindrome.js'

const readInput = readline.createInterface({ input, output })
const phrase = await readInput.question('Please enter your number or phrase:')
console.log('Palindrome to check:', phrase, '...')
const isPlalindrome = checkPalindrome(phrase)

if (isPlalindrome) {
  console.log(`${phrase} is a palindrome!`)
} else {
  console.log(`${phrase} is not a palindrome!`)
}

process.exit(0)
