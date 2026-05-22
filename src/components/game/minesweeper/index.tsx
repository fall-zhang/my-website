import { useReducer, useEffect, useCallback, useState } from 'react'
import { GameState, GameAction, GameStatus, Cell } from './types'
import { placeMinesAndCalculate, floodReveal, checkWin } from './game-logic'
import { CellComponent } from './components/cell'
import './index.css'

const ROWS = 10
const COLS = 10
const MINES = 15
const defeatedTimes = 0

const initialState: GameState = {
  board: [],
  status: 'idle',
  flags: 0,
  time: 0
}
// 每次失败，地雷总数都会减一
// 每次成功，地图宽 +2 高 +3，并且地雷总数加 10
function gameReducer (state: GameState, action: GameAction): GameState {
  // console.log('⚡️ line:10 ~ state: ', state)
  // console.log('⚡️ line:10 ~ state: ', action)
  switch (action.type) {
    case 'START': {
      const board = placeMinesAndCalculate(ROWS, COLS, MINES - defeatedTimes, action.row, action.col)
      // console.log('⚡️ line:13 ~ board: ', board)
      return {
        board: floodReveal(board, action.row, action.col, ROWS, COLS),
        status: 'playing',
        flags: 0,
        time: 0
      }
    }
    case 'REVEAL': {
      if (state.status === 'idle') {
        return gameReducer(state, {
          type: 'START',
          row: action.row,
          col: action.col
        })
      }
      if (state.status !== 'playing') return state
      const cell = state.board[action.row][action.col]
      if (cell.state !== 'hidden') return state

      const newBoard = floodReveal(state.board, action.row, action.col, ROWS, COLS)
      let status: GameStatus
      if (newBoard[action.row][action.col].isMine) {
        status = 'lost'
      } else if (checkWin(newBoard, MINES)) {
        status = 'won'
      } else {
        status = 'playing'
      }
      return { ...state, board: newBoard, status }
    }
    case 'FLAG': {
      if (state.status !== 'playing') return state
      const cell = state.board[action.row][action.col]
      if (cell.state === 'flagged') {
        const nb = state.board.map((rowCells, ri) => {
          return rowCells.map((cell, ci) => (ri === action.row && ci === action.col ? { ...cell, state: 'hidden' } : cell)) satisfies Cell[]
        })
        return { ...state, board: nb, flags: state.flags - 1 }
      }
      if (cell.state === 'hidden') {
        const nb = state.board.map((rowCells, ri) => rowCells.map((cell, ci) => {
          if (ri === action.row && ci === action.col) {
            return { ...cell, state: 'flagged' } satisfies Cell
          }
          return cell satisfies Cell
        }))
        return { ...state, board: nb, flags: state.flags + 1 }
      }
      return state
    }
    case 'TICK': return state.status === 'playing' ? { ...state, time: state.time + 1 } : state
    case 'RESET': return { ...initialState, board: [] }
    default: return state
  }
}

export default function App () {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const [showModal, setShowModal] = useState(false)
  const [celebrated, setCelebrated] = useState(false) // 防止 StrictMode 双触发


  useEffect(() => {
    let timer: number
    if (state.status === 'playing') timer = window.setInterval(() => dispatch({ type: 'TICK' }), 1000)
    return () => clearInterval(timer)
  }, [state.status])

  useEffect(() => {
    if ((state.status === 'won' || state.status === 'lost') && !celebrated) {
      setCelebrated(true)
      setTimeout(() => setShowModal(true), state.status === 'won' ? 600 : 400)
    }
  }, [state.status, celebrated])

  const handleClick = (row: number, col: number) => {
    dispatch({ type: 'REVEAL', row, col })
  }
  const handleContextMenu = useCallback((e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault()
    dispatch({ type: 'FLAG', row, col })
  }, [])

  const isGameActive = state.status === 'playing'

  let statusText
  if (state.status === 'won') {
    statusText = '🎉 恭喜通关！'
  } if (state.status === 'lost') {
    statusText = '💥 游戏结束'
  } else if (state.status === 'playing') {
    statusText = '⏳ 游戏中'
  } else {
    statusText = '⚙️ 点击任意格开始'
  }
  function onStartGame () {
    dispatch({
      type: 'START',
      row: 10,
      col: 10
    })
    setShowModal(false)
    setCelebrated(false)
  }
  return (
    <div className="app-wrapper">
      <div className="glass-panel">
        <header className="hud">
          <div className="hud-item"><span className="hud-icon">⏱️</span><span className="hud-value">{String(state.time).padStart(3, '0')}</span></div>
          <button className="btn-restart" onClick={onStartGame}>
            {state.status === 'idle' ? '🎮 开始游戏' : '🔄 重新开始'}
          </button>
          <div className="hud-item"><span className="hud-icon">🚩</span><span className="hud-value">{MINES - state.flags}</span></div>
        </header>
        <div className="status-bar">{statusText}</div>
        <div className="board" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
          {state.board.length > 0 && state.board.map((row, ri) => row.map((cell, ci) => (
            <CellComponent
              key={`${ri}-${ci}`}
              cell={cell}
              onClick={() => handleClick(ri, ci)}
              onContextMenu={(e) => handleContextMenu(e, ri, ci)}
              isDisabled={!isGameActive}
            />
          )))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <h2 className="modal-title">{state.status === 'won' ? '🎉 恭喜通关！' : '💥 游戏结束'}</h2>
            <div className="modal-stats">
              <div className="stat-row"><span>用时</span><strong>{state.time}s</strong></div>
              <div className="stat-row"><span>标记数</span><strong>{state.flags} / {MINES}</strong></div>
              <div className="stat-row"><span>难度</span><strong>{ROWS}×{COLS} ({MINES}雷)</strong></div>
            </div>
            <button className="btn-primary" onClick={() => { dispatch({ type: 'RESET' }); setShowModal(false); setCelebrated(false) }}>再来一局</button>
          </div>
        </div>
      )}
    </div>
  )
}
