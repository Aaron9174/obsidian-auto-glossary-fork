import { GeneratedFile } from "GeneratedFile";
import { Glossary } from "Glossary";
import { Index } from "Index";
import { TAbstractFile } from "obsidian";
export class GlossaryIndex extends GeneratedFile {
	index = new Index({
		name: super.Name,
		chosenFolder: super.ChosenFolder,
		includeFiles: super.IncludeFiles,
		overwrite: super.Overwrite,
		notesOrder: super.NotesOrder,
		destFolder: super.DestFolder,
	});

	glossary = new Glossary({
		name: super.Name,
		chosenFolder: super.ChosenFolder,
		includeFiles: super.IncludeFiles,
		overwrite: super.Overwrite,
		notesOrder: super.NotesOrder,
		destFolder: super.DestFolder,
	});

	async createText(filesAndFolders: TAbstractFile[]): Promise<string> {
		const indexText = await this.index.createText(filesAndFolders, true);

		const glossaryText = await this.glossary.createText(filesAndFolders);

		const finalText = `${indexText}\n\n***\n\n${glossaryText}`;

		return finalText;
	}
}
