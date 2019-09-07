function getRands(amt: number): Array<number> {
  const nums = new Set();
  while (nums.size < amt) {
    const n: number = Math.floor(Math.random() * amt);
    nums.add(n);
  }
  return Array.from(nums);
}
function checkBoard(size: number): Array<Array<number>> {
  const randos: Array<number> = getRands(size - 1);
  const solArray: Array<number> = [];
  randos.forEach((x, i) => {
    solArray[x] = i;
  });
  return [solArray.concat([size - 1]), randos.concat([size - 1])];
}
function getInversions(arr: Array<number>): number {
  let inversions = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == null) { continue; }
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] > arr[j + i]) {
        inversions += 1;
      }
    }
  }
  return inversions;
}
export default function getBoardOrder(size: number): Array<Array<number>> {
  let doable = checkBoard(size);
  while (getInversions(doable[0]) % 2 !== 0) {
    doable = checkBoard(size);
  }
  return doable;
}
