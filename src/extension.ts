import * as vscode from 'vscode';

import { commands, ExtensionContext, languages } from "vscode";
import MyCodeLensProvider from "./myCodeLensProvider";
import { addConsoleLog } from "./commands";

export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "tree-viewer" is now active!');

    // Register the command
    let commandDisposable = commands.registerCommand(
        "tree-viewer.addConsoleLog",
        addConsoleLog
    );

    // Get a document selector for the CodeLens provider
    // This one is any file that has the language of javascript
    let docSelector = {
        language: "javascript",
        scheme: "file"
    };

    // Register our CodeLens provider
    let codeLensProviderDisposable = languages.registerCodeLensProvider(
        docSelector,
        new MyCodeLensProvider()
    );

    // The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('tree-viewer.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Tree-Viewer!');
	});

    // Push the command and CodeLens provider to the context so it can be disposed of later
    context.subscriptions.push(commandDisposable);
    context.subscriptions.push(codeLensProviderDisposable);
}

export function deactivate() {}