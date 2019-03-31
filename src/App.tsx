import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots, faComment } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Todos from './containers/Todos/Todos';

library.add(faCommentDots, faComment, faEllipsisH);

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
