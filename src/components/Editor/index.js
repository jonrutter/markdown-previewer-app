import React from 'react';

// styles
import * as s from './Editor.module.css';

// components
import Box from '../Box';

const Editor = ({ input, handleChange, fullScreen, setFullScreen }) => {
  return (
    <Box
      title="Editor"
      fullScreen={fullScreen}
      setFullScreen={setFullScreen}
      clear={() => handleChange('')}
    >
      <label htmlFor="editor" className="sr-only">
        Enter markdown
      </label>
      <textarea
        className={s.editor}
        id="editor"
        onChange={(e) => handleChange(e.target.value)}
        value={input}
      />
    </Box>
  );
};

export default Editor;
