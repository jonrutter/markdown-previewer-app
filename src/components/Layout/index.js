import React from 'react';

import * as s from './Layout.module.css';

import Header from '../Header';

const Layout = ({ title, gridLeft, gridRight }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Header />
        <main className={s.grid}>
          {gridLeft}
          {gridRight}
        </main>
      </div>
    </div>
  );
};

export default Layout;
