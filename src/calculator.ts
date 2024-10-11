export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /[,\n]/;
    let numString = numbers;
  
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(`[${delimiterMatch[1]}]`);
        numString = numbers.slice(4);
      }
    }
  
    const numArray = numString.split(delimiter).map(Number);
    const negatives = numArray.filter(num => num < 0);
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numArray.reduce((a, b) => a + b, 0);
  }
  