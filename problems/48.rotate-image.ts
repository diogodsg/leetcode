/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let n = matrix[0].length - 1;

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < n - i * 2; j++) {
      let temp = matrix[n - i - j][i];
      matrix[n - i - j][i] = matrix[n - i][n - i - j];
      matrix[n - i][n - i - j] = matrix[i + j][n - i];
      matrix[i + j][n - i] = matrix[i][j + i];
      matrix[i][j + i] = temp;
    }
  }
}
