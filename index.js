const seoParser = require('./models/seo-parser');

parser();

function parser() {
	const filePath = './template/template.html';

	const parser2 = new (seoParser)(filePath);
	parser2
		.seoRulerProcess()
		.consoleLog();
}