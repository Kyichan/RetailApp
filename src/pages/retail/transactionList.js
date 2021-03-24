import React from 'react'

import { FullWidthLayout } from 'components/Base'
import Header from 'containers/Header'
import TransactionList from 'containers/TransactionList'

const TransactionListPage = props => {
  return (
    <FullWidthLayout {...props} header={<Header />}>
      <TransactionList />
    </FullWidthLayout>
  )
}

export default TransactionListPage
