import chalk from "chalk";

interface Logger {
	text: string;
	local: string;
	repository: string;
	info: () => void;
}

export const log: Logger = {
	text: "Server started successfully 🐝",
	local:
		chalk.hex("#11b6e3").bold("Local: ") +
		chalk.underline("http://localhost:3000"),
	repository:
		chalk.hex("#0ba95a").bold("Repository: ") +
		chalk.underline("https://github.com/brittof/lexy"),
	info: () => console.log(log.text, "\n", log.local, "\n", log.repository)
};
