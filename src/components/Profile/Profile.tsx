'use client';

import * as React from 'react';
import cn from 'classnames';
import s from './Profile.module.scss'
import { PERSON_CONFIG, ProfileEnum, TEAM_CONFIG, achievments } from './config';
import { Achievment } from '..';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<ProfileEnum>(ProfileEnum.person);

  return (
    <div className={cn(s.wrapper, activeTab === ProfileEnum.person && s.wrapper_person, activeTab === ProfileEnum.team && s.wrapper_team)}>
      <div className={cn(s.tab, s.tab_profile)} onClick={() => setActiveTab(ProfileEnum.person)}><div className={s.tab_text}>Personal</div></div>
      <div className={cn(s.tab, s.tab_team)} onClick={() => setActiveTab(ProfileEnum.team)}><div className={s.tab_text}>Team</div></div>
      <div className={s['top-content']}>
        {activeTab === ProfileEnum.person && (
          <>
            <div className={s.photo} />
            <div className={s['user-info']}>
              <b>Vardas:</b> {PERSON_CONFIG.name}
              <br />
              <b>Pareigos:</b> {PERSON_CONFIG.job}
              <br />
              <b className={s.blue}>VIP lygis:</b> {PERSON_CONFIG.vipLvl}
              <br />
              <b className={s.blue}>Vieta ratinge:</b> {PERSON_CONFIG.place}
              <br />
              <b>TEZ taskai:</b> {PERSON_CONFIG.points}
            </div>
          </>
        )}
        {activeTab === ProfileEnum.team && (
          <>
            <div className={cn(s.photo, s.photo_team)} />
            <div className={s['user-info']}>
              <b>Pavadinimas:</b> {TEAM_CONFIG.name}
              <br />
              <b>Vieta ratinge:</b> {TEAM_CONFIG.place}
              <br />
              <b>TEZ taskai:</b> {TEAM_CONFIG.points}
              </div>
          </>
        )}
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
            {activeTab === ProfileEnum.person ? 86 : 185}
            <br />
            {activeTab === ProfileEnum.person ? 64 : 164}
            <br />
            {activeTab === ProfileEnum.person ? 52 : 152}
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
            {activeTab === ProfileEnum.person ? 112 : 212}
            <br />
            {activeTab === ProfileEnum.person ? 96 : 196}
            <br />
            {activeTab === ProfileEnum.person ? 86 : 186}
          </div>
        </div>
      </div>
      <div className={s.title}>Pasiekimai:</div>
        <div className={cn(s.achievments, activeTab === ProfileEnum.team && s.achievments_team)}>
          {achievments.map((item, index) => (
            <Achievment key={index} title={item.title} text={item.text} image={item.image} color={activeTab === ProfileEnum.team ? 'green' : undefined} disabled={item.disabled}/>
          ))}
        </div>
    </div>
  )
}

export default Profile;