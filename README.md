# eslint-config-bravissimo

This is the ESLint configuration for [Bravissimo](http://bravissimolabs.com) projects. It's based off [Airbnb's style guide](https://github.com/airbnb/javascript) with a few customisations.

## Rules

The following rules apply in addition to (or instead of) the [base Airbnb rules](https://github.com/airbnb/javascript):

- 2-space indentation including case clauses ([`indent`](http://eslint.org/docs/rules/indent))  
- No dangling commas ([`comma-dangle`](http://eslint.org/docs/rules/comma-dangle))  
- Max line length of 120 chars, excluding URLs ([`max-len`](http://eslint.org/docs/rules/max-len))  
- Use the [`generator-star-spacing`](http://eslint.org/docs/rules/generator-star-spacing) rule from [`eslint-plugin-babel`](https://github.com/babel/eslint-plugin-babel) to enable support of async/await (see [this comment](https://github.com/eslint/eslint/issues/6528#issuecomment-228324958))  
- Use the [`object-shorthand`](http://eslint.org/docs/rules/object-shorthand) rule from [`eslint-plugin-babel`](https://github.com/babel/eslint-plugin-babel) to handle async functions correctly (note: this is an older version of the plugin that does not support the additional properties defined in the airbnb config)
- Allow functions to be defined after they're used given they'll always be safely hoisted ([`no-use-before-define`](http://eslint.org/docs/rules/no-use-before-define))  
- Ensure every function and method has a valid jsdoc comment ([`require-jsdoc`](http://eslint.org/docs/rules/require-jsdoc) and [`valid-jsdoc`](http://eslint.org/docs/rules/valid-jsdoc))  

## Installation

    $ npm install --save-dev \
        eslint@^3.2.2 \
        eslint-plugin-babel@^3.3.0 \
        eslint-plugin-import@^1.12.0
        eslint-config-bravissimo@^2.0.0 \

## Usage

Add the following lines to your `package.json`:

    "eslintConfig": {
      "extends": [
        "bravissimo"
      ]
    },

Alternatively, add the following to an `.eslintrc` file in your project root:

    {
      "extends": "bravissimo"
    }

## More information

Full details on configuring and using ESLint can be found on the [ESLint User Guide](http://eslint.org/docs/user-guide/).
