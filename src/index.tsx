import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Hello from './Hello';

ReactDOM.render(
  <Hello name="Kevin" enthusiasmLvl={3} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
