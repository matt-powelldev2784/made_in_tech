import { checkPalindrome } from './checkPalindrome.js'

export const checkPalindromeWithStartAndEndNumber = ([startNum, endNum]) => {
  const startNumInt = parseInt(startNum)
  const endNumInt = parseInt(endNum)

  // Check if startNumInt and endNumInt have successfully been converted to integers
  if (isNaN(startNumInt) || isNaN(endNumInt)) {
    return 'Start and end numbers must be integers.'
  }

  // Check if startNumInt is not greater than endNumInt
  if (startNumInt > endNumInt) {
    return 'Start number cannot be greater than end number.'
  }

  const arrayOfNumbers = []
  let numOfPalindromes = 0

  for (let i = startNumInt; i <= endNumInt; i++) {
    arrayOfNumbers.push(i)
  }

  for (const num of arrayOfNumbers) {
    const numString = num.toString()
    const isPalindrome = checkPalindrome(numString)
    if (isPalindrome) {
      numOfPalindromes++
    }
  }

  return numOfPalindromes
}
