import React from 'react';

import * as s from './Editor.module.css';

import { FaExpandAlt, FaCompressAlt } from 'react-icons/fa';

const Editor = ({ input, handleChange, fullScreen, setFullScreen }) => {
  const toggleFullScreen = () => {
    if (fullScreen) {
      setFullScreen('');
    } else {
      setFullScreen('editor');
    }
  };
  if (!fullScreen || fullScreen === 'editor') {
    return (
      <div
        className={
          fullScreen === 'editor' ? `${s.wrapper} ${s.expanded}` : s.wrapper
        }
      >
        <section className={s.content}>
          <header className={s.header}>
            <h2 className={s.title}>Editor</h2>
            <button onClick={toggleFullScreen}>
              {fullScreen === 'editor' ? <FaCompressAlt /> : <FaExpandAlt />}
            </button>
          </header>
          <textarea
            className={s.editor}
            id="editor"
            onChange={(e) => handleChange(e.target.value)}
          >
            {input}
          </textarea>
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Editor;
