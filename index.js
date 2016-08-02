module.exports = {
  extends: [
    'eslint-config-airbnb/base'
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    'comma-dangle': [2, 'never'],
    'no-use-before-define': [2, 'nofunc'],

    // Replace default rule with one from eslint-plugin-babel to avoid errors
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, {
      before: false,
      after: true
    }],

    // Replace default rule with one from eslint-plugin-babel to avoid errors
    // The babel rule is based off an older version of the original, and does
    // not support the additional properties defined in the airbnb-base config.
    'object-shorthand': 0,
    'babel/object-shorthand': 2,

    indent: [2, 2, {
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3
      },
      SwitchCase: 1
    }],
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
    'require-jsdoc': [2, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: false
      }
    }],
    'valid-jsdoc': [2, {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false
    }]
  }
};
