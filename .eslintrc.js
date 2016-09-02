module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "strict": 0
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "settings": {
    "react": {
      "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "15.0" // React version, default to the latest React stable release
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
