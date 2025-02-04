const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, "templates");
const WORKFLOW_DIR = path.join(process.cwd(), ".github/workflows");

function generateWorkflow(lang) {
    const templatePath = path.join(TEMPLATES_DIR, `${lang}.yml`);
    const outputPath = path.join(WORKFLOW_DIR, `${lang}-ci.yml`);

    if (!fs.existsSync(templatePath)) {
        console.log(`⚠️ Modèle introuvable pour ${lang} !`);
        return;
    }

    fs.mkdirSync(WORKFLOW_DIR, { recursive: true });
    fs.copyFileSync(templatePath, outputPath);
    console.log(`✅ Fichier généré : ${outputPath}`);
}

module.exports = { generateWorkflow };
