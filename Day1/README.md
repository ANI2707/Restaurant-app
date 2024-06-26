# Namste React

## parcel
-Dev build
-local server
-HMR=hot module replacement
-file watching algorithm - written in c++
-Caching -Faster Builds
-Image optimization 
-Minification
-Bundling
-Compress files
-Consistent Hashing
-code splitting
-differential Bundling-support older browsers
-Diagnostic
-Error Handling
-Https
-Tree Shaking -Remove unused code
-Different dev and prod bundles

# Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 

 # Two types of Export/Import

 -default Export/Import
 export default component
 import component from "path"

 -Named Export/Import
 export const Component;
 import Component from "path"

 # React Hooks
 - Normal JS Utility functions
 - useState() - superpowerfull state variables 
 - useEffect()


# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux

 - Build our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - selector
 
# Types of testing (developer)
- Unit testing
- Integration Testing
- End to end testing (e2e testing)

# setting up testing in are app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- configure Babel
- configure parcel config file to disable default babel transpilation

- Jest npx jest --init
- Install jsdom library


- create folder __tests__ it contsins all test files
- or you can write test inside  - header.test.js
                                - header.test.ts
                                - header.spec.js
                                - header.spec.ts

- __ is called dunder method

- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react in babel.config.js
- module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-react",{runtime:"automatic"}],
    ],
    };


- Install @testing-library/jest-dom
   -npm i -D @testing-library/jest-dom  




