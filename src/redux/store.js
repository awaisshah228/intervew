import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducers from './rootReducer'

const store = configureStore({
  reducer: rootReducers,
})
const ReduxProvider = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider