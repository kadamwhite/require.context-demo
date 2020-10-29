import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Load all SVGs from svgs/ folder using require.context
// Docs: https://webpack.js.org/guides/dependency-management/#requirecontext
const requireImg = require.context( './svgs', false, /\.svg$/ );
// requireImg is now both a "context", meaning it has a list of matched modules,
// but also a function that behaves like `require()` does (similar to `import`).
// To get an array of the icon paths, we pass each module in the context to
// the module function. It's opaque but that's Webpack for you... not ideal.
const imgSources = requireImg.keys().map( module => requireImg( module ).default );

ReactDOM.render(
  <React.StrictMode>
    <div>
      { imgSources.map( imgPath => (
        <img src={ imgPath } alt="this is descriptive I promise" />
      ) ) }
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
