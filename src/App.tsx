import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots, faComment } from '@fortawesome/free-regular-svg-icons';

import Todos from './containers/Todos/Todos';

library.add(faCommentDots, faComment);

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
