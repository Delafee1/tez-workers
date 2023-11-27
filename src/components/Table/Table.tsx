import * as React from 'react';
import cn from 'classnames';

import s from './Table.module.scss'
import { TABLE_CONFIG } from './tableConfig';

const Table: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        <div className={cn(s.button, s.button_green)}>Siandien</div>
        <div className={s.button}>Vakar</div>
        <div className={s.button}>Savaite</div>
        <div className={s.button}>Uz visa laika</div>
      </div>
      <div className={s['table-wrapper']}>
      <div className={cn(s.row, s.titles)}>
          <div className={s.index}>#</div>
          <div className={s.id}>Uzsakymo numeris</div>
          <div className={s.order}>Uzsakymo tipas</div>
          <div className={s.operation}>Operacijos tipas</div>
          <div className={s.number}>Taskai</div>
          <div className={s.date1}>Uzsakymo patvirtinimo data</div>
          <div className={s.date2}>Uzsakymo pradzios data</div>
      </div>
        {TABLE_CONFIG.map((item, index) => (
          <div key={index} className={s.row}>
            <div className={s.index}>{index + 1}</div>
            <div className={s.id}>{item.id}</div>
            <div className={s.order}>{item.orderType}</div>
            <div className={s.operation}>{item.operationType}</div>
            <div className={s.number}>{item.number}</div>
            <div className={s.date1}>{item.date1}</div>
            <div className={s.date2}>{item.date2}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Table