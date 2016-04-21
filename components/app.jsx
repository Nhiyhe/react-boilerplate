
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/browser/ambient/react-global/index.d.ts" />

var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('./main');

ReactDOM.render(
    <Main />,
    document.getElementById('example')
);
