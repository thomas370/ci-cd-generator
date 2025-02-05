const { generateWorkflow } = require('./generator');
const inquirer = require('inquirer').default;

const supportedLanguages = ["nodejs", "python", "java", "cpp", "c#", "c++", "go", "Rust", "php", "ruby", ];

async function main() {
    const args = process.argv.slice(2);

    if (args.includes("--help")) {
        console.log("Usage: node src/cli.js [langage]");
        console.log("Exemples : node src/cli.js nodejs | python | java | cpp");
        return;
    }

    let language = args[0];

    if (!language || !supportedLanguages.includes(language)) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "lang",
                message: "Choisissez un langage pour générer le workflow CI/CD :",
                choices: supportedLanguages
            }
        ]);
        language = answer.lang;
    }

    console.log(`📄 Génération du workflow pour ${language}...`);
    generateWorkflow(language);
}

main().catch(error => console.error("❌ Une erreur est survenue :", error));
