import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Root} from './Root';

import {store} from './store';

ReactDOM.render(
  <StrictMode>
    <Root store={store} />
  </StrictMode>,
  document.getElementById('app')
);
