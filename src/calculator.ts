export function add(numbers: string): number {
    if (numbers === "") return 0;
    const delimiters = /[,\n]/;
    const numArray = numbers.split(delimiters).map(Number);
    return numArray.reduce((a, b) => a + b, 0);
  }
  