import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer.jsx';
import middleware from '../middlewares/middleware.jsx';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    //const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
    //const store = createStoreWithMiddleware(rootReducer, initialState)
    const store = createStore(rootReducer, initialState, applyMiddleware(middleware))

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}