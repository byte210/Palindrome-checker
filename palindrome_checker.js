function palindrome(str) {
    //deleting all non-alphanumeric characters from the array and changing all the remaining characters to lowercases
    str = str.replace(/[_\W]+/g, "").toLowerCase();
  
    const a = str.split('');
    const b = [...a].reverse().join('');
    const c = [...a].join('');
  
    return b === c;
  }
  