const modulePath = "pages/{{camelCase name}}.js";
const SRC_PATH = './';
const ns = 'px-';

const COMP_SRC = './src/components/px';


/**
helpers
camelCase: changeFormatToThis
snakeCase: change_format_to_this
dashCase/kebabCase: change-format-to-this
dotCase: change.format.to.this
pathCase: change/format/to/this
properCase/pascalCase: ChangeFormatToThis
lowerCase: change format to this
sentenceCase: Change format to this,
constantCase: CHANGE_FORMAT_TO_THIS
titleCase: Change Format To This
pkg: look up a property from a package.json file in the same folder as the plopfile.

*/
module.exports = function(plop) {

  const ACTIONS = {
    ADD_COMPONENT: {
      type: "add",
      path: COMP_SRC + "/{{dashCase name}}/Popover.jsx",
      templateFile: "plop-templates/component.tmpl.js"
    }
  };


  plop.addHelper("upperCase", function(text) {
		return text.toUpperCase();
	});

  plop.addHelper('unprefixedName', function(text) {
		return text.replace(ns, '');
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
			ACTIONS.ADD_COMPONENT,
			//scss styles
			/*
			{
				type: "add",
				path: COMP_SRC + "/{{dashCase name}}/styles/index.scss",
				templateFile: "plop-templates/component.tmpl.scss"
			},
*/
			//test
			{
				type: "add",
				path: COMP_SRC +"/{{dashCase name}}/index.test.js",
				templateFile: "plop-templates/component.test.tmpl.js"
			},
			//readme
			{
				type: "add",
				path: COMP_SRC +"/{{dashCase name}}/README.md",
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
		actions: [
			{
				type: "add",
				//path: "__tests__/components/{{dashCase name}}.test.js",
				path: "src/{{dashCase name}}/{{dashCase name}}.test.js",
				templateFile: "plop-templates/component.test.tmpl.js"
			}
		]
	});
	//Readme
	plop.setGenerator('readme', {
		description: 'Create a new component README.md',
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name?"
			}
		],
		actions: [
			{
				type: "add",
				path: "src/{{dashCase name}}/README.md",
				templateFile: "plop-templates/component.tmpl.md"
			}
		]
	});

	//Batch create
	plop.setGenerator('batch-test', {
		description: 'Create a bunch of tests',
		prompts: [
			{
				type: "input",
				name: "names",
				message: "What are the names?"
			}
		],
		actions: function(data) {
			var files = data.names.split(',');
			console.log('create', files);
			var actions = [];
			actions.push({
				type: "add",
				path: "src/{{dashCase name}}/{{dashCase name}}.test.js",
				templateFile: "plop-templates/component.test.tmpl.js"
			});
			return actions;
		}
	});

  //const generators = plop.getGeneratorList();
  //console.log('registered generators', generators);
};
