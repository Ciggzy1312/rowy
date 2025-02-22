import React from "react";
import { EditorProps } from "react-data-grid";
import { GlobalStyles } from "tss-react";

/**
 * Allow the cell to be editable, but disable react-data-grid’s default
 * text editor to show.
 *
 * Hides the editor container so the cell below remains editable inline.
 *
 * Use for cells that have inline editing and don’t need to be double-clicked.
 *
 * TODO: fix NullEditor overwriting the formatter component
 */
export default class NullEditor extends React.Component<EditorProps<any, any>> {
  getInputNode = () => null;
  getValue = () => null;
  render = () => (
    <GlobalStyles
      styles={{
        ".rdg-editor-container": { display: "none" },
      }}
    />
  );
}
