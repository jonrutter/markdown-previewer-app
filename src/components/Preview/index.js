import React from 'react';

// input processing
import marked from 'marked';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

// styles
import * as s from './Preview.module.css';

// components
import Box from '../Box';

marked.setOptions({
  gmf: true,
  breaks: true,
});

const Preview = ({ input, fullScreen, setFullScreen }) => {
  const content = marked(input);
  const clean = DOMPurify.sanitize(content, { USE_PROFILES: { html: true } });

  return (
    <Box title="Preview" fullScreen={fullScreen} setFullScreen={setFullScreen}>
      <div className={s.body}>
        <div className={s.preview} id="preview">
          {parse(clean)}
        </div>
      </div>
    </Box>
  );
};

export default Preview;
