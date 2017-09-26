const modulePath = "pages/{{camelCase name}}.js";
const SRC_PATH = './';

module.exports = function(plop) {
	plop.addHelper("upperCase", function(text) {
		return text.toUpperCase();
	});

  //component
	plop.setGenerator("component", {
		description: "Create a new React Component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name?"
			}
		],
		actions: [
			//component
			{
				type: "add",
				path: "src/{{dashCase name}}/index.js",
				templateFile: "plop-templates/component.tmpl.js"
			},
			//style
			{
				type: "add",
				path: "src/{{dashCase name}}/style.scss",
				templateFile: "plop-templates/component.tmpl.scss"
			},
			//test
			{
				type: "add",
				path: "__tests__/components/{{dashCase name}}.test.js",
				templateFile: "plop-templates/component.test.tmpl.js"
			},
			//readme
			{
				type: "add",
				path: "docs/{{dashCase name}}.md",
				templateFile: "plop-templates/component.tmpl.md"
			}
		]
	});
  //Test spec
	plop.setGenerator("test", {
		description: "Create a new React Test",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name?"
			}
		],
		actions: [//test
			{
				type: "add",
				path: "__tests__/components/{{dashCase name}}.test.js",
				templateFile: "plop-templates/component.test.tmpl.js"
			}
		]
	});
};
