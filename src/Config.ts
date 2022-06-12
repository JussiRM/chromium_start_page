import IConfig from "./interfaces/IConfig";

const LOCALSTORAGE_KEY = "config";

const Config = {
	// loadConfig should be called always and this value will not be actually null.
	loadedConfig: null! as IConfig,

	loadConfig() {
		let configData = window.localStorage.getItem(LOCALSTORAGE_KEY);
		if (!configData) {
			this.loadedConfig = this.createInitialConfig();
			this.saveConfig();
		}
		else {
			this.loadedConfig = JSON.parse(configData);
		}
	},

	createInitialConfig() : IConfig {
		let config = {} as IConfig;
		config.updated = new Date();
		config.widgets = [] as string[];

		return config;
	},

	saveConfig() {
		window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.loadedConfig));
	}
}

Config.loadConfig();

export default Config;