import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TransactionDetailContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 0px 16px;
  margin: 0px auto;
`

const StyRowWrapper = styled(Row)`
  padding-top: 16px;
  height: 100%;
  flex: 1 1 0%;
`

const TransactionDetailWrapper = styled.div`
  width: 100%;
  padding: 0 6px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.0125em;
  line-height: 24px;
  color: #343a40;
`

const TransactionDetailContent = styled.div`
  margin-bottom: 10px;
`

const TransactionDetailTitleWrapper = styled.div`
  display: flex;
`

const TransactionDetailTitle = styled.h2`
  margin-bottom: 20px;
`

const InfoLabel = styled.span`
  font-weight: 600;
`
const renderTransactionContent = ({ label, content }) => (
  <TransactionDetailContent>
    <InfoLabel>{label}:</InfoLabel> {content}
  </TransactionDetailContent>
)

const TransactionDetail = props => {
  const history = useHistory()
  const currTransactionId = history.location.state.transactionId
  const { account } = useSelector(state => state.retail)
  const { transactions = [] } = account || {}
  const currTransaction = transactions.find(transaction => transaction.id === currTransactionId)

  return (
    <TransactionDetailContainer>
      <StyRowWrapper>
        <Row>
          <Col>
            <TransactionDetailTitleWrapper>
              <TransactionDetailTitle>Detail of Transaction {currTransactionId}</TransactionDetailTitle>
            </TransactionDetailTitleWrapper>
          </Col>
        </Row>
        <Row>
          <Col>
            <TransactionDetailWrapper>
              {currTransaction.description &&
                renderTransactionContent({ label: 'Description', content: currTransaction.description })}
              {currTransaction.from && renderTransactionContent({ label: 'From', content: currTransaction.from })}
              {currTransaction.transaction_date &&
                renderTransactionContent({ label: 'Transaction Date', content: currTransaction.transaction_date })}
              {currTransaction.transaction_processed &&
                renderTransactionContent({
                  label: 'Transaction Process',
                  content: currTransaction.transaction_processed ? 'Successful' : 'Fail'
                })}
            </TransactionDetailWrapper>
          </Col>
        </Row>
      </StyRowWrapper>
    </TransactionDetailContainer>
  )
}
export default TransactionDetail

TransactionDetail.propTypes = {}

renderTransactionContent.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string
}
