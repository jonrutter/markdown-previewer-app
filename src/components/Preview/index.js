import React from 'react';

// input processing
import marked from 'marked';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import * as s from './Preview.module.css';

import { FaExpandAlt, FaCompressAlt } from 'react-icons/fa';

marked.setOptions({
  gmf: true,
  breaks: true,
});

const Preview = ({ input, fullScreen, setFullScreen }) => {
  // const processedContent = input.replace('\n', '<br>');
  const content = marked(input);
  const clean = DOMPurify.sanitize(content, { USE_PROFILES: { html: true } });

  const toggleFullScreen = () => {
    if (fullScreen) {
      setFullScreen('');
    } else {
      setFullScreen('preview');
    }
  };

  if (!fullScreen || fullScreen === 'preview') {
    return (
      <div
        className={
          fullScreen === 'preview' ? `${s.wrapper} ${s.expanded}` : s.wrapper
        }
      >
        <section className={s.content}>
          <header className={s.header}>
            <h2 className={s.title}>Previewer</h2>
            <button
              onClick={toggleFullScreen}
              aria-label={
                fullScreen === 'preview' ? 'Expand preview' : 'Shrink preview'
              }
              className={s.expandBtn}
            >
              {fullScreen === 'preview' ? <FaCompressAlt /> : <FaExpandAlt />}
            </button>
          </header>
          <div className={s.body}>
            <div className={s.preview} id="preview">
              {parse(clean)}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
};

export default Preview;
