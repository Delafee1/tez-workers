import * as React from 'react';
import cn from 'classnames';
import s from './Main.module.scss'
import { Coins } from '../Coins';

const Main: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s['progress-bar']}>
        <div className={cn(s.present, s.present_first)} />
        <div className={cn(s.present, s.present_second)} />
        <div className={cn(s.present, s.present_third)} />
        <div className={s.progress}>12350 / 19000</div>
      </div>
      <div className={s.date}>
        11:11 PM
        <br />
        11/26/2023
      </div>
      <Coins />
    </div>
  )
}

export default Main