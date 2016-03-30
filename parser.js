var CSSParser = require("css-js");
var fs = require("fs");

var config = {};
config.ver = "3.0";
parser = new CSSParser(config);
 
var cssContent = parser.parse(fs.readFileSync("test.css", "UTF-8"));
console.log(cssContent);

console.assert(Object.keys(cssContent).length == 1);
console.assert(Object.keys(cssContent)[0] === "rulesets");
console.assert(cssContent.rulesets[0].selector === "body");
console.assert(cssContent.rulesets[0].declaration.length == 4);
console.assert(cssContent.rulesets[0].declaration[0].key === "color");
console.assert(cssContent.rulesets[0].declaration[0].value === "black");
console.assert(cssContent.rulesets[0].declaration[1].key === "background");
console.assert(cssContent.rulesets[0].declaration[1].value === "gray");

/*tests
console.log(Object.keys(cssContent)[0]);
console.log(cssContent.rulesets);
console.log(cssContent.rulesets[0].declaration[0].key); */