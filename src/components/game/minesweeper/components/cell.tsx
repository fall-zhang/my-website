import { memo } from 'react'
import { Cell } from '../types'

interface Props {
  cell: Cell;
  onClick: () => void;
  onContextMenu: (e: React.MouseEvent) => void;
  isDisabled: boolean;
}

const numberColors = ['transparent', '#3b82f6', '#16a34a', '#ef4444', '#8b5cf6', '#b91c1c', '#0891b2', '#475569', '#0f172a']

export const CellComponent = memo(({ cell, onClick, onContextMenu, isDisabled }: Props) => {
  const getDisplay = () => {
    if (cell.state === 'flagged') return '🚩'
    if (cell.state === 'revealed' && cell.isMine) return '💣'
    if (cell.state === 'revealed' && cell.adjacentMines > 0) return cell.adjacentMines
    return ''
  }

  const style = cell.state === 'revealed' && cell.adjacentMines > 0
    ? { color: numberColors[cell.adjacentMines] }
    : {}
  let labelState
  if (cell.state === 'flagged') {
    labelState = '已标记'
  } else if (cell.state === 'revealed') {
    labelState = '已翻开'
  } else {
    labelState = '未翻开'
  }
  return (
    <div
      className={`cell ${cell.state} ${cell.isMine && cell.state === 'revealed' ? 'mine-hit' : ''} ${isDisabled ? 'disabled' : ''}`}
      style={style}
      onClick={isDisabled ? undefined : onClick}
      onContextMenu={isDisabled ? undefined : onContextMenu}
      role="gridcell"
      aria-label={labelState}
    >
      {getDisplay()}
    </div>
  )
})
