module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    'comma-dangle': [2, 'never'],
    'no-use-before-define': [2, 'nofunc'],
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, {
      before: false,
      after: true
    }],
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
