const { generateWorkflow } = require('./generator');

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: node src/cli.js <langage>");
    console.log("Exemples : node src/cli.js nodejs | python | java | cpp");
} else {
    generateWorkflow(args[0]);
}
