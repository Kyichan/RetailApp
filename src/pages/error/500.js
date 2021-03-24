import React from 'react'
import { FullWidthLayout } from 'components/Base'
import { Result } from 'antd'

const _renderContent = () => {
  return <Result status="500" title="500" subTitle={'505'} />
}

const FiveOOPage = props => {
  return <FullWidthLayout {...props}>{_renderContent()}</FullWidthLayout>
}

export default FiveOOPage
