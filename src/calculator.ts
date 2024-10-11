export function add(numbers: string): number {
    if (numbers === "") return 0;
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((a, b) => a + b, 0);
  }
  