import React from 'react'
import Test from './components/index'
import '@babel/polyfill'
import { createStore ,applyMiddleware} from 'redux'
import myReducer from  './reducers/index'
import { Provider } from 'react-redux'
import  rootSaga from  './sagas'
import createSagaMiddleware from 'redux-saga'
import setupSockets from  './sockets/index'
import  './styles/styles.less'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(myReducer,applyMiddleware(sagaMiddleware))
const socket  = setupSockets(store.dispatch)
sagaMiddleware.run(rootSaga,{socket})
class App extends React.Component {
    render() {
        return (
             <Provider store={store}>
                 <Test/>
             </Provider>
        )
    }
}
export default App