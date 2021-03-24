import * as accounts from './db/accounts.json'
import * as transactionsOne from './db/transactions-1.json'
import * as transactionsTwo from './db/transactions-2.json'
import * as transactionsThree from './db/transactions-3.json'
import * as transactionsFour from './db/transactions-4.json'

export const getAccounts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(accounts)
    }, 300)
  })
}

export const getTransactionByAccountId = accountId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (accountId === 1) {
        resolve(transactionsOne)
      } else if (accountId === 2) {
        resolve(transactionsTwo)
      } else if (accountId === 3) {
        resolve(transactionsThree)
      } else if (accountId === 4) {
        resolve(transactionsFour)
      }
    }, 300)
  })
}
