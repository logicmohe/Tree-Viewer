import {
    window,
    CodeLensProvider,
    TextDocument,
    CodeLens,
    Range,
    Command,
  } from 'vscode';
  
  class MyCodeLensProvider implements CodeLensProvider {
    // Each provider requires a provideCodeLenses function which will give the various documents
    // the code lenses
    async provideCodeLenses(document: TextDocument): Promise<CodeLens[]> {
        // Get current active line number
        const activeEditor = window.activeTextEditor;
        if(activeEditor) {
            activeEditor.selection.active.line;
        }

        // Define where the CodeLens will exist
        let topOfDocument = new Range(activeEditor.selection.active.line,0, activeEditor.selection.active.line, 0);

        // Define what command we want to trigger when activating the CodeLens
        let c: Command = {
            command: "tree-viewer.addConsoleLog",
            title: "Insert console.log to target line"
        };

        let codeLens = new CodeLens(topOfDocument, c);

        return [codeLens];
    }
  }
  
  export default MyCodeLensProvider;