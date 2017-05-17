import React from 'react';
import ReactDOM from 'react-dom';

import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={(arg) => console.log(arg)} />
    <DelayedButton  onDelayedClick={() => console.log(arguments)}/>
  </div>,
  document.getElementById('main')
);



require('./test/index-test.js'); // Leave this in!
