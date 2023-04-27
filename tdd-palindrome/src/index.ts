export class PalindromeChecker {
  private reverseWord(word: string): string {
    return word.split('').reverse().join('');
  }

  private removeSpaces(word: string): string {
    return word.split(' ').join('');
  }

  isAPalindrome(word: string): boolean {
    const reversedWord = this.reverseWord(word);

    return (
      this.removeSpaces(word).toLowerCase() ===
      this.removeSpaces(reversedWord).toLowerCase()
    );
  }
}
