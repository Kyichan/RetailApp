import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

export const StyHeader = styled(Header)`
  background-color: ${({ theme }) => theme.header.backgroundColor};
  height: unset;
  padding: unset;
`

export const StyLayout = styled(Layout)`
  background-color: ${({ theme }) => theme.body.backgroundColor};
`

const StyFooter = styled(Footer)`
  padding: unset;
`

const FullWidthLayout = props => {
  const { header, footer, children } = props

  return (
    <StyLayout>
      {header && <StyHeader>{header}</StyHeader>}
      <Content>{children}</Content>
      {footer && <StyFooter>{footer}</StyFooter>}
    </StyLayout>
  )
}

export default FullWidthLayout

FullWidthLayout.propTypes = {
  header: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}
