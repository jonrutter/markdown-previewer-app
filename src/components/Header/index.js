import React from 'react';

import * as s from './Header.module.css';

import { FaMarkdown } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.content}>
        <FaMarkdown />
        <h1 className={s.title}>React Markdown Previewer</h1>
      </header>
    </div>
  );
};

export default Header;
