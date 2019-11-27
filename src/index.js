import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-slider/dist/css/bootstrap-slider.css"
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import ErrorBoundary from "./components/error-boundary/error-boundary";

ReactDOM.render(
    <ErrorBoundary>
        <App/>
    </ErrorBoundary>
    , document.getElementById('root')
);

