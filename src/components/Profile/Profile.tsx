import * as React from 'react';

import s from './Profile.module.scss'
import { Coins } from '..';

const Profile: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s['top-content']}>
        <div className={s.photo}/>
        <div className={s['user-info']}>
          <b>Vardas:</b> Laima
          <br />
          <b>Pareigos:</b> Direktore
          <br />
          <b className={s.blue}>VIP lygus:</b> Auksinis
          <br />
          <b className={s.blue}>Vieta ratinge:</b> 115
          <br />
          <b>TEZ taskai:</b> 14563
        </div>
      </div>
      <div className={s.title}>Daugiausia parduodami:</div>
      <div className={s['bottom-content']}>
        <div className={s.list}>
          <div className={s.country}>
            1. Turkija:
            <br />
            2. Graikija:
            <br />
            3. Egiptas:
          </div>
          <div className={s.count}>
            85
            <br />
            64
            <br />
            56
          </div>
        </div>
      </div>
      <div className={s.title}>Naktu skaicius:</div>
      <div className={s['bottom-content']}>
        <div className={s.list}>
          <div className={s.country}>
            1. 7 naktys:
            <br />
            2. 9 naktys:
            <br />
            3. 6 naktys:
          </div>
          <div className={s.count}>
            112
            <br />
            96
            <br />
            80
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile