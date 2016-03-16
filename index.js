#!/usr/bin/env node

console.log('Hello user, welcome on CssenSass !');
var program = require('commander');
var fs = require('fs'),
	status;

program
	.arguments('<file>')
	.option('-i, --input', 'The css input file')
	.option('-o, --output', 'The output file (Sass, Less, Stylus)')
	.option('-f, --output-format', 'Language of the output file')
	.option('--preserve-semantic', 'Areserves semantic of the css input file. If sets, more mixins are generated.')
	.option('--no-duplicates-ruleset', 'Avoids duplicated declarations in rulesets. If sets, more mixins are generated.')
	.option('--min-children', 'Avoids mixins used less than VALUE times. Lower the value is, less mixins are generated.')
	.option('--min-declarations', 'Avoids mixins introducing less than VALUE declarations. Lower the value is, less mixins are generated.')
	.option('--max-parameters', 'Avoids mixins having more than VALUE parameters. Lower the value is, less mixins are generated.')
	.option('--debug', 'Debug mode')
	.action(function(file) {
		console.log('Css file you want to migrate : %s',file);
		try{
			status = fs.statSync(file);
			console.log('File exists. Beginning the migration Sass...');
		} catch(e) {
			console.log('File does not exist.');
		}
	})
	.parse(process.argv);

if(!program.args.length){
	program.help();
}