import React from 'react'

import { FullWidthLayout } from 'components/Base'
import Header from 'containers/Header'
import TransactionDetail from 'containers/TransactionDetail'

const TransactionDetailPage = props => {
  return (
    <FullWidthLayout {...props} header={<Header />}>
      <TransactionDetail />
    </FullWidthLayout>
  )
}

export default TransactionDetailPage
