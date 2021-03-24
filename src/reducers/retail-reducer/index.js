import actionTypes from 'actions/action-types'

const initialState = {
  accounts: [],
  account: {}
}

const retailReducer = (state = initialState, action) => {
  const actionTypesPrefix = actionTypes.RETAIL
  switch (action.type) {
    case actionTypesPrefix.GET_ACCOUNTS:
      return { ...state, accounts: action.payload }
    case actionTypesPrefix.GET_TRANSACTION_BY_ID:
      return {
        ...state,
        account: {
          account_id: action.payload.accountId,
          transactions: action.payload.transactions
        }
      }
    case actionTypesPrefix.RESET_ACCOUNT:
      return { ...state, account: action.payload }
    default:
      return state
  }
}

export default retailReducer
