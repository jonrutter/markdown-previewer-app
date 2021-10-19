import React from 'react';

import * as s from './Header.module.css';

import Icon from '../../images/icon.svg';

const Header = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.content}>
        <img src={Icon} alt="" className={s.icon} />
        <h1 className={s.title}>Markdown Previewer</h1>
      </header>
    </div>
  );
};

export default Header;
