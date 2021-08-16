import {Provider} from 'react-redux';
import {TStore} from 'store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {SimpleModuleRoute} from './modules/SimpleModule';

interface IProps {
  store: TStore;
}

export const Root = ({store}: IProps) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SimpleModuleRoute} exact />

          <Route>
            <h1>404 Page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
