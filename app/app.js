// Framework and routing
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

// Authentication
// import { authenticateUser, logOutUser } from './services/authentication';

// Include styles


// Import containers for routing
import Home from './routes/Home/index';

// Import global navigation components


// Import Reducers
import reducer from './reducer';

// Import sagas
import rootSaga from './saga';

// Create middleware and store
const sagaMiddleware = createSagaMiddleware();
const store = compose(
   applyMiddleware(sagaMiddleware),
   window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)(reducer);

// Run sagas
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      // onLoad={authenticateUser(store.dispatch)}
      // onUpdate={authenticateUser(store.dispatch)}>
      >
        <Route path="/" component={Home}/>
    
    </Router>
  </Provider>,

  document.getElementById('outdoorsyish')
);