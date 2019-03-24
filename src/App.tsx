import * as React from 'react';
import './App.css';

import Todos from './containers/Todos/Todos';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
