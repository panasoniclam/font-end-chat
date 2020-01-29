import React from 'react'
import Test from './components/index'

import { createStore ,applyMiddleware} from 'redux'
import myReducer from  './reducers/index'
import { Provider } from 'react-redux'
import  rootSaga from  './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(myReducer,applyMiddleware(sagaMiddleware))
 sagaMiddleware.run(rootSaga)
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