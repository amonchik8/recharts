module.exports = {
  settings: {
    'import/resolver': 'webpack',
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    'jsx-a11y/media-has-caption': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/destructuring-assignment': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 'off',
    'max-classes-per-file': ['error', 2],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/button-has-type': 'off',
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/jsx-key': ['error', { checkFragmentShorthand: false }],
  },
};