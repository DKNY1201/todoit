import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faCommentDots, faFlag } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH, faGripVertical, faTag } from '@fortawesome/free-solid-svg-icons';

import Todos from './containers/Todos/Todos';

library.add(faCommentDots, faCalendarAlt, faEllipsisH, faGripVertical, faTag, faFlag);

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
