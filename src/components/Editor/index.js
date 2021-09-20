import React from 'react';

import * as s from './Editor.module.css';

const Editor = ({ input, handleChange }) => {
  return (
    <div className={s.wrapper}>
      <section className={s.content}>
        <header className={s.header}>
          <h2 className={s.title}>Editor</h2>
        </header>
        <div className={s.body}>
          <textarea
            className={s.editor}
            id="editor"
            onChange={(e) => handleChange(e.target.value)}
          >
            {input}
          </textarea>
        </div>
      </section>
    </div>
  );
};

export default Editor;
