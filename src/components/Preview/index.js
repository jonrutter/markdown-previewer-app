import React from 'react';

// input processing
import marked from 'marked';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import * as s from './Preview.module.css';

marked.setOptions({
  gmf: true,
  breaks: true,
});

const Preview = ({ input }) => {
  // const processedContent = input.replace('\n', '<br>');
  const content = marked(input);
  const clean = DOMPurify.sanitize(content, { USE_PROFILES: { html: true } });

  return (
    <div className={s.wrapper}>
      <section className={s.content}>
        <header className={s.header}>
          <h2 className={s.title}>Previewer</h2>
        </header>
        <div className={s.body}>
          <div className={s.preview} id="preview">
            {parse(clean)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preview;
