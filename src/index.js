import React from 'react';
import { render } from 'react-dom';

import App from './App.js';
import 'semantic-ui-css/semantic.min.css';
import 'toastr/build/toastr.min.css';
import './styles/style.css';

render(<App />, document.getElementById('root'));