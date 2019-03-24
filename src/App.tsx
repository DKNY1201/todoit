import * as React from 'react';

import Todos from './containers/Todos/Todos';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Todos />
      </div>
    );
  }
}

export default App;
