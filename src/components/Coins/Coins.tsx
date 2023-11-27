'use client';

import * as React from 'react';
import cn from 'classnames';
import s from './Coins.module.scss'

const Coins: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const onClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className={cn(s.wrapper, isVisible && s.wrapper_visible)} onClick={onClick}>
      <div className={s.title}>Tasku sistema</div>
      <div className={s.row}>3n = 10<span className={s.coin}/></div>
      <div className={s.row}>4n = 17<span className={s.coin}/></div>
      <div className={s.row}>5n = 25<span className={s.coin}/></div>
      <div className={s.row}>6n = 33<span className={s.coin}/></div>
      <div className={s.row}>7n = 52<span className={s.coin}/></div>
      <div className={s.row}>8n = 66<span className={s.coin}/></div>
      <div className={s.row}>9n+ = 77<span className={s.coin}/></div>
    </div>
  )
}

export default Coins;