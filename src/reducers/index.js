import { combineReducers } from 'redux'
import retailReducer from 'reducers/retail-reducer'

const appReducers = combineReducers({
  retail: retailReducer
})

const rootReducers = (state, action) => {
  return appReducers(state, action)
}

export default rootReducers
