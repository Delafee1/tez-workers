import * as React from 'react';

import s from './Page.module.scss'
import { Table, Coins, Main, Profile } from '@/components';

const Page: React.FC = () => (
  <div className={s.wrapper}>
    <div className={s.left}>
      <Main />
      <Table />
    </div>
    <Profile />
  </div>
);

export default Page;
