import type { FC } from 'react'
import { Button } from '../Button'
import styles from './Counter.module.css'
import type { CounterProps } from './types'

export const Counter: FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  min = 1,
  max = 99,
}) => {
  const isMin = value <= min
  const isMax = value >= max

  return (
    <div className={styles.counter}>
      <Button
        variant="outline"
        size="small"
        onClick={onDecrement}
        disabled={isMin}
      >
        -
      </Button>
      <span className={styles.value}>{value}</span>
      <Button
        variant="outline"
        size="small"
        onClick={onIncrement}
        disabled={isMax}
      >
        +
      </Button>
    </div>
  )
}
