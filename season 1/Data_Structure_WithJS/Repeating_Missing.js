function findTwoElement(arr) {
    let n = arr.length;

    // Expected sum and sum of squares
    const sn = (n * (n + 1)) / 2;
    const s2n = (n * (n + 1) * (2 * n + 1)) / 6;

    let s = 0, s2 = 0;

    // Correct loop
    for (let i = 0; i < n; i++) {
        s += arr[i];
        s2 += arr[i] * arr[i];
    }

    // Finding values
    const val1 = s - sn;
    let val2 = s2 - s2n;
    val2 = val2 / val1;

    // Fix precision issue
    const x = Math.round((val1 + val2) / 2);
    const y = Math.round(val2 - x);

    return [x, y];
}

const arr = [3, 1, 2, 5, 4, 6, 7, 5];
const ans = findTwoElement(arr);
console.log(`The repeating and missing numbers are: [${ans[0]}, ${ans[1]}]`);
