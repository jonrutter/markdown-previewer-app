import React, { useState } from 'react';

// styles
import * as s from './Box.module.css';

// icons
import { FaExpandAlt, FaCompressAlt, FaTrash } from 'react-icons/fa';

const Box = ({ title, fullScreen, setFullScreen, clear, children }) => {
  const [deletePrompt, setDeletePrompt] = useState(false);

  const clearInput = () => {
    clear();
    setDeletePrompt(false);
  };

  const toggleFullScreen = () => {
    if (fullScreen) {
      setFullScreen('');
    } else {
      setFullScreen(title);
    }
  };

  if (!fullScreen || fullScreen === title) {
    return (
      <div
        className={
          fullScreen === title ? `${s.wrapper} ${s.expanded}` : s.wrapper
        }
      >
        <section className={s.content}>
          <header className={s.header}>
            {deletePrompt && (
              <div className={s.deletePrompt}>
                <h2>Clear editor?</h2>
                <div className={s.buttons}>
                  <button className={s.btn} onClick={clearInput}>
                    Yes
                  </button>
                  <button
                    className={s.btn}
                    onClick={() => setDeletePrompt(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
            <h2 className={s.title}>{title}</h2>
            <div className={s.buttons}>
              {title === 'Editor' && (
                <button
                  onClick={() => setDeletePrompt(true)}
                  className={s.btn}
                  aria-label="Clear editor contents"
                >
                  <FaTrash />
                </button>
              )}
              <button
                onClick={toggleFullScreen}
                className={s.btn}
                aria-label={
                  fullScreen ? `Minimize ${title}` : `Expand ${title}`
                }
              >
                {fullScreen === title ? <FaCompressAlt /> : <FaExpandAlt />}
              </button>
            </div>
          </header>
          <div className={title === 'Editor' ? s.editorBody : s.body}>
            {children}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Box;
