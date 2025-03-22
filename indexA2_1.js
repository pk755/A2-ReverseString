function reverseString() {
    const input = document.getElementById('userInput').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = `Reversed: ${reversed}`;
  }
  