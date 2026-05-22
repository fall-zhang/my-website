import { Board, CellState } from './types'

const createEmptyBoard = (rows: number, cols: number): Board =>
  Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ({
      row: r, col: c, isMine: false, adjacentMines: 0, state: 'hidden' as CellState
    }))
  )

export function placeMinesAndCalculate (rows: number, cols: number, mines: number, safeRow: number, safeCol: number): Board {
  const board = createEmptyBoard(rows, cols)
  const safeZone = new Set<string>()
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const nr = safeRow + dr; const nc = safeCol + dc
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) safeZone.add(`${nr}-${nc}`)
    }
  }

  let placed = 0
  while (placed < mines) {
    const r = Math.floor(Math.random() * rows)
    const c = Math.floor(Math.random() * cols)
    if (!board[r][c].isMine && !safeZone.has(`${r}-${c}`)) {
      board[r][c].isMine = true
      placed++
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!board[r][c].isMine) {
        let count = 0
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr; const nc = c + dc
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].isMine) count++
          }
        }
        board[r][c].adjacentMines = count
      }
    }
  }
  return board
}

export function floodReveal (board: Board, row: number, col: number, rows: number, cols: number): Board {
  const newBoard = board.map(r => r.map(c => ({ ...c })))
  const queue: [number, number][] = []
  if (row >= 0 && row < rows && col >= 0 && col < cols && newBoard[row][col].state === 'hidden') {
    queue.push([row, col])
  }

  while (queue.length > 0) {
    const [cr, cc] = queue.shift()!
    if (newBoard[cr][cc].state !== 'hidden') continue
    newBoard[cr][cc].state = 'revealed'

    if (newBoard[cr][cc].adjacentMines === 0 && !newBoard[cr][cc].isMine) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = cr + dr; const nc = cc + dc
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && newBoard[nr][nc].state === 'hidden') {
            queue.push([nr, nc])
          }
        }
      }
    }
  }
  return newBoard
}

export function checkWin (board: Board, totalMines: number): boolean {
  let revealed = 0
  for (const row of board) for (const cell of row) if (cell.state === 'revealed') revealed++
  return revealed === board.length * board[0].length - totalMines
}
