import React from 'react'

import { FullWidthLayout } from 'components/Base'
import Header from 'containers/Header'
import AccountList from 'containers/AccountList'

const AccountListPage = props => {
  return (
    <FullWidthLayout {...props} header={<Header />}>
      <AccountList />
    </FullWidthLayout>
  )
}

export default AccountListPage
