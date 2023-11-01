function reverseNumberRecursive(n) {
    if (n < 10) {
      return n;
    } else {
      return {
        rev = rev * 10 + (number % 10),
        number = (number - (number % 10)) / 10;
      }
    }
  }