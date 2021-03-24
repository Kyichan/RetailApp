import actionTypes from 'actions/action-types'
import { getAccounts, getTransactionByAccountId } from 'api'

export const getAccountsAction = () => async dispatch => {
  try {
    let response = await getAccounts()
    if (response && response.default) {
      dispatch({
        type: actionTypes.RETAIL.GET_ACCOUNTS,
        payload: response.default
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.RETAIL.GET_ACCOUNTS,
      payload: []
    })
    throw error
  }
}

export const getTransactionByIdAction = accountId => async dispatch => {
  try {
    let response = await getTransactionByAccountId(accountId)
    if (response && response.default) {
      dispatch({
        type: actionTypes.RETAIL.GET_TRANSACTION_BY_ID,
        payload: {
          accountId,
          transactions: response.default
        }
      })
      return true
    }
  } catch (error) {
    dispatch({
      type: actionTypes.RETAIL.GET_TRANSACTION_BY_ID,
      payload: []
    })
    throw error
  }
}

export const resetAccountAction = () => dispatch => {
  try {
    dispatch({
      type: actionTypes.RETAIL.RESET_ACCOUNT
    })
  } catch (error) {
    dispatch({
      type: actionTypes.RETAIL.RESET_ACCOUNT
    })
  }
}
