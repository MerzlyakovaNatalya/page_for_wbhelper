import { FC } from 'react'
import style from './style.module.css'

const Loading: FC = () => {
  return (
    <div className={style.loading}>
      Минутку...
    </div>
  )
}

export default Loading
