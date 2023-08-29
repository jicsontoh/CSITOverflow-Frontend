import React from "react";
import ExampleTheme from "./themes/ExampleTheme";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";

const Viewer = (props) => {
  return (
    <LexicalComposer
      initialConfig={{
        editorState: props.body,
        theme: ExampleTheme,
      }}
    >
      <RichTextPlugin contentEditable={<ContentEditable />} />
    </LexicalComposer>
  );
};

export default Viewer;
