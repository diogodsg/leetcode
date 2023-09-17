function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    let rows = new Array(9).fill(new Set<number>());
    let col = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[j][i] != ".") {
        if (col.has(board[j][i])) return false;
        col.add(board[j][i]);
      }

      if (board[i][j] != ".") {
        if (rows[i].has(board[i][j])) return false;
        rows[i].add(board[i][j]);
      }
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let set = new Set();

      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (board[i + l][j + k] != ".") {
            if (set.has(board[i + l][j + k])) return false;
            set.add(board[i + l][j + k]);
          }
        }
      }
    }
  }

  return true;
}
