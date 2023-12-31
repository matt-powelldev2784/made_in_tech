import { checkPalindrome } from './checkPalindrome'

describe('checkPalindrome', () => {
  it('should return true for a palindrome word', () => {
    const result = checkPalindrome('bananab')
    expect(result).toBe(true)
  })

  it('should return false for a non-palindrome word', () => {
    const result = checkPalindrome('hello')
    expect(result).toBe(false)
  })

  it('should return true for a palindrome number', () => {
    const result = checkPalindrome('1331')
    expect(result).toBe(true)
  })

  it('should return false for a non-palindrome number', () => {
    const result = checkPalindrome('12345')
    expect(result).toBe(false)
  })
})
