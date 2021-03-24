import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from 'reducers'
import { ThemeProvider } from 'styled-components'

import { baseTheme } from 'themes/base-theme'
import { GlobalStyle } from 'components/Base'
import AppRoutes from './AppRoutes'

export const applyMiddlewareWithDevTools = () => composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(rootReducers, applyMiddlewareWithDevTools())

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
