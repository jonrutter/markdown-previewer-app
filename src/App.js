import React, { useState } from 'react';

import Editor from './components/Editor';
import Preview from './components/Preview';

const defaultInput =
  '# Hello! Welcome to my markdown previewer app!\n\nEnter text in markdown format in this box, and watch the Previewer box render it in real time!\n\n## Markdown basics\n\n### Headers can be written by starting the line with number signs.\n\nAdd an empty space between lines to make a paragraph, and surround text with **double asterisks for bold text**, or *single asterisks for italic.*\n\n### As for lists: \n\n- You can write unordered lists\n\n- like this.\n\n1. And ordered lists\n\n2. Like this.\n\n### If you want to render code:\n\n`this-is-how-you-write: inline-code;`\n\n```\n{\n  "and:"a",\n  "code": "block",\n}\n```\n\n> Block quotes are easy, just start the line with >.\n\nFinally, to include images:\n\n![alternative text describing the image](https://picsum.photos/200)\n\nThose are the basics! Want to learn more? Check out this [this handy guide to markdown](https://www.markdownguide.org/)';

const App = () => {
  const [input, setInput] = useState(defaultInput);
  return (
    <div className="app">
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="app-grid">
        <Editor input={input} handleChange={setInput} />
        <Preview input={input} />
      </div>
    </div>
  );
};

export default App;
