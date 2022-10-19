import { apiVersion, App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, requestUrl } from 'obsidian';
import HTBApi from './api';
import chartApi from './chart'


interface MyPluginSettings {
	authToken: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	authToken: ''
}

export default class NoteTheBoxPlugin extends Plugin {
	settings: MyPluginSettings;
	api: HTBApi;

	async onload() {
		await this.loadSettings();

		this.api = new HTBApi(this.settings.authToken);

		this.addCommand({
			id: 'get-own-machines-htb',
			name: 'completed machines',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				this.api.getCompleteMachineProfileById('30094').then(r => {
					if (r){
						let json = JSON.parse(r);
		
						let numOwnMachines = 0;
						for (let i = 0; i < json["profile"]["operating_systems"].length; i++){
							numOwnMachines += json["profile"]["operating_systems"][i]["owned_machines"]
						}
						editor.replaceSelection(numOwnMachines.toString());
					}
				});
			}
		});


		this.addCommand({
			id: 'get-machine-avatar-htb',
			name: 'machine avatar',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				this.api.getMachineByName('Faculty').then(r => {
					if (r){
						let json = JSON.parse(r);
						let img = json["info"]["avatar"]
						editor.replaceSelection("# ![img\|55](https://www.hackthebox.com"+img+") Laburatory \n")
						let c = new chartApi([3.4,3.4,4,5,5])
						editor.replaceSelection("![img\|400]("+c.getUrl()+")") // chart
					}
				});
			}
		});

		this.addSettingTab(new SampleSettingTab(this.app, this));

		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			// console.log('click', evt);
		});

		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleModal extends Modal {
	settings: any;
	api: HTBApi;

	// c'è un modo migliore ?
	constructor(app: App, api: HTBApi) {
		super(app);
		this.api = api;
	}

	onOpen() {
		const {contentEl} = this;

		this.api.getCompleteMachineProfileById('30094').then(r => {
			if (r){
				let json = JSON.parse(r);

				let numOwnMachines = 0;
				for (let i = 0; i < json["profile"]["operating_systems"].length; i++){
					numOwnMachines += json["profile"]["operating_systems"][i]["owned_machines"]
				}
				
				contentEl.setText('hai fatto '+numOwnMachines+" macchine");
			}else {
				contentEl.setText('error retriving owned_machines: check authToken');
			}
		});

	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: NoteTheBoxPlugin;

	constructor(app: App, plugin: NoteTheBoxPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for Note The Box plugin.'});

		new Setting(containerEl)
			.setName('authToken')
			.setDesc('generate from HackTheBox profile')
			.addText(text => text
				.setPlaceholder('Enter your authToken of HackTheBox')
				.setValue(this.plugin.settings.authToken)
				.onChange(async (value) => {
					console.log('authToken: ' + value);
					this.plugin.settings.authToken = value;
					await this.plugin.saveSettings();
				}));
	}
}
