import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { checkPalindrome } from './utils/checkPalindrome.js'

const readInput = readline.createInterface({ input, output })
const phrase = await readInput.question('Please enter your number or phrase:')
console.log('Palindrome to check:', phrase, '...')
const isPalindrome = checkPalindrome(phrase)

if (isPalindrome) {
  console.log(`${phrase} is a palindrome!`)
  process.exit(0)
}

if (!isPalindrome) {
  const newPhrase = phrase + phrase.split('')[0]
  const newPhraseIsPalindrome = checkPalindrome(newPhrase)
  newPhraseIsPalindrome
    ? console.log(`${phrase} is a not palindrome, but ${newPhrase} is!`)
    : console.log(
        `${phrase} is not a palindrome! A palindrome is a word, phrase, or sequence that reads the same backwards as forwards.`
      )
  process.exit(0)
}
