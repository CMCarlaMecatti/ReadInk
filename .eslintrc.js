module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/indent": ["error", "tab"],
		"no-tabs": "off",
	},
};
