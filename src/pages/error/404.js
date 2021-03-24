import React from 'react'
import { FullWidthLayout } from 'components/Base'
import { Result } from 'antd'

const _renderContent = () => {
  return <Result status="404" title="404" subTitle={'404'} />
}

const FourOFourPage = props => {
  return <FullWidthLayout {...props}>{_renderContent()}</FullWidthLayout>
}

export default FourOFourPage
