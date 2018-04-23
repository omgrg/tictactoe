import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import Game from './App/Components/Game/Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
