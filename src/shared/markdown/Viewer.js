import React, { useEffect } from "react";
import ExampleTheme from "./themes/ExampleTheme";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";

const UpdatePlugin = ({ initialConfig }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (editor) {
      const newState = editor.parseEditorState(initialConfig);
      editor.setEditorState(newState);
    }
  }, [editor, initialConfig]);
};

const Viewer = ({ body }) => {
  return (
    <React.Fragment>
      <LexicalComposer
        initialConfig={{
          editorState: body,
          theme: ExampleTheme,
        }}
      >
        <RichTextPlugin contentEditable={<ContentEditable />} />
        <UpdatePlugin initialConfig={body} />
      </LexicalComposer>
    </React.Fragment>
  );
};

export default Viewer;
